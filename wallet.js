(function() {
    // Defaults
    var defaults = {
        param1: 600,
        param2: 280,
        param3: true
    }

    // Constructor
    this.Wallet = function() {
        this.param1 = 'test 1';
        this.param2 = 'test 2';
        this.param3 = 'test 3';

        // Initialize
        this.init = function () {
            console.log(this);
        }

        this.init();

    }

} ());