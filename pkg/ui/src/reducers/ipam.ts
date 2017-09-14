import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';
import {IPAMStoreState} from "../../types/ipam";
import {model} from "../proto/protos"
import IPAddr = model.IPAddr;
import IPStatus = model.IPAddr.IPStatus;

const initialState: IPAMStoreState = {
  ips: [
    new IPAddr({
      ip: "192.168.0.1",
      status: IPStatus.ACTIVE,
      tags: [
        {
          key: "Role",
          value: "test"
        },
        {
          key: "longlonglong",
          value: "test2"
        }
      ]
    })
  ],
};

export default handleActions<IPAMStoreState, any>({
  [Actions.REQUEST_IPADDRS]: (state, action) => {
    return state;
  },
  [Actions.RECEIVE_IPADDRS]: (state, action) => {
    return {
      ips: action.payload.ips
    }
  }
}, initialState);
