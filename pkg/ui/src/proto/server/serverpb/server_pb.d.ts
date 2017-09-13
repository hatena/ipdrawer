// package: serverpb
// file: server/serverpb/server.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../github.com/mwitkow/go-proto-validators/validator_pb";
import * as github_com_taku_k_ipdrawer_pkg_model_model_pb from "../../github.com/taku-k/ipdrawer/pkg/model/model_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../github.com/gogo/protobuf/gogoproto/gogo_pb";

export class DrawIPRequest extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getMask(): number;
  setMask(value: number): void;

  hasPoolTag(): boolean;
  clearPoolTag(): void;
  getPoolTag(): github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag | undefined;
  setPoolTag(value?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag): void;

  getName(): string;
  setName(value: string): void;

  getActivateImmediately(): boolean;
  setActivateImmediately(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawIPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DrawIPRequest): DrawIPRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrawIPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawIPRequest;
  static deserializeBinaryFromReader(message: DrawIPRequest, reader: jspb.BinaryReader): DrawIPRequest;
}

export namespace DrawIPRequest {
  export type AsObject = {
    ip: string,
    mask: number,
    poolTag?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag.AsObject,
    name: string,
    activateImmediately: boolean,
  }
}

export class DrawIPResponse extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawIPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DrawIPResponse): DrawIPResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrawIPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawIPResponse;
  static deserializeBinaryFromReader(message: DrawIPResponse, reader: jspb.BinaryReader): DrawIPResponse;
}

export namespace DrawIPResponse {
  export type AsObject = {
    ip: string,
    message: string,
  }
}

export class DrawIPEstimatingNetworkRequest extends jspb.Message {
  hasPoolTag(): boolean;
  clearPoolTag(): void;
  getPoolTag(): github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag | undefined;
  setPoolTag(value?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag): void;

  getActivateImmediately(): boolean;
  setActivateImmediately(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawIPEstimatingNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DrawIPEstimatingNetworkRequest): DrawIPEstimatingNetworkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrawIPEstimatingNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawIPEstimatingNetworkRequest;
  static deserializeBinaryFromReader(message: DrawIPEstimatingNetworkRequest, reader: jspb.BinaryReader): DrawIPEstimatingNetworkRequest;
}

export namespace DrawIPEstimatingNetworkRequest {
  export type AsObject = {
    poolTag?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag.AsObject,
    activateImmediately: boolean,
  }
}

export class GetNetworkIncludingIPRequest extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkIncludingIPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkIncludingIPRequest): GetNetworkIncludingIPRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkIncludingIPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkIncludingIPRequest;
  static deserializeBinaryFromReader(message: GetNetworkIncludingIPRequest, reader: jspb.BinaryReader): GetNetworkIncludingIPRequest;
}

export namespace GetNetworkIncludingIPRequest {
  export type AsObject = {
    ip: string,
  }
}

export class ActivateIPRequest extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag>;
  setTagsList(value: Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag>): void;
  addTags(value?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag, index?: number): github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateIPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateIPRequest): ActivateIPRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivateIPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateIPRequest;
  static deserializeBinaryFromReader(message: ActivateIPRequest, reader: jspb.BinaryReader): ActivateIPRequest;
}

export namespace ActivateIPRequest {
  export type AsObject = {
    ip: string,
    tagsList: Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag.AsObject>,
  }
}

export class ActivateIPResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateIPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateIPResponse): ActivateIPResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivateIPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateIPResponse;
  static deserializeBinaryFromReader(message: ActivateIPResponse, reader: jspb.BinaryReader): ActivateIPResponse;
}

export namespace ActivateIPResponse {
  export type AsObject = {
  }
}

export class DeactivateIPRequest extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateIPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateIPRequest): DeactivateIPRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivateIPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateIPRequest;
  static deserializeBinaryFromReader(message: DeactivateIPRequest, reader: jspb.BinaryReader): DeactivateIPRequest;
}

export namespace DeactivateIPRequest {
  export type AsObject = {
    ip: string,
  }
}

export class DeactivateIPResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateIPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateIPResponse): DeactivateIPResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivateIPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateIPResponse;
  static deserializeBinaryFromReader(message: DeactivateIPResponse, reader: jspb.BinaryReader): DeactivateIPResponse;
}

export namespace DeactivateIPResponse {
  export type AsObject = {
  }
}

export class GetNetworkRequest extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getMask(): number;
  setMask(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkRequest): GetNetworkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkRequest;
  static deserializeBinaryFromReader(message: GetNetworkRequest, reader: jspb.BinaryReader): GetNetworkRequest;
}

