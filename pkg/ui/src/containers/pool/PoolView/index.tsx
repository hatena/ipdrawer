import * as _ from 'lodash';
import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import Grid from 'material-ui/Grid';

import { AdminUIState } from "../../../reducers/index";
import * as protos from '../../../proto/protos'
import { PoolTable } from '../PoolTable';
import {
  refreshPools, refreshIPsInPool, refreshNetworks,
  createPool, updatePool, deletePool, drawIP,
} from '../../../reducers/apiReducers';
import { KeyedCachedDataReducerState } from '../../../reducers/cachedDataReducers';

type Pool = protos.model.Pool;
type Network = protos.model.Network;

const styleSheet = theme => ({
  grid: {
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '10px',
    marginRight: '10px'
  }
});

namespace PoolView {
  export interface Props extends RouteComponentProps<void> {
    pools: Pool[];
    networks: Network[];
    drawedIP: typeof protos.serverpb.DrawIPResponse;
    ipsInPool: KeyedCachedDataReducerState<protos.serverpb.GetIPInPoolResponse>;
    refreshPools: typeof refreshPools;
    refreshIPsInPool: typeof refreshIPsInPool;
    refreshNetworks: typeof refreshNetworks;
    createPool: typeof createPool;
    updatePool: typeof updatePool;
    deletePool: typeof deletePool;
    drawIP: typeof drawIP;
    classes: any;
  }

  export interface State {

  }
}

class PoolView extends React.Component<PoolView.Props, PoolView.State> {
  componentWillMount() {
    this.props.refreshPools();
    this.props.refreshNetworks();
  }

  render() {
    const {
      classes, pools, networks, ipsInPool,
      createPool, refreshPools, updatePool, deletePool,
      refreshIPsInPool, drawIP
    } = this.props;


    return (
      <Grid item xs className={classes.grid}>
        <PoolTable
          pools={pools}
          networks={networks}
          ipsInPool={ipsInPool}
          createPool={createPool}
          updatePool={updatePool}
          deletePool={deletePool}
          refreshPools={refreshPools}
          refreshIPsInPool={refreshIPsInPool}
          drawIP={drawIP}
          classes={{}}
        />
      </Grid>
    );
  }
}

const styledPoolView = withStyles(styleSheet)(PoolView);

const poolViewConnected = connect(
  (state: AdminUIState) => {
    return {
      pools: (state.cachedData.pools.data && state.cachedData.pools.data.pools),
      networks: (state.cachedData.networks.data && state.cachedData.networks.data.networks),
      ipsInPool: state.cachedData.ipsInPool,
      drawedIP: state.cachedData.drawedIP.data,
    }
  },
  {
    refreshPools,
    refreshIPsInPool,
    refreshNetworks,
    createPool,
    updatePool,
    deletePool,
    drawIP,
  }
)(styledPoolView);

export {
  poolViewConnected as PoolView
}
