import {model} from "../src/proto/protos";
import IPAddr = model.IPAddr;
import Network = model.Network;

declare interface IPAMStoreState {
  ips?: IPAddr[];
  networks?: Network[];
}
