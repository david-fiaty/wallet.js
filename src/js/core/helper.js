'use strict';

const merge = require('deepmerge');

module.exports = {
	extendDefaults: function(defaults, params) {
		try {
			if (this.checkOptions(params)) { 
				return merge(defaults, params);
			}
		}	
		catch(message) {
			console.log('%c ' + message, 'color: red');
		}

		return defaults;
	},

	checkOptions: function(params) {
		if (params.config.merchantId.length == 0) {
			throw 'Wallet.js Error - The required parameter "merchantId" is missing on initialization.';
		}
	},
}
