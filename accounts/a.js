const NATS = require('nats');
var nc = NATS.connect({'url':'nats://localhost:4222','user':'a','password':'a'});

nc.on('connect', () => {
    nc.on('error', (err) => {
        console.log(err);
    });

    console.log('publish private foo');
    nc.publish('foo','Private foo from A');
});

nc.flush(() => {
    nc.close();
});