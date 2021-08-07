const applePayClient = require('apple-pay-server-client');

module.exports = class ApplePay {
    constructor(config) {
        this.config = config;
    }

    test() {
        console.log('ApplePay');
        console.log(this.config);
    }
}