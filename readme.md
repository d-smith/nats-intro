# nats intro - some simple examples with NATS.io

## accounts

This sample shows how to use accounts to partition a subject space.

To run:

```console
docker run --name nats-main -v ${PWD}:/nc -p 4222:4222 -p 6222:6222 -p 8222:8222 nats --config /nc/config -D
```