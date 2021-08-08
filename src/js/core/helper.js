'use strict';

const merge = require('deepmerge');

module.exports = {
	extendDefaults: function(defaults, params) {
		try {
			this.checkOptions(params);
		}	
		catch(message) {
			console.log('%c ' + message, 'color: red');
		}

		return merge(defaults, params);
	},

	checkOptions: function(params) {
		if (!params.config.hasOwnProperty('merchantId') || params.config.merchantId.length == 0) {
			throw 'Wallet.js Google Pay - The required parameter "merchantId" is missing or empty.';
		}

		if (!params.config.hasOwnProperty('gatewayName') || params.config.gatewayName.length == 0) {
			throw 'Wallet.js Google Pay - The required parameter "gatewayName" is missing or empty.';
		}
	},
}
