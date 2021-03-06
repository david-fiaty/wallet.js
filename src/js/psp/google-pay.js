require('../../css/google-pay.css');

const script = require('scriptjs');
const helper = require('core/helper');

const Payment = require('core/payment');

module.exports = class GooglePay extends Payment {
  constructor(targetSelector, params) {
    // Default options
    const defaultOptions = {
      debug: false,
      config: {
        environment: 'TEST',
        buttonStyle: 'white',
        currencyCode: 'USD',
        allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
        allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
        allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        tokenizationType: 'PAYMENT_GATEWAY',
        totalPriceStatus: 'FINAL',
      },
    };

    // Required options
    const requiredOptions = [
      'merchantId',
      'gatewayName',
    ];

    // Parent constructor
    super(defaultOptions, requiredOptions, params);

    // Initialize
    this.init(targetSelector);
  }

  init(targetSelector) {
    // Prepare variables
    const self = this;
    const button = document.querySelector(targetSelector);
    const buttonClasses = [
      'google-pay',
      'google-pay-button',
      `google-pay-button-${this.params.config.buttonStyle}`,
    ];

    // Load the remote script
    script(process.env.GOOGLE_PAY_SCRIPT);

    // Button display
    button.classList.add(...buttonClasses);

    // Button event
    button.addEventListener('click', () => {
      // Prepare payment
      self.preparePayment();

      // Request payment
      self.requestPayment();
    });

    // Payment amount
    if (true) {
      this.setAmount(this.params.amount);
    }
  }

  preparePayment() {
    // Variables
    let self = this;

    // Payment client
    this.client = this.getPaymentClient();
    this.client.isReadyToPay({
      allowedPaymentMethods: this.params.config.allowedPaymentMethods,
    })
      .then(
        (response) => {
          if (response.result) {
            // Prefetch data
            self.prefetchPaymentData();

            // Payment ready event
            self.onClientLoaded(response);
          }
        },
      )
      .catch(
        (err) => {
          console.log(err);
        },
      );
  }

  requestPayment() {
    // Prepare variables
    const self = this;
    const paymentData = this.getPaymentData();

    // Validate amount
    try {
      helper.checkAmount(this.amount, this.params.config.currencyCode);
    } catch (e) {
      helper.logError(e);
    }

    // Update amount
    paymentData.transactionInfo.totalPrice = this.amount;
    paymentData.transactionInfo.currencyCode = this.params.config.currencyCode;

    // Load the payment data
    this.client.loadPaymentData(paymentData).then(
      (paymentData) => {
        self.onRequestReady(paymentData);
        self.sendRequest(paymentData);
      },
    ).catch(
      (error) => {
        console.log(error);
      },
    );
  }

  prefetchPaymentData() {
    this.paymentData = this.getPaymentData();

    // TransactionInfo must be set but does not affect cache
    this.paymentData.transactionInfo = {
      totalPriceStatus: 'NOT_CURRENTLY_KNOWN',
      currencyCode: this.params.config.currencyCode,
    };

    this.client.prefetchPaymentData(this.paymentData);
  }

  getPaymentData() {
    return {
      merchantId: this.params.config.merchantId,
      paymentMethodTokenizationParameters: {
        tokenizationType: this.params.config.tokenizationType,
        parameters: {
          gateway: this.params.config.gatewayName,
          gatewayMerchantId: this.params.config.merchantId,
        },
      },
      allowedPaymentMethods: this.params.config.allowedPaymentMethods,
      cardRequirements: {
        allowedCardNetworks: this.params.config.allowedCardNetworks,
      },
      transactionInfo: {
        totalPriceStatus: this.params.config.totalPriceStatus,
        currencyCode: this.params.config.currencyCode,
      },
    };
  }

  getPaymentClient() {
    return (new google.payments.api.PaymentsClient(
      {
        environment: this.params.config.environment,
      },
    ));
  }
};
