import * as _ from 'lodash';
import { Action, Dispatch } from 'redux';

import { APIRequestFn } from "../utils/api";

interface PayloadAction<T> extends Action {
  payload: T;
}

interface WithRequest<T, R> {
  data?: T;
  request: R;
}

export class CachedDataReducerState<TResponseMessage> {
  data: TResponseMessage;
  inFlight = false;
  lastError: Error;
}

export class KeyedCachedDataReducerState<TResponseMessage> {
  [id: string]: CachedDataReducerState<TResponseMessage>;
}

export class CachedDataReducer<TRequest, TResponseMessage> {

  REQUEST: string;
  RECEIVE: string;
  ERROR: string;

  constructor(
    protected apiEndpoint: APIRequestFn<TRequest, TResponseMessage>,
    public actionNamespace: string
  ) {
    this.REQUEST = `ipdrawer/CachedDataReducer/${actionNamespace}/REQUEST`
    this.RECEIVE = `ipdrawer/CachedDataReducer/${actionNamespace}/RECEIVE`
    this.ERROR = `ipdrawer/CachedDataReducer/${actionNamespace}/ERROR`
  }

  reducer = (
    state = new CachedDataReducerState<TResponseMessage>(),
    action: Action
  ): CachedDataReducerState<TResponseMessage> => {
    if (_.isNil(action)) {
      return state;
    }

    switch (action.type) {
      case this.REQUEST:
        state = _.clone(state)
        state.inFlight = true;
        return state;
      case this.RECEIVE:
        const { payload } = action as PayloadAction<WithRequest<TResponseMessage, TRequest>>;
        state = _.clone(state);
        state.inFlight = false;
        state.data = payload.data;
        state.lastError = null;
        return state;
      case this.ERROR:
        const { payload: error } = action as PayloadAction<WithRequest<Error, TRequest>>;
        state = _.clone(state);
        state.inFlight = false;
        state.lastError = error.data;
        return state;
      default:
        return state;
    }
  }

  requestData = (request?: TRequest): PayloadAction<WithRequest<void, TRequest>> => {
    return {
      type: this.REQUEST,
      payload: { request },
    };
  }

  receiveData = (data: TResponseMessage, request?: TRequest): PayloadAction<WithRequest<TResponseMessage, TRequest>> => {
    return {
      type: this.RECEIVE,
      payload: { request, data },
    };
  }

  errorData = (error: Error, request?: TRequest): PayloadAction<WithRequest<Error, TRequest>> => {
    return {
      type: this.ERROR,
      payload: { request, data: error },
    };
  }

  refresh = <S>(req?: TRequest, stateAccessor = (state: any, _req: TRequest) => state.cachedData[this.actionNamespace]) => {
    return (dispatch: Dispatch<S>, getState: () => any) => {
      const state: CachedDataReducerState<TResponseMessage> = stateAccessor(getState(), req);

      if (state && state.inFlight) {
        return;
      }

      dispatch(this.requestData(req));
      return this.apiEndpoint(req).then((data) => {
        dispatch(this.receiveData(data, req));
      }).catch((error: Error) => {
        setTimeout(() => dispatch(this.errorData(error, req)), 1000);
      });
    };
  }
}

export class KeyedCachedDataReducer<TRequest, TResponseMessage> {
  cachedDataReducer: CachedDataReducer<TRequest, TResponseMessage>;

  constructor(
    protected apiEndpoint: (req: TRequest) => Promise<TResponseMessage>,
    public actionNamespace: string,
    private requestToID: (req: TRequest) => string
  ) {
    this.cachedDataReducer = new CachedDataReducer<TRequest, TResponseMessage>(apiEndpoint, actionNamespace);
  }

  refresh = (req?: TRequest, stateAccessor = (state: any, r: TRequest) => state.cachedData[this.cachedDataReducer.actionNamespace][this.requestToID(r)]) => this.cachedDataReducer.refresh(req, stateAccessor);

  reducer = (state = new KeyedCachedDataReducerState<TResponseMessage>(), action: Action): KeyedCachedDataReducerState<TResponseMessage> => {
    if (_.isNil(action)) {
      return state;
    }

    switch (action.type) {
      case this.cachedDataReducer.REQUEST:
      case this.cachedDataReducer.RECEIVE:
      case this.cachedDataReducer.ERROR:
        const { request } = (action as PayloadAction<WithRequest<TResponseMessage | Error | void, TRequest>>).payload;
        const id = this.requestToID(request);
        state = _.clone(state);
        state[id] = this.cachedDataReducer.reducer(state[id], action);
        return state;
      default:
        return state;
    }
  }
}
