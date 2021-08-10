const merge = require('deepmerge');

module.exports = {
  buildOptions(defaults, required, params) {
    try {
      this.validateOptions(required, params);
    } catch (error) {
      this.logError(error);
    }

    return merge(defaults, params);
  },

  validateOptions(required, params) {
    required.forEach((item, i) => {
      if (!params.config.hasOwnProperty(item) || !params.config[item] || params.config[item].length == 0) {
        throw new Error('The required parameter "${item}" is missing or empty');
      }
    });
  },

  checkAmount(amount, currencyCode) {
    if (isNaN(parseFloat(amount)) || parseFloat(amount) == 0 || amount.length == 0) {
      throw new Error('The required parameter "amount" is missing or invalid');
    }

    if (!currencyCode || currencyCode.length == 0) {
      throw new Error('The required parameter "currencyCode" is missing or invalid');
    }
  },

  logError(error) {
    console.log(`%c ${'Wallet.js - ' + error}`, 'color: red');
  },
};
