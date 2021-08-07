'use strict';

require('../../css/googlepay.css');
var script = require('scriptjs');

module.exports = class GooglePay {
    constructor(config) {
        this.config = config;
    }

    test() {
        var self = this;

        var textnode = document.createTextNode("Water")
        document.getElementById('wallet').appendChild(textnode);

        // Initialize Google Pay
        script(process.env.GOOGLE_PAY_SCRIPT, function() {
            console.log('GooglePay');
            console.log(self.config);
        });
    }
}

