// package: greetings.v1
// file: greetings/v1/greetings.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as greetings_v1_greetings_pb from "../../greetings/v1/greetings_pb";

interface IGreetingsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    greet: IGreetingsServiceService_IGreet;
}

interface IGreetingsServiceService_IGreet extends grpc.MethodDefinition<greetings_v1_greetings_pb.GreetRequest, greetings_v1_greetings_pb.GreetResponse> {
    path: "/greetings.v1.GreetingsService/Greet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greetings_v1_greetings_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greetings_v1_greetings_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greetings_v1_greetings_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greetings_v1_greetings_pb.GreetResponse>;
}

export const GreetingsServiceService: IGreetingsServiceService;

export interface IGreetingsServiceServer extends grpc.UntypedServiceImplementation {
    greet: grpc.handleUnaryCall<greetings_v1_greetings_pb.GreetRequest, greetings_v1_greetings_pb.GreetResponse>;
}

export interface IGreetingsServiceClient {
    greet(request: greetings_v1_greetings_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greetings_v1_greetings_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: greetings_v1_greetings_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greetings_v1_greetings_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: greetings_v1_greetings_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greetings_v1_greetings_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}

export class GreetingsServiceClient extends grpc.Client implements IGreetingsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public greet(request: greetings_v1_greetings_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greetings_v1_greetings_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greetings_v1_greetings_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greetings_v1_greetings_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greetings_v1_greetings_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greetings_v1_greetings_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}
