'use strict';

const merge = require('deepmerge');

module.exports = {
	buildOptions: function(defaults, required, params) {
		try {
			this.validateOptions(required, params);
		}	
		catch(msg) {
			this.logError(msg);
		}

		return merge(defaults, params);
	},

	validateOptions: function(required, params) {
		required.forEach(function (item, i) {
			if (!params.config.hasOwnProperty(item) || !params.config[item] || params.config[item].length == 0) {
				throw new Error('Wallet.js - The required parameter "' + item + '" is missing or empty.');
			}	
		}); 
	},

	checkAmount: function(amount, currencyCode) {
        if (isNaN(parseFloat(amount)) || parseFloat(amount) == 0 || amount.length == 0) {
			throw new Error('Wallet.js - The required parameter "amount" is missing or invalid.');
        }

        if (!currencyCode || currencyCode.length == 0) {
			throw new Error('Wallet.js - The required parameter "currencyCode" is missing or invalid.');
        }
	},

	logError: function (e) {
		console.log('%c ' + e.message, 'color: red');
	}
}
