// package: worker
// file: worker.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as worker_pb from "./worker_pb";

interface IWorkerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addJob: IWorkerService_IAddJob;
}

interface IWorkerService_IAddJob extends grpc.MethodDefinition<worker_pb.AddJobRequest, worker_pb.AddJobReply> {
    path: string; // "/worker.Worker/AddJob"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<worker_pb.AddJobRequest>;
    requestDeserialize: grpc.deserialize<worker_pb.AddJobRequest>;
    responseSerialize: grpc.serialize<worker_pb.AddJobReply>;
    responseDeserialize: grpc.deserialize<worker_pb.AddJobReply>;
}

export const WorkerService: IWorkerService;

export interface IWorkerServer {
    addJob: grpc.handleUnaryCall<worker_pb.AddJobRequest, worker_pb.AddJobReply>;
}

export interface IWorkerClient {
    addJob(request: worker_pb.AddJobRequest, callback: (error: grpc.ServiceError | null, response: worker_pb.AddJobReply) => void): grpc.ClientUnaryCall;
    addJob(request: worker_pb.AddJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: worker_pb.AddJobReply) => void): grpc.ClientUnaryCall;
    addJob(request: worker_pb.AddJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: worker_pb.AddJobReply) => void): grpc.ClientUnaryCall;
}

export class WorkerClient extends grpc.Client implements IWorkerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addJob(request: worker_pb.AddJobRequest, callback: (error: grpc.ServiceError | null, response: worker_pb.AddJobReply) => void): grpc.ClientUnaryCall;
    public addJob(request: worker_pb.AddJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: worker_pb.AddJobReply) => void): grpc.ClientUnaryCall;
    public addJob(request: worker_pb.AddJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: worker_pb.AddJobReply) => void): grpc.ClientUnaryCall;
}
