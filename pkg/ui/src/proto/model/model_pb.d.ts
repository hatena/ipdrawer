// package: model
// file: model/model.proto

import * as jspb from "google-protobuf";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../github.com/mwitkow/go-proto-validators/validator_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../github.com/gogo/protobuf/gogoproto/gogo_pb";

export class Tag extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class Pool extends jspb.Message {
  getStart(): string;
  setStart(value: string): void;

  getEnd(): string;
  setEnd(value: string): void;

  getStatus(): Pool.Status;
  setStatus(value: Pool.Status): void;

  clearTagsList(): void;
  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): void;
  addTags(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pool.AsObject;
  static toObject(includeInstance: boolean, msg: Pool): Pool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pool;
  static deserializeBinaryFromReader(message: Pool, reader: jspb.BinaryReader): Pool;
}

export namespace Pool {
  export type AsObject = {
    start: string,
    end: string,
    status: Pool.Status,
    tagsList: Array<Tag.AsObject>,
  }

  export enum Status {
    UNKNOWN = 0,
    AVAILABLE = 1,
    RESERVED = 2,
  }
}

export class IPAddr extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getStatus(): IPAddr.IPStatus;
  setStatus(value: IPAddr.IPStatus): void;

  clearTagsList(): void;
  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): void;
  addTags(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPAddr.AsObject;
  static toObject(includeInstance: boolean, msg: IPAddr): IPAddr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IPAddr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPAddr;
  static deserializeBinaryFromReader(message: IPAddr, reader: jspb.BinaryReader): IPAddr;
}

export namespace IPAddr {
  export type AsObject = {
    ip: string,
    status: IPAddr.IPStatus,
    tagsList: Array<Tag.AsObject>,
  }

  export enum IPStatus {
    UNKNOWN = 0,
    ACTIVE = 1,
    TEMPORARY_RESERVED = 2,
    RESERVED = 3,
  }
}

export class Network extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  clearGatewaysList(): void;
  getGatewaysList(): Array<string>;
  setGatewaysList(value: Array<string>): void;
  addGateways(value: string, index?: number): string;

  getBroadcast(): string;
  setBroadcast(value: string): void;

  getNetmask(): string;
  setNetmask(value: string): void;

  getStatus(): Network.Status;
  setStatus(value: Network.Status): void;

  clearTagsList(): void;
  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): void;
  addTags(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    prefix: string,
    gatewaysList: Array<string>,
    broadcast: string,
    netmask: string,
    status: Network.Status,
    tagsList: Array<Tag.AsObject>,
  }

  export enum Status {
    UNKNOWN = 0,
    AVAILABLE = 1,
    RESERVED = 2,
  }
}

