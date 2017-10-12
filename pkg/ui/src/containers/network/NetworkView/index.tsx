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
import {
  refreshNetworks, createNetwork, updateNetwork,
  deleteNetwork, refreshPoolsInNetwork,
} from '../../../reducers/apiReducers';


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
    poolsInNetwork: any;
    refreshNetworks: typeof refreshNetworks;
    createNetwork: typeof createNetwork;
    updateNetwork: typeof updateNetwork;
    deleteNetwork: typeof deleteNetwork;
    refreshPoolsInNetwork: typeof refreshPoolsInNetwork;
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
    const {
      classes, networks, createNetwork, poolsInNetwork,
      updateNetwork, deleteNetwork, refreshNetworks, refreshPoolsInNetwork,
    } = this.props;

    return (
      <Grid item xs className={classes.grid}>
        <NetworkTable
          networks={networks}
          poolsInNetwork={poolsInNetwork}
          refreshNetworks={refreshNetworks}
          createNetwork={createNetwork}
          updateNetwork={updateNetwork}
          deleteNetwork={deleteNetwork}
          refreshPoolsInNetwork={refreshPoolsInNetwork}
          classes={{}}
        />
      </Grid>
    );
  }
}

const styledNetworkView = withStyles(styleSheet, { withTheme: true })(NetworkView);

const networkViewConnected = connect(
  (state: AdminUIState) => {
    return {
      networks: (state.cachedData.networks.data && state.cachedData.networks.data.networks),
      poolsInNetwork: state.cachedData.poolsInNetwork,
    }
  },
  {
    refreshNetworks,
    createNetwork,
    updateNetwork,
    deleteNetwork,
    refreshPoolsInNetwork,
  }
)(styledNetworkView);

export {
  networkViewConnected as NetworkView
}
