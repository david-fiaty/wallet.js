# wallet.js
Wallet.js is a Javascript integration for wallet payments like Apple Pay and Google Pay.

This application built with Node.js generates a single frontend Javascript file that acts as a wrapper for walltet payments,  allowing a quick and easy integration. 

## Supported payment methods
* Apple Pay
* Google Pay

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

The **type** and **config** options are required upon initialization. The **amount** option can be provided when initializing the wallet, or at a later stage.

## Payment configuration 
The **config** option takes parameters for a specific payment method. The examples below use the minimum required for a wallet payment configuration.

### Google Pay
```javascript
var wallet = new Wallet('#wallet', {
    type: 'googlepay',
    amount: 11.00,
    config: {
        merchantId: 'merchant_id',
        gatewayName: 'gateway_name',
        currencyCode: 'USD',
    },
});
```

### Apple Pay 
```javascript
var wallet = new Wallet('#wallet', {
    type: 'applepay',
    amount: 11.00,
    config: {
        merchantId: 'merchant_id-70a5-4441-be9b-abb59e3fcd31',
        validationUrl: 'https://validation-url', 
        currencyCode: 'USD',  
    },
});
```

## Configuration options
The following wallet configuration options are available on initialization:<br>

Name | Type | Default | Required | Description
------ | ---- | ------- | -----------
type | string | null | yes | Payment type
amount | float | null | yes | Payment amount
config | object | null | yes | Payment configuration