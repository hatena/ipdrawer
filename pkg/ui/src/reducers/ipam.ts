import { handleActions } from 'redux-actions';
import { combineReducers, Reducer } from 'redux';
import * as Actions from '../constants/actions';
import { IPAMStoreState } from "../../types/ipam";
import {model} from "../proto/protos"
import IPAddr = model.IPAddr;
import Network = model.Network;
import Pool = model.Pool;

const ipaddrReducer = handleActions<IPAddr[], any>({
  [Actions.REQUEST_IPADDRS]: (state, action) => {
    return state;
  },
  [Actions.RECEIVE_IPADDRS]: (state, action) => {
    return action.payload.ips
  }
}, []);

const networkReducer = handleActions<Network[], any>({
  [Actions.REQUEST_LIST_NETWORK]: (state, action) => {
    return state;
  },
  [Actions.RECEIVE_LIST_NETWORK]: (state, action) => {
    return action.payload.networks
  }
}, []);

const poolReducer = handleActions<Pool[], any>({
  [Actions.REQUEST_LIST_POOL]: (state, action) => {
    return state;
  },
  [Actions.RECEIVE_LIST_POOL]: (state, action) => {
    return action.payload.pools;
  }
}, []);

const temporaryReservedIPsReducer = handleActions<IPAddr[], any>({
  [Actions.REQUEST_LIST_TEMP_RESERVED_IPS]: (state, action) => {
    return state;
  },
  [Actions.RECEIVE_LIST_TEMP_RESERVED_IPS]: (state, action) => {
    return action.payload.temporary_reserved_ips;
  }
}, []);

export default combineReducers<IPAMStoreState>({
  ips: ipaddrReducer,
  networks: networkReducer,
  pools: poolReducer,
  temporaryReservedIPs: temporaryReservedIPsReducer,
});
