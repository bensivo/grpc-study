// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greetings_v1_greetings_pb = require('../../greetings/v1/greetings_pb.js');

function serialize_greetings_v1_GreetRequest(arg) {
  if (!(arg instanceof greetings_v1_greetings_pb.GreetRequest)) {
    throw new Error('Expected argument of type greetings.v1.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greetings_v1_GreetRequest(buffer_arg) {
  return greetings_v1_greetings_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greetings_v1_GreetResponse(arg) {
  if (!(arg instanceof greetings_v1_greetings_pb.GreetResponse)) {
    throw new Error('Expected argument of type greetings.v1.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greetings_v1_GreetResponse(buffer_arg) {
  return greetings_v1_greetings_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetingsServiceService = exports.GreetingsServiceService = {
  greet: {
    path: '/greetings.v1.GreetingsService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: greetings_v1_greetings_pb.GreetRequest,
    responseType: greetings_v1_greetings_pb.GreetResponse,
    requestSerialize: serialize_greetings_v1_GreetRequest,
    requestDeserialize: deserialize_greetings_v1_GreetRequest,
    responseSerialize: serialize_greetings_v1_GreetResponse,
    responseDeserialize: deserialize_greetings_v1_GreetResponse,
  },
};

exports.GreetingsServiceClient = grpc.makeGenericClientConstructor(GreetingsServiceService);
