import {model} from "../src/proto/protos";
import IPAddr = model.IPAddr;
import Network = model.Network;
import Pool = model.Pool;

declare interface IPAMStoreState {
  ips?: IPAddr[];
  networks?: Network[];
  pools?: Pool[];
}
