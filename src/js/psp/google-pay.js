'use strict';

require('../../css/google-pay.css');
const script = require('scriptjs');
const helper = require('core/helper');

module.exports = class GooglePay {
    constructor(params) {
        var defaults = {
            d1: 'def1',
            d2: 'def2',
        };

        this.params = helper.extendDefaults(defaults, params);
        this.init();
    }

    init () {
        // Prepare variables
        var self = this;
        var button = document.getElementById(this.params.targetId);
        var buttonClass = 'google-pay-button-' + this.params.config.buttonStyle;

        // Load the remote script
        script(process.env.GOOGLE_PAY_SCRIPT);

        // Button display
        button.classList.add(buttonClass);

        // Button event
        button.addEventListener('click', function () {    
            self.preparePayment();
            self.requestPayment();
        });
    }


    preparePayment()
    {
        var self = this;
        this.client = this.getPaymentClient();


        console.log('------');

        console.log(this.params);

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

    requestPayment () {
        var paymentData = this.getPaymentData();
        var self = this;

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
            currencyCode: this.params.payment.currencyCode,
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

