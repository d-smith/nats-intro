const NATS = require('nats');
var nats = NATS.connect({url:'nats://localhost:4222',user:'b',password:'b'});

const subscriberFn = (msg,_,subject) => {
    console.log(`b: message received on [${subject}]: ${msg}`);
}

nats.subscribe('puba.foo', subscriberFn);