Easy Node Distributed Multiprocessing
===
<!-- toc -->
- [About](#about)
- [Getting started](#getting-started)
    - [Using the server](#using-the-server)
    - [Using the client](#using-the-client)
<!-- tocstop -->
# About
`node-distributed-multiprocessing` aims at making distributed multiprocessing easy for anyone. Because NodeJS is single threaded, tasks that take up cpu can block any other progress of the program. This could cause your server to not accept any new requests. Multiprocessing in NodeJS solves this issue by handing off tasks to another process to complete, freeing up the main thread to handle io tasks.

This library has two parts; `server` and `client`. Server runs on each node that you want to have work on any tasks. Whereas client is a library that is used to connect to the nodes and dispatch tasks.

This library might be overkill for most projects. However, if you still need multiprocessing check out [node-multiprocess](https://github.com/scottjr632/node-multiprocess) for easy node multiprocessing on the local machine.

# Getting started
Both the `server` and `client` can be installed using yarn and npm
```sh
$ npm i node-distributed-multiprocessing
$ # or
$ yarn add node-distributed-multiprocessing
```
## Using the Server
The server can be set up on any server or node. After installing all you have to do to start up the server is import the package.
```ts
import node-distributed-multiprocessing/server
// server runs on port 50015 by default
```
The port can be changed by setting the `SERVER_PORT` environment variable. The server also loads any `.env` files so `SERVER_PORT` can also be set there as well.
## Using the client
The client is what dispatches jobs to the nodes. The client can be import from the client module.
```typescript
import DistributedPool from node-distributed-multiprocessing/client
// or
import { DistributedPool } from node-distributed-multiprocessing/client
```
To create the DistributedPool you have to pass in an array of URIs to your nodes where the `server` is running.
```typescript
const pool = new DistributedPool(['localhost:50051', 'localhost:11223']);
// or
const pool = new DistributedPool([
    {
        host: 'localhost',
        port: '50051',
    },
    {
        host: 'localhost',
        port: '11223',
    },
]);
```
After the server has been created, the `addJob` method dispatches the supplied function to one of the nodes.
```typescript
function fib(n: number): number {
    if (n <= 1) return 1

    return fib(n - 1) + fib(n - 2)
}

const result = await pool.addJob(fib, 10);
// result => 55
```