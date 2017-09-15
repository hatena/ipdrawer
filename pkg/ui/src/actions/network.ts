import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';
import {serverpb} from "../proto/protos";
import ListNetworkResponse = serverpb.ListNetworkResponse;

export const requestListNetwork = createAction(Actions.REQUEST_LIST_NETWORK);
export const receiveListNetwork = createAction<ListNetworkResponse>(Actions.RECEIVE_LIST_NETWORK);

export const fetchNetworks = () => {
  return (dispatch) => {
    dispatch(requestListNetwork());

    return fetch(`/api/v0/network/list`)
      .then(response => {
          return response.json();
        }
      ).then(json =>
        dispatch(receiveListNetwork(json))
      ).catch((error: Error) => {
        console.log(error);
      })
  }
};
