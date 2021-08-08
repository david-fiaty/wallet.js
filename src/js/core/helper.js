'use strict';

const merge = require('deepmerge');

module.exports = {
	extendDefaults: function(defaults, params) {
		return merge(defaults, params);
	},
}
