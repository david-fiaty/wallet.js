'use strict';

require('../../css/google-pay.css');

const script = require('scriptjs');
const Payment = require('core/payment');
const helper = require('core/helper');

module.exports = class GooglePay extends Payment {
    constructor(targetId, params) { 
        // Default options
        let defaultOptions = {
            debug: false,
            config: {
                environment: 'TEST',
                buttonStyle: 'white',
                allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
                allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
                allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            },
            payment: {
                currencyCode: 'USD',
                tokenizationType: 'PAYMENT_GATEWAY',
                totalPriceStatus: 'FINAL',
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
            'google-pay',
            'google-pay-button',
            'google-pay-button-' + this.params.config.buttonStyle,
        ];

        // Load the remote script
        script(process.env.GOOGLE_PAY_SCRIPT);

        // Button display
        button.classList.add(...buttonClasses);

        // Payment amount
        if (true) { // If amount and currency provided on init
            this.setAmount(
                this.params.payment.amount,
                this.params.payment.currencyCode
            );
        }

        // Button event
        button.addEventListener('click', function () {    
            self.preparePayment();
            self.requestPayment();
        });
    }

    preparePayment()
    {
        // Variables
        let self = this;

        // Payment client
        this.client = this.getPaymentClient();
        this.client.isReadyToPay({ 
            allowedPaymentMethods: this.params.config.allowedPaymentMethods
        })
        .then(
            function (response) {
                if (response.result) {
                    self.prefetchPaymentData();
                }
            }
        )
        .catch(
            function (err) {
                console.log(err);
            }
        );
    }

    requestPayment() {
        // Prepare variables
        let self = this;
        let paymentData = this.getPaymentData();

        // Validate amount
        try {
            helper.checkAmount(this.amount, this.currencyCode);
        }
        catch(e) {
            helper.logError(e);
        }

        // Update amount
        paymentData.transactionInfo.totalPrice = this.amount;
        paymentData.transactionInfo.currencyCode = this.currencyCode;

        // Load the payment data
        this.client.loadPaymentData(paymentData).then(
            function (paymentData) {
                self.sendRequest(paymentData);
            }
        ).catch(
            function (error) {
                console.log(error);
            }
        );
    }

    sendRequest(paymentData) {
        // Prepare the payload
        /*
        var payload = {
            cardToken: {
                signature: JSON.parse(paymentData.paymentMethodToken.token).signature,
                protocolVersion: JSON.parse(paymentData.paymentMethodToken.token).protocolVersion,
                signedMessage: JSON.parse(paymentData.paymentMethodToken.token).signedMessage,
            },
        };
        */

        // Send the request
        console.log(paymentData);
    }
    

    prefetchPaymentData()
    {
        this.paymentData = this.getPaymentData();

        // TransactionInfo must be set but does not affect cache
        this.paymentData.transactionInfo = {
            totalPriceStatus: 'NOT_CURRENTLY_KNOWN',
            currencyCode: this.currencyCode,
        };

        this.client.prefetchPaymentData(this.paymentData);
    }

    getPaymentData ()
    {
        return {
            merchantId: this.params.config.merchantId,
            paymentMethodTokenizationParameters: {
                tokenizationType: this.params.payment.tokenizationType,
                parameters: {
                    'gateway': this.params.config.gatewayName,
                    'gatewayMerchantId': this.params.config.merchantId,
                }
            },
            allowedPaymentMethods: this.params.config.allowedPaymentMethods,
            cardRequirements: {
                allowedCardNetworks: this.params.config.allowedCardNetworks
            },
            transactionInfo: this.params.payment
        };
    }

    getPaymentClient()
    {
        return (new google.payments.api.PaymentsClient(
            {
                environment: this.params.config.environment
            }
        ));
    }
}

