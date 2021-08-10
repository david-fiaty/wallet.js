'use strict';

require('../../css/apple-pay.css');

const helper = require('core/helper');

const Payment = require('core/payment');

module.exports = class ApplePay extends Payment {
    constructor(targetId, params) { 
        // Default options
        let defaultOptions = {
            debug: false,
            config: {

            },
            payment: {

            },
        };

        // Required options
        let requiredOptions = [
            'merchantId',
        ];

        // Parent constructor
        super(defaultOptions, requiredOptions, params);  

        // Initialize
        this.init(targetId);
    }

    init (targetId) {
        // Prepare variables
        let self = this;
        let button = document.querySelector(targetId);
        let buttonClasses = [
            'apple-pay',
            'apple-pay-button',
            'apple-pay-button-' + this.params.config.buttonStyle,
        ];

        // Button display
        button.classList.add(...buttonClasses);

        // Prepare the payment
        self.preparePayment();

        // Button event
        button.addEventListener('click', function () {    
            self.requestPayment();
        });

        // Payment amount
        if (true) { 
            this.setAmount(this.params.amount);
        }
    }

    preparePayment()
    {
        // Check session
        try {
            if (window.ApplePaySession) {
                helper.logError('Wallet.js - Apple Pay is not available for this browser.');
                return;
            }
            
            // Promise
            let promise = ApplePaySession.canMakePaymentsWithActiveCard(
                this.params.config.merchantId
            );

            // Check payment status
            promise.then(
                function (canMakePayments) {
                    if (!canMakePayments) {
                        helper.logError('Wallet.js - Apple Pay is not available for this browser.');
                    } 
                }
            ).catch(
                function (error) {
                    helper.logError(error);
                }
            );
        }
        catch (e) {
            helper.logError('Wallet.js - Initialization error');
            helper.logError(e);
        }
    }

    requestPayment() {
        // Prepare variables
        let self = this;

        // Start the payment session
        let session = new ApplePaySession(1, {
            currencyCode: this.params.config.currencyCode,
            countryCode: this.params.config.countryCode,
            total: {
                label: this.params.config.displayName,
                amount: this.amount
            },
            supportedNetworks: this.params.config.supportedNetworks,
            merchantCapabilities: this.params.config.merchantCapabilities,
        });

        // Merchant Validation
        session.onvalidatemerchant = function (e) {
            let promise = self.performValidation(e);
            promise.then(
                function (merchantSession) {
                    session.completeMerchantValidation(merchantSession);
                }
            ).catch(
                function (error) {
                    Utilities.log(error);
                }
            );
        }

        // Shipping contact
        session.onshippingcontactselected = function (event) {
            let status = ApplePaySession.STATUS_SUCCESS;

            // Shipping info
            let shippingOptions = [];
        
            let newTotal = {
                type: 'final',
                label: ap['storeName'],
                amount: runningTotal
            };
        
            session.completeShippingContactSelection(status, shippingOptions, newTotal, self.getLineItems());
        }

        // Shipping method selection
        session.onshippingmethodselected = function (event) {
            let status = ApplePaySession.STATUS_SUCCESS;
            let newTotal = {
                type: 'final',
                label: ap['storeName'],
                amount: runningTotal
            };

            session.completeShippingMethodSelection(status, newTotal, self.getLineItems());
        }

        // Payment method selection
        session.onpaymentmethodselected = function (event) {
            let newTotal = {
                type: 'final',
                label: Utilities.getStoreName(),
                amount: runningTotal
            };
        
            session.completePaymentMethodSelection(newTotal, self.getLineItems());
        }

        // Payment method authorization
        session.onpaymentauthorized = function (event) {
            // Prepare the payload
            let payload = {
                methodId: METHOD_ID,
                cardToken: event.payment.token,
                source: METHOD_ID
            };

            // Send the request
            var promise = self.sendPaymentRequest(payload);
            promise.then(
                function (success) {
                    var status;
                    if (success) {
                        status = ApplePaySession.STATUS_SUCCESS;
                    } else {
                        status = ApplePaySession.STATUS_FAILURE;
                    }
            
                    session.completePayment(status);

                    if (success) {
                        // Redirect to success page
                        FullScreenLoader.startLoader();
                        RedirectOnSuccessAction.execute();
                    }
                }
            ).catch(
                function (error) {
                    Utilities.log(error);
                }
            );
        }

        // Session cancellation
        session.oncancel = function (event) {
            Utilities.log(event);
        }

        // Begin session
        session.begin();
    }

    performValidation (e) {        
        return new Promise(
            function (resolve, reject) {
                let xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(JSON.parse(this.responseText));
                };
                xhr.onerror = reject;
                // Todo- improve params handling
                xhr.open('GET', this.params.config.config.validationURL + '?u=' + e.validationURL); 
                xhr.send();
            }
        );
    }
}