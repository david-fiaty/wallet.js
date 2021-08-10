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

## Wallet initialization 
The **config** option takes parameters for a specific payment method. The examples below use the minimum requirements for a wallet payment configuration.

**Apple Pay example**
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

**Google Pay example**
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

## Configuration options
**Global**
Name | Type | Required | Description
:------ | :---- | :------- | :-----------
type | string  | yes | Wallet payment type
amount | float  | yes | Wallet payment amount
config | object | yes | Payment provider configuration

**Apple Pay**
Name | Type | Required | Description
:------ | :---- | :------- | :-----------
merchantId | string | yes | Merchant ID
currencyCode | string | yes | Payment currency code
validationUrl | string | yes | Validation URL

**Google Pay**
Name | Type | Required | Description
:------ | :---- | :------- | :-----------
merchantId | string | yes | Merchant ID
currencyCode | string | yes | Payment currency code
gatewayName | string | yes | Payment configuration