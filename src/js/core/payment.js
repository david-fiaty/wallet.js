module.exports = class Payment {
	
	setAmount(value, currencyCode) {
		this.amount = value;
		this.currencyCode = currencyCode;
	}
}