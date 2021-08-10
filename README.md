# wallet.js
Wallet.js is a Javascript integration for wallet payments like Apple Pay and Google Pay.

This application built with Node.js generates a single frontend Javascript file that acts as a wrapper for walltet payments, allowing a quick and easy frontend integration. 

## How to use
Call the **wallet.js** Javascript file from your HTML page:

```html
<script src="wallet.js"></script>
```

Create the button that will trigger the payment action:

```html
<button id="wallet" type="button"></button>
```

## Wallet configuration 
The **config** option takes parameters for a specific payment method. The examples below use the minimum requirements for a wallet payment configuration.

**Wallet initialization**
```javascript
var wallet = new Wallet('#wallet', {
    type: 'payment_method_name',
    amount: 11.00,
    config: {
        // Payment configuration
    }
});
```
The **type** and **config** options are required upon initialization. The **amount** option can be provided when initializing the wallet, or at a later stage.

**Required options**
Option name | Type | Description
:---------- | :---- | :-----------
`type` | string | Wallet payment type
`amount` | float | Wallet payment amount
`config` | object | Payment provider configuration

## Apple Pay configuration 
**Apple Pay initialization**
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

**Required options**
Option name | Type | Description
:---------- | :---- | :-----------
`merchantId` | string | Merchant ID
`currencyCode` | string | Payment currency code
`validationUrl` | string | Validation URL

## Google Pay configuration 
**Google Pay initialization**
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

**Required options**
Option name | Type | Description
:---------- | :---- | :-----------
`merchantId` | string | Merchant ID
`currencyCode` | string | Payment currency code
`gatewayName` | string | Payment configuration