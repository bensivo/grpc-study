// package: greetings.v1
// file: greetings/v1/farewell.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FarewellRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): FarewellRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FarewellRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FarewellRequest): FarewellRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FarewellRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FarewellRequest;
    static deserializeBinaryFromReader(message: FarewellRequest, reader: jspb.BinaryReader): FarewellRequest;
}

export namespace FarewellRequest {
    export type AsObject = {
        name: string,
    }
}

export class FarewellResponse extends jspb.Message { 
    getGreeting(): string;
    setGreeting(value: string): FarewellResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FarewellResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FarewellResponse): FarewellResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FarewellResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FarewellResponse;
    static deserializeBinaryFromReader(message: FarewellResponse, reader: jspb.BinaryReader): FarewellResponse;
}

export namespace FarewellResponse {
    export type AsObject = {
        greeting: string,
    }
}
