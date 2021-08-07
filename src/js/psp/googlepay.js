'use strict';

require('../../css/googlepay.css');
var script = require('scriptjs');

module.exports = class GooglePay {
    constructor(params) {
        this.params = params;

        this.createButton();
        this.createEvent();

    }

    createButton () {
        document.getElementById('wallet').classList.add(
            'google-pay-button-' + this.params.config.buttonStyle
        );
    }

    createEvent () {
        document.getElementById('wallet').addEventListener('click', function () {
            console.log('button click');
        });
    }

    init() {
        var self = this;


        // Initialize Google Pay
        script(process.env.GOOGLE_PAY_SCRIPT, function() {
            console.log('GooglePay');
            console.log(self.params);
        });
    }
}

