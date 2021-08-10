require('../../css/apple-pay.css');

const helper = require('core/helper');

const Payment = require('core/payment');

module.exports = class ApplePay extends Payment {
  constructor(targetId, params) {
    // Default options
    const defaultOptions = {
      debug: false,
      config: {

      },
      payment: {

      },
    };

    // Required options
    const requiredOptions = [
      'merchantId',
    ];

    // Parent constructor
    super(defaultOptions, requiredOptions, params);

    // Initialize
    this.init(targetId);
  }

  init(targetId) {
    // Prepare variables
    const self = this;
    const button = document.querySelector(targetId);
    const buttonClasses = [
      'apple-pay',
      'apple-pay-button',
      `apple-pay-button-${this.params.config.buttonStyle}`,
    ];

    // Button display
    button.classList.add(...buttonClasses);

    // Prepare the payment
    self.preparePayment();

    // Button event
    button.addEventListener('click', () => {
      self.requestPayment();
    });

    // Payment amount
    if (true) {
      this.setAmount(this.params.amount);
    }
  }

  preparePayment() {
    // Check session
    try {
      if (window.ApplePaySession) {
        helper.logError('Wallet.js - Apple Pay is not available for this browser.');
        return;
      }

      // Promise
      const promise = ApplePaySession.canMakePaymentsWithActiveCard(
        this.params.config.merchantId,
      );

      // Check payment status
      promise.then(
        (canMakePayments) => {
          if (!canMakePayments) {
            helper.logError('Wallet.js - Apple Pay is not available for this browser.');
          }
        },
      ).catch(
        (error) => {
          helper.logError(error);
        },
      );
    } catch (error) {
      helper.logError('Wallet.js - ' + error);
    }
  }

  requestPayment() {
    // Prepare variables
    const self = this;

    // Start the payment session
    const session = new ApplePaySession(1, {
      currencyCode: this.params.config.currencyCode,
      countryCode: this.params.config.countryCode,
      total: {
        label: this.params.config.displayName,
        amount: this.amount,
      },
      supportedNetworks: this.params.config.supportedNetworks,
      merchantCapabilities: this.params.config.merchantCapabilities,
    });

    // Merchant session validation
    session.onvalidatemerchant = function (e) {
      const promise = self.validateSession(e);
      promise.then(
        (merchantSession) => {
          session.completeMerchantValidation(merchantSession);
        },
      ).catch(
        (error) => {
          console.log(error);
        },
      );
    };

    // Shipping contact
    session.onshippingcontactselected = function (event) {
      // Prepare variables
      const shippingOptions = [];
      const newTotal = {
        type: 'final',
        label: self.params.config.windowTitle,
        amount: self.amount,
      };

      // Complete selection
      session.completeShippingContactSelection(
        ApplePaySession.STATUS_SUCCESS,
        shippingOptions,
        newTotal,
        self.getLineItems(),
      );
    };

    // Shipping method selection
    session.onshippingmethodselected = function (event) {
      const newTotal = {
        type: 'final',
        label: self.params.config.windowTitle,
        amount: self.amount,
      };

      // Complete selection
      session.completeShippingMethodSelection(
        ApplePaySession.STATUS_SUCCESS,
        newTotal,
        self.getLineItems(),
      );
    };

    // Payment method selection
    session.onpaymentmethodselected = function (event) {
      // Prepare variables
      const newTotal = {
        type: 'final',
        label: self.params.config.windowTitle,
        amount: self.amount,
      };

      session.completePaymentMethodSelection(
        newTotal,
        self.getLineItems(),
      );
    };

    // Payment method authorization
    session.onpaymentauthorized = function (event) {
      // Prepare the payload
      const payload = {
        cardToken: event.payment.token,
        source: METHOD_ID,
      };

      // Send the request
      const promise = self.sendPaymentRequest(payload);
      promise.then(
        (success) => {
          let status;
          if (success) {
            status = ApplePaySession.STATUS_SUCCESS;
          } else {
            status = ApplePaySession.STATUS_FAILURE;
          }

          session.completePayment(status);

          if (success) {
            // Redirect to success page
          }
        },
      ).catch(
        (error) => {
          console.log(error);
        },
      );
    };

    // Session cancellation
    session.oncancel = function (event) {
      console.log(event);
    };

    // Begin session
    session.begin();
  }

  validateSession(e) {
    return new Promise(
      function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(JSON.parse(this.responseText));
        };
        xhr.onerror = reject;
        // Todo- improve params handling
        xhr.open('GET', `${this.params.config.config.validationURL}?u=${e.validationURL}`);
        xhr.send();
      },
    );
  }

  getLineItems() {
    return [];
  }

  sendPaymentRequest(paymentData) {
    return new Promise(
      ((resolve, reject) => {
        $.ajax({
          url: Utilities.getUrl('payment/placeorder'),
          type: 'POST',
          data: paymentData,
          success(data, textStatus, xhr) {
            if (data.success === true) {
              resolve(data.success);
            } else {
              reject;
            }
          },
          error(xhr, textStatus, error) {
            Utilities.log(error);
            reject;
          },
        });
      }),
    );
  }
};
