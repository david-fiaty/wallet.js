'use strict';

const GooglePay = require('psp/googlepay');
const ApplePay = require('psp/applepay');

module.exports = class Wallet {
    constructor(config) {
		this.config = config;

		let gp = new  GooglePay(this.config);
		gp.createButton();

	}

	/*
	pay() {
		let gp = new  GooglePay(this.config);
		gp.init();
	}*/

}
