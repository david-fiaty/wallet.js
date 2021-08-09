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
            'gatewayName',
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
        if (true) { // If amount and currency provided on init
            this.setAmount(
                this.params.payment.amount,
                this.params.payment.currencyCode
            );
        }
    }

    preparePayment()
    {
        // Check session
        if (window.ApplePaySession) {
            helper.logError('Wallet.js - Apple Pay is not available for this browser.');
            return;
        }

        // Prepare variables
        let merchantIdentifier = this.params.config.merchantId;
        let promise = ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
        
        // Promise
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

    requestPayment() {
        // Prepare the parameters
        var runningTotal         = Utilities.getQuoteValue();
        var billingAddress       = Utilities.getBillingAddress();

        // Build the payment request
        var paymentRequest = {
            currencyCode: Utilities.getQuoteCurrency(),
            countryCode: window.checkoutConfig.defaultCountryId,
            total: {
                label: Utilities.getStoreName(),
                amount: runningTotal
            },
            supportedNetworks: self.getSupportedNetworks(),
            merchantCapabilities: self.getMerchantCapabilities()
        };

        // Start the payment session
        var session = new ApplePaySession(1, paymentRequest);

        // Merchant Validation
        session.onvalidatemerchant = function (event) {
            var promise = self.performValidation(event.validationURL);
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
            var status = ApplePaySession.STATUS_SUCCESS;

            // Shipping info
            var shippingOptions = [];
        
            var newTotal = {
                type: 'final',
                label: ap['storeName'],
                amount: runningTotal
            };
        
            session.completeShippingContactSelection(status, shippingOptions, newTotal, self.getLineItems());
        }

        // Shipping method selection
        session.onshippingmethodselected = function (event) {
            var status = ApplePaySession.STATUS_SUCCESS;
            var newTotal = {
                type: 'final',
                label: ap['storeName'],
                amount: runningTotal
            };

            session.completeShippingMethodSelection(status, newTotal, self.getLineItems());
        }

        // Payment method selection
        session.onpaymentmethodselected = function (event) {
            var newTotal = {
                type: 'final',
                label: Utilities.getStoreName(),
                amount: runningTotal
            };
        
            session.completePaymentMethodSelection(newTotal, self.getLineItems());
        }

        // Payment method authorization
        session.onpaymentauthorized = function (event) {
            // Prepare the payload
            var payload = {
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
}