# wallet.js
Wallet.js is a Javascript integration for wallet payments like Apple Pay and Google Pay.

This application built with Node.js generates a single frontend Javascript file that acts as a wrapper for walltet payments,  allowing a quick and easy integration. 

## How to use
Call the wallet.js Javascript file from your HTML page:

```html
<script src="wallet.js"></script>
```

Create the button that will trigger the payment action:

```html
<button id="wallet" type="button"></button>
```

Initialize the wallet:

```javascript
var wallet = new Wallet('#wallet', {
    type: 'payment_method',
    amount: 11.00,
    config: {
        // Payment configuration
    }
});
```

The **type** and **config** options are required upon initialization.<br><br>

The **amount** option can be provided when initializing the wallet, or at a later stage.

## Supported payment methods
* Apple Pay
* Google Pay