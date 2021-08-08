module.exports = class Payment {
	
	getCurrencyCode() {
		return this.currencyCode;
	}

	getAmount(amount) {
		return this.amount;
	}

	setCurrencyCode(currencyCode) {
		this.currencyCode = currencyCode;
	}

	setAmount(amount) {
		this.amount = amount;
	}
}