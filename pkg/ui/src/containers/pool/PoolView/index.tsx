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
import { refreshPools, refreshIPsInPool } from '../../../reducers/apiReducers';

type Pool = protos.model.Pool;

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
    refreshPools: typeof refreshPools;
    refreshIPsInPool: typeof refreshIPsInPool;
    classes: any;
  }

  export interface State {

  }
}

class PoolView extends React.Component<PoolView.Props, PoolView.State> {
  componentWillMount() {
    this.props.refreshPools();
  }

  render() {
    const { classes, pools } = this.props;

    if (!_.isNil(pools)) {
      this.props.refreshIPsInPool(new protos.serverpb.GetIPInPoolRequest({
        rangeStart: pools[0].start,
        rangeEnd: pools[0].end,
      }));
    }

    return (
      <Grid container spacing={24}>
        <Grid item xs className={classes.grid}>
          <PoolTable pools={pools} classes={{}}/>
        </Grid>
      </Grid>
    );
  }
}

const styledPoolView = withStyles(styleSheet)(PoolView);

const poolViewConnected = connect(
  (state: AdminUIState) => {
    return {
      pools: (state.cachedData.pools.data && state.cachedData.pools.data.pools),
    }
  },
  {
    refreshPools,
    refreshIPsInPool,
  }
)(styledPoolView);

export {
  poolViewConnected as PoolView
}
