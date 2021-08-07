'use strict';

module.exports = {
	extendDefaults: function(defaults, params) {
		for (let p in params) {
		  if (params.hasOwnProperty(p)) {
			defaults[p] = params[p];
		  }
		}

		return defaults;
	},
}
