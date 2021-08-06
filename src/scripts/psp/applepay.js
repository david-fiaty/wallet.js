module.exports = class ApplePay {
    constructor(config) {
        this.config = config;
    }

    test() {
        console.log('ApplePay');
        console.log(this.config);
    }
}