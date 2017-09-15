import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';
import {serverpb} from "../proto/protos";
import ListIPResponse = serverpb.ListIPResponse;

export const requestIPAddrs = createAction(Actions.REQUEST_IPADDRS);
export const receiveIPAddrs = createAction<ListIPResponse>(Actions.RECEIVE_IPADDRS);

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
