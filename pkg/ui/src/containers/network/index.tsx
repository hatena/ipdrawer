import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { AdminUIState } from "../../reducers/index";
import { model } from "../../proto/protos";
import Network = model.Network;
import { NetworkTable } from './NetworkTable';
import { refreshNetworks } from '../../reducers/apiReducers';

const styleSheet = theme => ({
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
      <NetworkTable networks={networks} classes={{}}/>
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
