'use strict';

require('../../css/apple-pay.css');

const Payment = require('core/payment');

module.exports = class ApplePay extends Payment {
    constructor(targetId, params) { 
        // Default options
        let defaultOptions = {
            debug: false,
            config: {

            },
            payment: {

            },
        };

        // Required options
        let requiredOptions = [
            'merchantId',
            'gatewayName',
        ];

        // Parent constructor
        super(defaultOptions, requiredOptions, params);  

        // Initialize
        this.init(targetId);
    }

    init (targetId) {
        console.log('applepay loaded');
    }
}