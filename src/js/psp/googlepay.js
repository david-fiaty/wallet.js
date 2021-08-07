'use strict';

require('../../css/googlepay.css');
const script = require('scriptjs');

module.exports = class GooglePay {
    constructor(params) {
        this.params = params;

        script(process.env.GOOGLE_PAY_SCRIPT);

        this.createButton();
        this.createEvent();
    }

    createButton () {
        document.getElementById('wallet').classList.add(
            'google-pay-button-' + this.params.config.buttonStyle
        );
    }

    createEvent () {
        var self = this;
        document.getElementById('wallet').addEventListener('click', function () {    
            self.loadGooglePay()
        });
    }

    loadGooglePay()
    {
        var self = this;
        this.client = this.getGooglePaymentsClient();

        self.client.isReadyToPay({ 
            allowedPaymentMethods: self.params.config.allowedPaymentMethods
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
            currencyCode: this.params.payment.currencyCode,
        };

        this.client.prefetchPaymentData(paymentDataRequest);
    }

    getGooglePaymentDataConfiguration ()
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

    getGooglePaymentsClient()
    {
        return (new google.payments.api.PaymentsClient(
            {
                environment: this.params.config.environment
            }
        ));
    }
}

