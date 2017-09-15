import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { AdminUIState } from "../../../reducers/index";
import * as IPAddrActions from '../../../actions/ipaddr';
import { model } from "../../../proto/protos";
import IPAddr = model.IPAddr;
import { IPAddrTable } from '../IPAddrTable';

const styleSheet = createStyleSheet('BasicTable', theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  chip_row: {
    display: 'flex',
  }
}));

namespace TempReservedIPView {
  export interface Props extends RouteComponentProps<void> {
    tempReservedIPs: IPAddr[]
    actions: typeof IPAddrActions
    classes: any
  }

  export interface State {

  }
}

class TempReservedIPView extends React.Component<TempReservedIPView.Props, TempReservedIPView.State> {
  render() {
    const { classes, tempReservedIPs } = this.props;

    return (
      <IPAddrTable ips={tempReservedIPs} fetchIPAction={this.props.actions.fetchTempReservedIPs}/>
    );
  }
}

const styledIPAddrView = withStyles(styleSheet)(TempReservedIPView);

const ipaddrViewConnected = connect(
  (state: AdminUIState) => {
    return {
      tempReservedIPs: state.ipam.temporaryReservedIPs
    }
  },
  (dispatch) =>{
    return {
      actions: bindActionCreators(IPAddrActions as any, dispatch)
    }
  }
)(styledIPAddrView);

export {
  ipaddrViewConnected as TempReservedIPView
}
