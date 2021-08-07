'use strict';

require('../../css/googlepay.css');
const script = require('scriptjs');

module.exports = class GooglePay {
    constructor(params) {
        this.params = params;

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

        // Prepare payment
        //this.preparePayment();

        // Button event
        button.addEventListener('click', function () {    
            self.preparePayment();

            //self.pay()
        });
    }

    preparePayment()
    {
        var self = this;
        this.client = this.getPaymentClient();

        self.client.isReadyToPay({ 
            allowedPaymentMethods: self.params.config.allowedPaymentMethods
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

    prefetchPaymentData()
    {
        var paymentDataRequest = this.getPaymentData();

        // TransactionInfo must be set but does not affect cache
        paymentDataRequest.transactionInfo = {
            totalPriceStatus: 'NOT_CURRENTLY_KNOWN',
            currencyCode: this.params.payment.currencyCode,
        };

        this.client.prefetchPaymentData(paymentDataRequest);
    }

    getPaymentData ()
    {
        return {
            merchantId: this.params.config.merchantId,
            paymentMethodTokenizationParameters: {
                tokenizationType: this.params.config.tokenizationType,
                parameters: {
                    'gateway': this.params.config.gatewayName,
                    'gatewayMerchantId': this.params.config.merchantId,
                }
            },
            allowedPaymentMethods: this.params.config.allowedPaymentMethods,
            cardRequirements: {
                allowedCardNetworks: this.params.config.allowedCardNetworks
            }
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

