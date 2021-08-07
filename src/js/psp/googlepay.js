'use strict';

var script = require('scriptjs');

module.exports = class GooglePay {
    constructor(config) {
        this.config = config;
    }

    test() {
        script("//pay.google.com/gp/p/js/pay.js", function() {
            // Initialize Google Pay
            console.log('GooglePay');
            console.log(this.config);
        });
    }
}

