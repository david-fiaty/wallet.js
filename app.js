var googlePay = require('./scripts/psp/googlepay');
var applePay = require('./scripts/psp/applepay');

let config = {
    p1: 'p1',
    p2: 'p2',
    p3: 'p3'
};


let gp = new googlePay(config);
let ap = new applePay(config);

gp.test();
ap.test();