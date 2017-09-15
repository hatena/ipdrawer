import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { AdminUIState } from "../../reducers/index";
import * as NetworkActions from '../../actions/network';
import { model } from "../../proto/protos";
import Network = model.Network;
import { NetworkTable } from './NetworkTable';

const styleSheet = createStyleSheet('NetworkView', theme => ({
}));

namespace NetworkView {
  export interface Props extends RouteComponentProps<void> {
    networks: Network[]
    actions: typeof NetworkActions
    classes: any
  }

  export interface State {

  }
}

class NetworkView extends React.Component<NetworkView.Props, NetworkView.State> {
  render() {
    const { classes, networks } = this.props;

    return (
      <NetworkTable networks={networks} actions={this.props.actions}/>
    );
  }
}

const styledNetworkView = withStyles(styleSheet)(NetworkView);

const networkViewConnected = connect(
  (state: AdminUIState) => {
    return {
      networks: state.ipam.networks
    }
  },
  (dispatch) =>{
    return {
      actions: bindActionCreators(NetworkActions as any, dispatch)
    }
  }
)(styledNetworkView);

export {
  networkViewConnected as NetworkView
}
