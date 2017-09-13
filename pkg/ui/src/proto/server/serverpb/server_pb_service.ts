// package: serverpb
// file: server/serverpb/server.proto

import * as server_serverpb_server_pb from "../../server/serverpb/server_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../github.com/mwitkow/go-proto-validators/validator_pb";
import * as github_com_taku_k_ipdrawer_pkg_model_model_pb from "../../github.com/taku-k/ipdrawer/pkg/model/model_pb";
import * as github_com_gogo_protobuf_gogoproto_gogo_pb from "../../github.com/gogo/protobuf/gogoproto/gogo_pb";
export class NetworkServiceV0 {
  static serviceName = "serverpb.NetworkServiceV0";
}
export namespace NetworkServiceV0 {
  export class GetEstimatedNetwork {
    static readonly methodName = "GetEstimatedNetwork";
    static readonly service = NetworkServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.GetEstimatedNetworkRequest;
    static readonly responseType = server_serverpb_server_pb.GetNetworkResponse;
  }
  export class DrawIP {
    static readonly methodName = "DrawIP";
    static readonly service = NetworkServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.DrawIPRequest;
    static readonly responseType = server_serverpb_server_pb.DrawIPResponse;
  }
  export class DrawIPEstimatingNetwork {
    static readonly methodName = "DrawIPEstimatingNetwork";
    static readonly service = NetworkServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.DrawIPEstimatingNetworkRequest;
    static readonly responseType = server_serverpb_server_pb.DrawIPResponse;
  }
  export class GetNetwork {
    static readonly methodName = "GetNetwork";
    static readonly service = NetworkServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.GetNetworkRequest;
    static readonly responseType = server_serverpb_server_pb.GetNetworkResponse;
  }
  export class CreateNetwork {
    static readonly methodName = "CreateNetwork";
    static readonly service = NetworkServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.CreateNetworkRequest;
    static readonly responseType = server_serverpb_server_pb.CreateNetworkResponse;
  }
  export class CreatePool {
    static readonly methodName = "CreatePool";
    static readonly service = NetworkServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.CreatePoolRequest;
    static readonly responseType = server_serverpb_server_pb.CreatePoolResponse;
  }
}
export class IPServiceV0 {
  static serviceName = "serverpb.IPServiceV0";
}
export namespace IPServiceV0 {
  export class GetNetworkIncludingIP {
    static readonly methodName = "GetNetworkIncludingIP";
    static readonly service = IPServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.GetNetworkIncludingIPRequest;
    static readonly responseType = server_serverpb_server_pb.GetNetworkResponse;
  }
  export class ActivateIP {
    static readonly methodName = "ActivateIP";
    static readonly service = IPServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.ActivateIPRequest;
    static readonly responseType = server_serverpb_server_pb.ActivateIPResponse;
  }
  export class DeactivateIP {
    static readonly methodName = "DeactivateIP";
    static readonly service = IPServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.DeactivateIPRequest;
    static readonly responseType = server_serverpb_server_pb.DeactivateIPResponse;
  }
  export class ListIP {
    static readonly methodName = "ListIP";
    static readonly service = IPServiceV0;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = server_serverpb_server_pb.ListIPRequest;
    static readonly responseType = server_serverpb_server_pb.ListIPResponse;
  }
}
