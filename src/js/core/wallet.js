const GooglePay = require('psp/google-pay');
const ApplePay = require('psp/apple-pay');

module.exports = class Wallet {
  constructor(targetSelector, params) {
    let wallet;
    if (params.type == 'applepay') {
      wallet = new ApplePay(targetSelector, params);
    } else if (params.type == 'googlepay') {
      wallet = new GooglePay(targetSelector, params);
    } else {
      throw new Error('Wallet.js - Unknown wallet type in parameters');
    }
  }
};
