'use strict';

module.exports = {
	extendDefaults: function(defaults, params) {
		for (let p in defaults) {
		  if (params.hasOwnProperty(p)) {
			if (typeof defaults[p] === 'object') {
				defaults[p] = Object.assign({}, defaults[p], params[p]);
			}
			else {
				defaults[p] = params[p];
			}
		  }
		}

		return defaults;
	},
}
