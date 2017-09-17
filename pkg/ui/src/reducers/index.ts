import { combineReducers, Reducer } from 'redux';

import apiReducersReducer from './apiReducers';
import * as apireducers from "./apiReducers";


export interface AdminUIState {
  cachedData: apireducers.APIReducersState;
}

export default combineReducers<AdminUIState>({
  cachedData: apiReducersReducer,
});
