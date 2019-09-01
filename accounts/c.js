const NATS = require('nats');
var nats = NATS.connect({url:'nats://localhost:4222',user:'c',password:'c'});

const subscribeFn = (msg,_,subject) => {
    console.log(`c: message received on [${subject}]: ${msg}`);
};

const publishMessage = (nc) => {
    nc.publish('Q', 'Message from C');
};

nats.subscribe('b.foo', subscribeFn);
nats.subscribe('foo', subscribeFn);
nats.subscribe('from_a.puba.>', subscribeFn);

setInterval(publishMessage, 10000, nats);