# wallet.js
 
// Send request google pay
sendRequest(paymentData) {
    // Prepare the payload
    /*
        var payload = {
            cardToken: {
                signature: JSON.parse(paymentData.paymentMethodToken.token).signature,
                protocolVersion: JSON.parse(paymentData.paymentMethodToken.token).protocolVersion,
                signedMessage: JSON.parse(paymentData.paymentMethodToken.token).signedMessage,
            },
        };
        */

    // Send the request
    //console.log(paymentData);
  }


  // Send request apple pay
    sendRequest: function (paymentData) {
        return new Promise(
            function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    var data = JSON.parse(this.responseText);
                    resolve(data);
                };
                xhr.onerror = reject;
                xhr.open('POST', 'payment_request_url');
                xhr.send();
            }
        );
    },