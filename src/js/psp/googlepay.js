'use strict';

require('../../css/googlepay.css');
var script = require('scriptjs');

module.exports = class GooglePay {
    constructor(params) {
        this.params = params;

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
            self.loadGooglePay();
        });
    }

    loadGooglePay()
    {
        var self = this;
        var paymentsClient = this.getGooglePaymentsClient();

        paymentsClient.isReadyToPay({ 
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

    init() {
        var self = this;


        // Initialize Google Pay
        script(process.env.GOOGLE_PAY_SCRIPT, function() {
            console.log('GooglePay');
            console.log(self.params);
        });
    }
}

