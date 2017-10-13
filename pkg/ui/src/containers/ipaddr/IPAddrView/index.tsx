import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import Grid from 'material-ui/Grid';

import { AdminUIState } from "../../../reducers/index";
import { model } from "../../../proto/protos";
import IPAddr = model.IPAddr;
import { IPAddrTable } from '../IPAddrTable';
import { refreshIPs, createIP, deactivateIP, updateIP } from '../../../reducers/apiReducers';


const styleSheet: StyleRulesCallback = theme => ({
  grid: {
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '10px',
    marginRight: '10px'
  }
});

namespace IPAddrView {
  export interface Props extends RouteComponentProps<void> {
    ips: IPAddr[];
    classes: any;
    refreshIPs: typeof refreshIPs;
    createIP: typeof createIP;
    deactivateIP: typeof deactivateIP;
    updateIP: typeof updateIP;
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
      <Grid item xs className={classes.grid}>
        <IPAddrTable
          ips={ips}
          classes={{}}
          refreshIPs={this.props.refreshIPs}
          createIP={this.props.createIP}
          deactivateIP={this.props.deactivateIP}
          updateIP={this.props.updateIP}
        />
      </Grid>
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
  {
    refreshIPs,
    createIP,
    deactivateIP,
    updateIP,
  }
)(styledIPAddrView);

export {
  ipaddrViewConnected as IPAddrView
}
