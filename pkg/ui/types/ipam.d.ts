import {model} from "../src/proto/protos";
import IPAddr = model.IPAddr;

declare interface IPAMStoreState {
  ips?: IPAddr[];
}
