'use strict';

module.exports = class Helper {
	
	extendDefaults(source, properties) {
		var property;
		for (property in properties) {
		  if (properties.hasOwnProperty(property)) {
			source[property] = properties[property];
		  }
		}
		return source;
	}
}
