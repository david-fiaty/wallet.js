# wallet.js
Wallet.js is a Javascript integration for wallet payments like Apple Pay and Google Pay.

This application built with Node.js generates a single frontend Javascript file that acts as a wrapper for walltet payments,  allowing a quick and easy integration. 

## How to use
Call the wallet.js Javascript file from your HTML page:

```html
<script src="wallet.js"></script>
```

Create an HTML button that will trigger the payment action:

```html
<button id="wallet" type="button"></button>
```

Initialize the wallet:

```javascript
    var test = new Pay();
```

## Supported payments
* Apple Pay
* Google Pays