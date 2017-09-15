import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';
import {serverpb} from "../proto/protos";
import ListIPResponse = serverpb.ListIPResponse;
import ListTemporaryReservedIPResponse = serverpb.ListTemporaryReservedIPResponse;

export const requestIPAddrs = createAction(Actions.REQUEST_IPADDRS);
export const receiveIPAddrs = createAction<ListIPResponse>(Actions.RECEIVE_IPADDRS);

export const requestTempReservedIPs = createAction(Actions.REQUEST_LIST_TEMP_RESERVED_IPS);
export const receiveTempReservedIPs = createAction<ListTemporaryReservedIPResponse>(Actions.RECEIVE_LIST_TEMP_RESERVED_IPS);

export const fetchIPAddrs = () => {
  return (dispatch) => {
    dispatch(requestIPAddrs());

    return fetch(`/api/v0/ip/list`)
      .then(response => {
        return response.json();
      }
      ).then(json =>
        dispatch(receiveIPAddrs(json))
      ).catch((error: Error) => {
        console.log(error);
      })
  }
};

export const fetchTempReservedIPs = () => {
  return (dispatch) => {
    dispatch(requestTempReservedIPs());

    return fetch(`/api/v0/ip/temporary_reserved/list`)
      .then(response => {
          return response.json();
        }
      ).then(json =>
        dispatch(receiveTempReservedIPs(json))
      ).catch((error: Error) => {
        console.log(error);
      })
  }
};
