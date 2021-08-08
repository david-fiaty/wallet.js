'use strict';

const merge = require('deepmerge');

module.exports = {
	extendDefaults: function(defaults, params) {
		try {
			this.checkOptions(params);
		}	
		catch(msg) {
			this.logError(msg);
		}

		return merge(defaults, params);
	},

	checkOptions: function(params) {
		if (!params.config.hasOwnProperty('merchantId') || params.config.merchantId.length == 0) {
			throw new Error('Wallet.js Google Pay - The required parameter "merchantId" is missing or empty.');
		}

		if (!params.config.hasOwnProperty('gatewayName') || params.config.gatewayName.length == 0) {
			throw new Error('Wallet.js Google Pay - The required parameter "gatewayName" is missing or invalid.');
		}
	},

	checkAmount: function(amount, currencyCode) {
        if (isNaN(parseFloat(amount)) || parseFloat(amount) == 0 || amount.length == 0) {
			throw new Error('Wallet.js Google Pay - The required parameter "amount" is missing or invalid.');
        }

        if (currencyCode.length == 0) {
			throw new Error('Wallet.js Google Pay - The required parameter "currencyCode" is missing or invalid.');
        }
	},

	logError: function (e) {
		console.log('%c ' + e.message, 'color: red');
	}
}
