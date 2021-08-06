module.exports = class GooglePay {
    constructor(config) {
        this.config = config;
    }

    test() {
        console.log('GooglePay');
        console.log(this.config);
    }
}

