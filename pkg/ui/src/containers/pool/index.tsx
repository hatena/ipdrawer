import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { AdminUIState } from "../../reducers/index";
import * as PoolActions from '../../actions/pool';
import { model } from "../../proto/protos";
import Pool = model.Pool;
import { PoolTable } from './PoolTable';

const styleSheet = createStyleSheet('PoolView', theme => ({
}));

namespace PoolView {
  export interface Props extends RouteComponentProps<void> {
    pools: Pool[]
    actions: typeof PoolActions
    classes: any
  }

  export interface State {

  }
}

class PoolView extends React.Component<PoolView.Props, PoolView.State> {
  render() {
    const { classes, pools } = this.props;

    return (
      <PoolTable pools={pools} actions={this.props.actions}/>
    );
  }
}

const styledPoolView = withStyles(styleSheet)(PoolView);

const poolViewConnected = connect(
  (state: AdminUIState) => {
    return {
      pools: state.ipam.pools
    }
  },
  (dispatch) =>{
    return {
      actions: bindActionCreators(PoolActions as any, dispatch)
    }
  }
)(styledPoolView);

export {
  poolViewConnected as PoolView
}
