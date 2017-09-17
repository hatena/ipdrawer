import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { AdminUIState } from "../../reducers/index";
import { model } from "../../proto/protos";
import IPAddr = model.IPAddr;
import { IPAddrTable } from './IPAddrTable';
import { refreshIPs } from '../../reducers/apiReducers';

const styleSheet: StyleRulesCallback = theme => ({
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
});

namespace IPAddrView {
  export interface Props extends RouteComponentProps<void> {
    ips: IPAddr[];
    classes: any;
    refreshIPs: typeof refreshIPs;
  }

  export interface State {

  }
}

class IPAddrView extends React.Component<IPAddrView.Props, IPAddrView.State> {
  componentWillMount() {
    this.props.refreshIPs();
  }

  render() {
    const { classes, ips } = this.props;

    return (
      <IPAddrTable ips={ips} classes={{}}/>
    );
  }
}

const styledIPAddrView = withStyles(styleSheet, { withTheme: true })(IPAddrView);

const ipaddrViewConnected = connect(
  (state: AdminUIState) => {
    return {
      ips: (state.cachedData.ips.data && state.cachedData.ips.data.ips)
    }
  },
  (dispatch) =>{
    return {
      refreshIPs: bindActionCreators(refreshIPs as any, dispatch),
    }
  }
)(styledIPAddrView);

export {
  ipaddrViewConnected as IPAddrView
}
