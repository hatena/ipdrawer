import { handleActions } from 'redux-actions';
import { combineReducers, Reducer } from 'redux';
import * as Actions from '../constants/actions';
import {IPAMStoreState} from "../../types/ipam";
import {model} from "../proto/protos"
import IPAddr = model.IPAddr;
import Network = model.Network;

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

export default combineReducers<IPAMStoreState>({
  ips: ipaddrReducer,
  networks: networkReducer,
});
