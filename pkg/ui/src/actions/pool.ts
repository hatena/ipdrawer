import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';
import { serverpb } from "../proto/protos";
import ListPoolResponse = serverpb.ListPoolResponse;

export const requestListPool = createAction(Actions.REQUEST_LIST_POOL);
export const receiveListPool = createAction<ListPoolResponse>(Actions.RECEIVE_LIST_POOL);

export const fetchPools = () => {
  return (dispatch) => {
    dispatch(requestListPool());

    return fetch(`/api/v0/pool/list`)
      .then(response => {
          return response.json();
        }
      ).then(json =>
        dispatch(receiveListPool(json))
      ).catch((error: Error) => {
        console.log(error);
      })
  }
};
