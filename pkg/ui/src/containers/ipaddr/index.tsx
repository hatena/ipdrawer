import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { AdminUIState } from "../../reducers/index";
import * as IPAddrActions from '../../actions/ipaddr';
import { model } from "../../proto/protos";
import IPAddr = model.IPAddr;
import { IPAddrTable } from './IPAddrTable';

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

namespace IPAddrView {
  export interface Props extends RouteComponentProps<void> {
    ips: IPAddr[]
    actions: typeof IPAddrActions
    classes: any
  }

  export interface State {

  }
}

class IPAddrView extends React.Component<IPAddrView.Props, IPAddrView.State> {
  render() {
    const { classes } = this.props;
    const ips = this.props.ips;

    return (
      <IPAddrTable ips={ips} actions={this.props.actions}/>
    );
  }
}

const styledIPAddrView = withStyles(styleSheet)(IPAddrView);

const ipaddrViewConnected = connect(
  (state: AdminUIState) => {
    return {
      ips: state.ipam.ips
    }
  },
  (dispatch) =>{
    return {
      actions: bindActionCreators(IPAddrActions as any, dispatch)
    }
  }
)(styledIPAddrView);

export {
  ipaddrViewConnected as IPAddrView
}
