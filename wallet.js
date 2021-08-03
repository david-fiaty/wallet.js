(function() {
    // Constructor
    this.Wallet = function() {
        this.param1 = 'test 1';
        this.param2 = 'test 2';
        this.param3 = 'test 3';
    }

    // Defaults
    var defaults = {
        maxWidth: 600,
        minWidth: 280,
        overlay: true
    }

    // Add options 
    if (arguments[0] && typeof arguments[0] === "object") {
        this.options = extendDefaults(defaults, arguments[0]);
    }

    // Extend defaults
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
} ());