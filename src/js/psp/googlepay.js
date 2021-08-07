'use strict';

require('../../css/googlepay.css');
var script = require('scriptjs');

module.exports = class GooglePay {
    constructor(params) {
        this.params = params;

        this.createButton();
        this.createEvent();

        script(process.env.GOOGLE_PAY_SCRIPT);


    }

    createButton () {
        document.getElementById('wallet').classList.add(
            'google-pay-button-' + this.params.config.buttonStyle
        );
    }

    createEvent () {
        document.getElementById('wallet').addEventListener(
            'click',
            this.loadGooglePay().bind(this)
        );
    }

    loadGooglePay()
    {
        console.log(this.config);
        var self = this;
        this.client = this.getGooglePaymentsClient();

        this.client.isReadyToPay({ 
            allowedPaymentMethods: this.config.allowedPaymentMethods
        })
        .then(
            function (response) {
                if (response.result) {
                    self.prefetchGooglePaymentData();
                }
            }
        )
        .catch(
            function (err) {
                console.log(err);
            }
        );

    }

    prefetchGooglePaymentData()
    {
        var paymentDataRequest = this.getGooglePaymentDataConfiguration();

        // TransactionInfo must be set but does not affect cache
        paymentDataRequest.transactionInfo = {
            totalPriceStatus: 'NOT_CURRENTLY_KNOWN',
            currencyCode: this.config.paymentDataRequest.currencyCode,
        };

        this.client.prefetchPaymentData(paymentDataRequest);
    }

    getGooglePaymentDataConfiguration ()
    {
        return {
            merchantId: this.config.merchantId,
            paymentMethodTokenizationParameters: {
                tokenizationType: this.config.tokenizationType,
                parameters: {
                    'gateway': this.config.gatewayName,
                    'gatewayMerchantId': this.config.merchantId,
                }
            },
            allowedPaymentMethods: this.config.allowedPaymentMethods,
            cardRequirements: {
                allowedCardNetworks: this.config.allowedCardNetworks
            }
        };
    }

    getGooglePaymentsClient()
    {
        return (new google.payments.api.PaymentsClient(
            {
                environment: this.config.environment
            }
        ));
    }
}

