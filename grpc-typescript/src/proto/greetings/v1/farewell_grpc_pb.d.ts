// package: greetings.v1
// file: greetings/v1/farewell.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as greetings_v1_farewell_pb from "../../greetings/v1/farewell_pb";

interface IFarewellServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    farewell: IFarewellServiceService_IFarewell;
}

interface IFarewellServiceService_IFarewell extends grpc.MethodDefinition<greetings_v1_farewell_pb.FarewellRequest, greetings_v1_farewell_pb.FarewellResponse> {
    path: "/greetings.v1.FarewellService/Farewell";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greetings_v1_farewell_pb.FarewellRequest>;
    requestDeserialize: grpc.deserialize<greetings_v1_farewell_pb.FarewellRequest>;
    responseSerialize: grpc.serialize<greetings_v1_farewell_pb.FarewellResponse>;
    responseDeserialize: grpc.deserialize<greetings_v1_farewell_pb.FarewellResponse>;
}

export const FarewellServiceService: IFarewellServiceService;

export interface IFarewellServiceServer extends grpc.UntypedServiceImplementation {
    farewell: grpc.handleUnaryCall<greetings_v1_farewell_pb.FarewellRequest, greetings_v1_farewell_pb.FarewellResponse>;
}

export interface IFarewellServiceClient {
    farewell(request: greetings_v1_farewell_pb.FarewellRequest, callback: (error: grpc.ServiceError | null, response: greetings_v1_farewell_pb.FarewellResponse) => void): grpc.ClientUnaryCall;
    farewell(request: greetings_v1_farewell_pb.FarewellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greetings_v1_farewell_pb.FarewellResponse) => void): grpc.ClientUnaryCall;
    farewell(request: greetings_v1_farewell_pb.FarewellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greetings_v1_farewell_pb.FarewellResponse) => void): grpc.ClientUnaryCall;
}

export class FarewellServiceClient extends grpc.Client implements IFarewellServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public farewell(request: greetings_v1_farewell_pb.FarewellRequest, callback: (error: grpc.ServiceError | null, response: greetings_v1_farewell_pb.FarewellResponse) => void): grpc.ClientUnaryCall;
    public farewell(request: greetings_v1_farewell_pb.FarewellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greetings_v1_farewell_pb.FarewellResponse) => void): grpc.ClientUnaryCall;
    public farewell(request: greetings_v1_farewell_pb.FarewellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greetings_v1_farewell_pb.FarewellResponse) => void): grpc.ClientUnaryCall;
}
