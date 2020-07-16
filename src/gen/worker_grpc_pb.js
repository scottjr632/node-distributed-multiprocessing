// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var worker_pb = require('./worker_pb.js');

function serialize_worker_AddJobReply(arg) {
  if (!(arg instanceof worker_pb.AddJobReply)) {
    throw new Error('Expected argument of type worker.AddJobReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_worker_AddJobReply(buffer_arg) {
  return worker_pb.AddJobReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_worker_AddJobRequest(arg) {
  if (!(arg instanceof worker_pb.AddJobRequest)) {
    throw new Error('Expected argument of type worker.AddJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_worker_AddJobRequest(buffer_arg) {
  return worker_pb.AddJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var WorkerService = exports.WorkerService = {
  addJob: {
    path: '/worker.Worker/AddJob',
    requestStream: false,
    responseStream: false,
    requestType: worker_pb.AddJobRequest,
    responseType: worker_pb.AddJobReply,
    requestSerialize: serialize_worker_AddJobRequest,
    requestDeserialize: deserialize_worker_AddJobRequest,
    responseSerialize: serialize_worker_AddJobReply,
    responseDeserialize: deserialize_worker_AddJobReply,
  },
};

exports.WorkerClient = grpc.makeGenericClientConstructor(WorkerService);
