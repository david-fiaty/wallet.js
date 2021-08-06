const GooglePay = require('./psp/googlepay');
const ApplePay = require('./psp/applepay');

module.exports = class Wallet {
    constructor(config) {
        let gp = new GooglePay(config);
    }
}

