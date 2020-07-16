// package: worker
// file: worker.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddJobRequest extends jspb.Message { 
    getFn(): string;
    setFn(value: string): AddJobRequest;

    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): AddJobRequest;
    addArgs(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddJobRequest): AddJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddJobRequest;
    static deserializeBinaryFromReader(message: AddJobRequest, reader: jspb.BinaryReader): AddJobRequest;
}

export namespace AddJobRequest {
    export type AsObject = {
        fn: string,
        argsList: Array<string>,
    }
}

export class AddJobReply extends jspb.Message { 
    getResult(): string;
    setResult(value: string): AddJobReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddJobReply.AsObject;
    static toObject(includeInstance: boolean, msg: AddJobReply): AddJobReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddJobReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddJobReply;
    static deserializeBinaryFromReader(message: AddJobReply, reader: jspb.BinaryReader): AddJobReply;
}

export namespace AddJobReply {
    export type AsObject = {
        result: string,
    }
}
