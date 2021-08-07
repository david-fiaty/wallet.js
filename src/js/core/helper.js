'use strict';

module.exports = {
	extendDefaults(source, properties) {
		let property;
		for (property in properties) {
		  if (properties.hasOwnProperty(property)) {
			source[property] = properties[property];
		  }
		}

		return source;
	}
}
