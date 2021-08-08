'use strict';

const merge = require('deepmerge');

module.exports = {
	extendDefaults: function(defaults, params) {
		try {
			if (this.checkOptions(params)) { 
				return merge(defaults, params);
			}
		}	
		catch(e) {
			console.log(e);
		}

		return defaults;
	},

	checkOptions: function(params) {
		if (params.config.merchantId.length == 0) {
			throw 'The merchantId parameter is required';
		}
	},
}
