import { combineReducers, Reducer } from 'redux';
import ipam from './ipam';
import { IPAMStoreState } from "../../types/ipam";

export interface AdminUIState {
  ipam: IPAMStoreState;
}

export default combineReducers<AdminUIState>({
  ipam
});
