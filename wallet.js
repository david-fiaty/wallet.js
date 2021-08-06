// Create an immediately invoked functional expression to wrap our code
(function () {
	// Constructor
	this.Wallet = function () {
		// Global properties
		this.p1 = null;
		this.p2 = null;
		this.p3 = null;

		// Default options
		var defaults = {
			p1: '',
			p2: '',
			p3: ''
		}

		// Extend defaults
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = load(defaults, arguments[0]);
		}
	}

	// Option loader
	function load(source, properties) {
		var property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}

		return source;
	}

}());