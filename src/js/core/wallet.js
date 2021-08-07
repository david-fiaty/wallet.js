'use strict';

const GooglePay = require('psp/google-pay');
const ApplePay = require('psp/apple-pay');

module.exports = class Wallet {
    constructor(config) {
		this.config = config;

		let gp = new GooglePay(this.config);

	}

	/*
	pay() {
		let gp = new  GooglePay(this.config);
		gp.init();
	}*/

}
