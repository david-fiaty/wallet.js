'use strict';

const GooglePay = require('psp/google-pay');
const ApplePay = require('psp/apple-pay');

module.exports = class Wallet {
    constructor(targetId, params) {

		let gp = new GooglePay(targetId, params);

	}

	/*
	pay() {
		let gp = new  GooglePay(this.config);
		gp.init();
	}*/

}
