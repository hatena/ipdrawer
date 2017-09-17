import _ from 'lodash';
import { combineReducers } from 'redux';

import { CachedDataReducer, CachedDataReducerState } from './cachedDataReducers';
import * as api from '../utils/api';
import * as protos from '../proto/protos';


const networkListReducerObj = new CachedDataReducer(api.getNetworkList, 'networks');
export const refreshNetworks = networkListReducerObj.refresh;

const poolListReducerObj = new CachedDataReducer(api.getPoolList, 'pools');
export const refreshPools = poolListReducerObj.refresh;

const ipListReducerObj = new CachedDataReducer(api.getIPList, 'ips');
export const refreshIPs = ipListReducerObj.refresh;

const tempReservedIPListReducerObj = new CachedDataReducer(api.getTemporaryReservedIPList, 'temporaryReservedIPs');
export const refreshTempReservedIPs = tempReservedIPListReducerObj.refresh;

export interface APIReducersState {
  networks: CachedDataReducerState<protos.serverpb.ListNetworkResponse>;
  pools: CachedDataReducerState<protos.serverpb.ListPoolResponse>;
  ips: CachedDataReducerState<protos.serverpb.ListIPResponse>;
  temporaryReservedIPs: CachedDataReducerState<protos.serverpb.ListTemporaryReservedIPResponse>;
}

export default combineReducers<APIReducersState>({
  [networkListReducerObj.actionNamespace]: networkListReducerObj.reducer,
  [poolListReducerObj.actionNamespace]: poolListReducerObj.reducer,
  [ipListReducerObj.actionNamespace]: ipListReducerObj.reducer,
  [tempReservedIPListReducerObj.actionNamespace]: tempReservedIPListReducerObj.reducer,
});

export {
  CachedDataReducerState,
}
