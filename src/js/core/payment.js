const helper = require('core/helper');

module.exports = class Payment {
  constructor(defaultOptions, requiredOptions, params) {
	  this.params = helper.buildOptions(defaultOptions, requiredOptions, params);
  }

  setAmount(value, currencyCode) {
    this.amount = value;
    this.currencyCode = currencyCode;
  }
};
