import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import Grid from 'material-ui/Grid';

import { AdminUIState } from "../../../reducers/index";
import { model } from "../../../proto/protos";
import Network = model.Network;
import { NetworkTable } from '../NetworkTable';
import { refreshNetworks } from '../../../reducers/apiReducers';


const styleSheet = theme => ({
  grid: {
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '10px',
    marginRight: '10px'
  }
});

namespace NetworkView {
  export interface Props extends RouteComponentProps<void> {
    networks: Network[];
    refreshNetworks: typeof refreshNetworks;
    classes: any;
  }

  export interface State {

  }
}

class NetworkView extends React.Component<NetworkView.Props, NetworkView.State> {
  componentWillMount() {
    this.props.refreshNetworks();
  }

  render() {
    const { classes, networks } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid item xs className={classes.grid}>
          <NetworkTable networks={networks} classes={{}}/>
        </Grid>
      </Grid>
    );
  }
}

const styledNetworkView = withStyles(styleSheet, { withTheme: true })(NetworkView);

const networkViewConnected = connect(
  (state: AdminUIState) => {
    return {
      networks: (state.cachedData.networks.data && state.cachedData.networks.data.networks),
    }
  },
  {
    refreshNetworks
  }
)(styledNetworkView);

export {
  networkViewConnected as NetworkView
}
