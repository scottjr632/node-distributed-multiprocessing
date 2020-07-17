import grpc from 'grpc';

import { AnyFunc, ArgumentTypes } from 'node-multiprocess/dist/types';

import messages from '../gen/worker_pb';
import services from '../gen/worker_grpc_pb';

import { Queue } from './queue';

const DEFAULT_WORKERS = 3;

interface Node {
  availableWorkers: number;
  client: services.WorkerClient;
}

interface HostPort {
  host: string;
  port: string;
}

const isHostPort = (arg: any): arg is HostPort => {
  return arg && typeof arg.host === 'string' && typeof arg.port === 'string';
};

const isHostPortArray = (arg: any): arg is HostPort[] => {
  if (arg && arg.length !== undefined) {
    if (arg.length > 0)
      return isHostPort(arg[0]);
    return true;
  }
  return false;
};

export class DistributedPool {
  private nodes: Queue<Node> = new Queue();

  constructor(nodes: string[] | HostPort[]){
    let uris: string[];
    if (nodes.length === 0) throw Error('Node URIs must be provided');
    if (isHostPortArray(nodes)) {
      uris = nodes.map(({ host, port }) => `${host}:${port}`);
    } else {
      uris = nodes;
    }

    for (let uri of uris) {
      this.nodes.add({
        availableWorkers: DEFAULT_WORKERS,
        client: new services.WorkerClient(uri,
          grpc.credentials.createInsecure()),
      });
    }
  }

  async addJob<TFunction extends AnyFunc>(fn: TFunction,
    ...args: ArgumentTypes<TFunction>): Promise<string> {

    const node = this.nodes.pop();
    const request = new messages.AddJobRequest();
    request.setFn(fn.toString());
    request.setArgsList(args);

    return new Promise((resolve, reject) => {
      if (node === null || node.availableWorkers === 0) {
        reject(Error('No worker nodes available'));
        return;
      }

      node.availableWorkers--;
      this.nodes.add(node);
      node.client.addJob(request, function(error, response) {
        node.availableWorkers++;
        if (error) {
          reject(error);
          return;
        }
        resolve(response.getResult());
      });
    });
  }
}

export default DistributedPool;