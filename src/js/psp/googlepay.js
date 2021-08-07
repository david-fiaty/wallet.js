'use strict';

require('../../css/googlepay.css');
var script = require('scriptjs');

module.exports = class GooglePay {
    constructor(config) {
        this.config = config;
    }

    test() {
        var self = this;
        script(process.env.GOOGLE_PAY_SCRIPT, function() {
            // Initialize Google Pay
            console.log('GooglePay');
            console.log(self.config);
        });
    }
}