export namespace GetNetworkRequest {
  export type AsObject = {
    ip: string,
    mask: number,
    name: string,
  }
}

export class GetEstimatedNetworkRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstimatedNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstimatedNetworkRequest): GetEstimatedNetworkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEstimatedNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstimatedNetworkRequest;
  static deserializeBinaryFromReader(message: GetEstimatedNetworkRequest, reader: jspb.BinaryReader): GetEstimatedNetworkRequest;
}

export namespace GetEstimatedNetworkRequest {
  export type AsObject = {
  }
}

export class GetNetworkResponse extends jspb.Message {
  getNetwork(): string;
  setNetwork(value: string): void;

  clearDefaultGatewaysList(): void;
  getDefaultGatewaysList(): Array<string>;
  setDefaultGatewaysList(value: Array<string>): void;
  addDefaultGateways(value: string, index?: number): string;

  getBroadcast(): string;
  setBroadcast(value: string): void;

  getNetmask(): string;
  setNetmask(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag>;
  setTagsList(value: Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag>): void;
  addTags(value?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag, index?: number): github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkResponse): GetNetworkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkResponse;
  static deserializeBinaryFromReader(message: GetNetworkResponse, reader: jspb.BinaryReader): GetNetworkResponse;
}

export namespace GetNetworkResponse {
  export type AsObject = {
    network: string,
    defaultGatewaysList: Array<string>,
    broadcast: string,
    netmask: string,
    tagsList: Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag.AsObject>,
  }
}

export class CreateNetworkRequest extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getMask(): number;
  setMask(value: number): void;

  clearDefaultGatewaysList(): void;
  getDefaultGatewaysList(): Array<string>;
  setDefaultGatewaysList(value: Array<string>): void;
  addDefaultGateways(value: string, index?: number): string;

  clearTagsList(): void;
  getTagsList(): Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag>;
  setTagsList(value: Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag>): void;
  addTags(value?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag, index?: number): github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNetworkRequest): CreateNetworkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNetworkRequest;
  static deserializeBinaryFromReader(message: CreateNetworkRequest, reader: jspb.BinaryReader): CreateNetworkRequest;
}

export namespace CreateNetworkRequest {
  export type AsObject = {
    ip: string,
    mask: number,
    defaultGatewaysList: Array<string>,
    tagsList: Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.Tag.AsObject>,
  }
}

export class CreateNetworkResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNetworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNetworkResponse): CreateNetworkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNetworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNetworkResponse;
  static deserializeBinaryFromReader(message: CreateNetworkResponse, reader: jspb.BinaryReader): CreateNetworkResponse;
}

export namespace CreateNetworkResponse {
  export type AsObject = {
  }
}

export class CreatePoolRequest extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getMask(): number;
  setMask(value: number): void;

  hasPool(): boolean;
  clearPool(): void;
  getPool(): github_com_taku_k_ipdrawer_pkg_model_model_pb.Pool | undefined;
  setPool(value?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Pool): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePoolRequest): CreatePoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePoolRequest;
  static deserializeBinaryFromReader(message: CreatePoolRequest, reader: jspb.BinaryReader): CreatePoolRequest;
}

export namespace CreatePoolRequest {
  export type AsObject = {
    ip: string,
    mask: number,
    pool?: github_com_taku_k_ipdrawer_pkg_model_model_pb.Pool.AsObject,
  }
}

export class CreatePoolResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePoolResponse): CreatePoolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePoolResponse;
  static deserializeBinaryFromReader(message: CreatePoolResponse, reader: jspb.BinaryReader): CreatePoolResponse;
}

export namespace CreatePoolResponse {
  export type AsObject = {
  }
}

export class ListIPRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIPRequest): ListIPRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIPRequest;
  static deserializeBinaryFromReader(message: ListIPRequest, reader: jspb.BinaryReader): ListIPRequest;
}

export namespace ListIPRequest {
  export type AsObject = {
  }
}

export class ListIPResponse extends jspb.Message {
  clearIpsList(): void;
  getIpsList(): Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.IPAddr>;
  setIpsList(value: Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.IPAddr>): void;
  addIps(value?: github_com_taku_k_ipdrawer_pkg_model_model_pb.IPAddr, index?: number): github_com_taku_k_ipdrawer_pkg_model_model_pb.IPAddr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIPResponse): ListIPResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIPResponse;
  static deserializeBinaryFromReader(message: ListIPResponse, reader: jspb.BinaryReader): ListIPResponse;
}

export namespace ListIPResponse {
  export type AsObject = {
    ipsList: Array<github_com_taku_k_ipdrawer_pkg_model_model_pb.IPAddr.AsObject>,
  }
}

