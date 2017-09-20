import * as moment from 'moment';

import * as protos from '../proto/protos';

export const API_PREFIX = "/api/v0";

// https://github.com/cockroachdb/cockroach/blob/master/pkg/ui/src/util/api.ts
//
export function withTimeout<T>(promise: Promise<T>, timeout?: moment.Duration): Promise<T> {
  if (timeout) {
    return new Promise<T>((resolve, reject) => {
      setTimeout(() => reject(new Error(`Promise timed out after ${timeout.asMilliseconds()} ms`)), timeout.asMilliseconds());
      promise.then(resolve, reject);
    });
  } else {
    return promise;
  }
}

interface TRequest {
  constructor: {
    encode(message: TRequest, writer?: protobuf.Writer): protobuf.Writer;
  };
  toObject(): { [k: string]: any };
  toJSON(): { [k: string]: any };
}

export function toArrayBuffer(encodedRequest: Uint8Array): ArrayBuffer {
  return encodedRequest.buffer.slice(encodedRequest.byteOffset, encodedRequest.byteOffset + encodedRequest.byteLength);
}

function timeoutFetch<TResponse$Properties, TResponse, TResponseBuilder extends {
  new(properties?: TResponse$Properties): TResponse
  encode(message: TResponse$Properties, writer?: protobuf.Writer): protobuf.Writer
  decode(reader: (protobuf.Reader | Uint8Array), length?: number): TResponse;
  fromObject(object: { [k: string]: any }): TResponse;
}>(builder: TResponseBuilder, url: string, req: TRequest = null, timeout: moment.Duration = moment.duration(30, "s")): Promise<TResponse> {
  const params: RequestInit = {
    headers: {
      // "Accept": "application/x-protobuf",
      "Accept": "application/json",
      // "Content-Type": "application/x-protobuf",
      "Content-Type": "application/json",
      "Grpc-Timeout": timeout ? timeout.asMilliseconds() + "m" : undefined,
    }
  };

  if (req) {
    // const encodedRequest = req.constructor.encode(req).finish()
    params.method = "POST";
    // params.body = toArrayBuffer(encodedRequest);
    params.body = JSON.stringify(req.toJSON())
  }

  return withTimeout(fetch(url, params), timeout).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  }).then((json) => {
    return builder.fromObject(json);
  }).catch((error: Error) => {
    throw error;
  });
}

export type APIRequestFn<TRequest, TResponse> = (req: TRequest, timeout?: moment.Duration) => Promise<TResponse>;

// ENDPOINTS

export function getIPList(_req: protos.serverpb.ListIPRequest, timeout?: moment.Duration): Promise<protos.serverpb.ListIPResponse> {
  return timeoutFetch(protos.serverpb.ListIPResponse, `${API_PREFIX}/ip/list`, null, timeout);
}

export function getNetworkList(_req: protos.serverpb.ListNetworkRequest, timeout?: moment.Duration): Promise<protos.serverpb.ListNetworkResponse> {
  return timeoutFetch(protos.serverpb.ListNetworkResponse, `${API_PREFIX}/network/list`, null, timeout);
}

export function getPoolList(_req: protos.serverpb.ListPoolRequest, timeout?: moment.Duration): Promise<protos.serverpb.ListPoolResponse> {
  return timeoutFetch(protos.serverpb.ListPoolResponse, `${API_PREFIX}/pool/list`, null, timeout);
}

export function getTemporaryReservedIPList(_req: protos.serverpb.ListTemporaryReservedIPRequest, timeout?: moment.Duration): Promise<protos.serverpb.ListTemporaryReservedIPResponse> {
  return timeoutFetch(protos.serverpb.ListTemporaryReservedIPResponse, `${API_PREFIX}/ip/temporary_reserved/list`, null, timeout);
}

export function getIPInPool(req: protos.serverpb.GetIPInPoolRequest, timeout?: moment.Duration): Promise<protos.serverpb.GetIPInPoolResponse> {
  return timeoutFetch(protos.serverpb.GetIPInPoolResponse, `${API_PREFIX}/pool/${req.rangeStart}/${req.rangeEnd}/ip`, null, timeout);
}

export function activateIP(req: protos.serverpb.ActivateIPRequest, timeout?: moment.Duration): Promise<protos.serverpb.ActivateIPResponse> {
  return timeoutFetch(protos.serverpb.ActivateIPResponse, `${API_PREFIX}/ip/${req.ip}/activate`, req as any, timeout);
}

export function deactivateIP(req: protos.serverpb.DeactivateIPRequest, timeout?: moment.Duration): Promise<protos.serverpb.DeactivateIPResponse> {
  return timeoutFetch(protos.serverpb.DeactivateIPResponse, `${API_PREFIX}/ip/${req.ip}/deactivate`, req as any, timeout);
}

export function updateIP(req: protos.model.IPAddr, timeout?: moment.Duration): Promise<protos.serverpb.UpdateIPResponse> {
  return timeoutFetch(protos.serverpb.UpdateIPResponse, `${API_PREFIX}/ip/${req.ip}/update`, req as any, timeout);
}
