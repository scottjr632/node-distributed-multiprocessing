import grpc from 'grpc';
import dotenv from 'dotenv';
import Pool from 'node-multiprocess';
dotenv.config();

import messages from '../gen/worker_pb';
import services from '../gen/worker_grpc_pb';

const PORT = process.env.SERVER_PORT || 50015
const POOL_SIZE = 2;

Pool.setMaxProcesses(POOL_SIZE);
const pool = Pool.getInstance();

function looseJsonParse(obj: string): Function {
    return Function('"use strict";return (' + obj + ')')();
}

async function addJob(call: any, callback: any) {
    const fn = call.request.getFn();
    const args = call.request.getArgsList();
    const result = await pool.addJob(looseJsonParse(fn) as any, ...args);
    const reply = new messages.AddJobReply();

    reply.setResult(result.toString());
    callback(null, reply);
}

(() => {
    const server = new grpc.Server();
    server.addService(services.WorkerService, { addJob });
    server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());

    console.info(`Server running on ${PORT}`)
    server.start();
})();