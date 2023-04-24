// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greetings_v1_farewell_pb = require('../../greetings/v1/farewell_pb.js');

function serialize_greetings_v1_FarewellRequest(arg) {
  if (!(arg instanceof greetings_v1_farewell_pb.FarewellRequest)) {
    throw new Error('Expected argument of type greetings.v1.FarewellRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greetings_v1_FarewellRequest(buffer_arg) {
  return greetings_v1_farewell_pb.FarewellRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greetings_v1_FarewellResponse(arg) {
  if (!(arg instanceof greetings_v1_farewell_pb.FarewellResponse)) {
    throw new Error('Expected argument of type greetings.v1.FarewellResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greetings_v1_FarewellResponse(buffer_arg) {
  return greetings_v1_farewell_pb.FarewellResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FarewellServiceService = exports.FarewellServiceService = {
  farewell: {
    path: '/greetings.v1.FarewellService/Farewell',
    requestStream: false,
    responseStream: false,
    requestType: greetings_v1_farewell_pb.FarewellRequest,
    responseType: greetings_v1_farewell_pb.FarewellResponse,
    requestSerialize: serialize_greetings_v1_FarewellRequest,
    requestDeserialize: deserialize_greetings_v1_FarewellRequest,
    responseSerialize: serialize_greetings_v1_FarewellResponse,
    responseDeserialize: deserialize_greetings_v1_FarewellResponse,
  },
};

exports.FarewellServiceClient = grpc.makeGenericClientConstructor(FarewellServiceService);
