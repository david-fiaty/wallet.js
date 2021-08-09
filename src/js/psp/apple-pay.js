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
        // Prepare variables
        let self = this;
        let button = document.querySelector(targetId);
        let buttonClasses = [
            'apple-pay',
            'apple-pay-button'
        ];

        // Button display
        button.classList.add(...buttonClasses);
        console.log('applepay loaded');
    }
}