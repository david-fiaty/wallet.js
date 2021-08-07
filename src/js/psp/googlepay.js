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

        // Button event
        button.addEventListener('click', function () {    
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

