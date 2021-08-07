'use strict';

const GooglePay = require('./psp/googlepay');
const ApplePay = require('./psp/applepay');

module.exports = class Wallet {
    constructor(config) {
		this.config = config;
	}

	pay() {
		console.log(g);
		//let gp = new  GooglePay(this.config);
		//gp.test();
	}
}
