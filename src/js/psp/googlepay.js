'use strict';

require('dotenv').config();
var script = require('scriptjs');
module.exports = class GooglePay {
    constructor(config) {
        this.config = config;
    }

    test() {
        script("//pay.google.com/gp/p/js/pay.js", function() {
            // Initialize Google Pay
            console.log(process.env.GOOGLE_PAY_SCRIPT);
            console.log('GooglePay');
            console.log(this.config);
        });
    }
}

