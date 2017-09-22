import * as _ from 'lodash';
import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import {
  Grid,
  TableView, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';

import { AdminUIState } from "../../../reducers/index";
import { model } from "../../../proto/protos";
import IPAddr = model.IPAddr;
import { IPAddrTable } from '../IPAddrTable';
import { refreshTempReservedIPs } from '../../../reducers/apiReducers';


const styleSheet: StyleRulesCallback = theme => ({
  grid: {
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '10px',
    marginRight: '10px'
  }
});

namespace TempReservedIPView {
  export interface Props extends RouteComponentProps<void> {
    tempReservedIPs: IPAddr[];
    refreshTempReservedIPs: typeof refreshTempReservedIPs;
    classes: any;
  }

  export interface State {

  }
}

class TempReservedIPView extends React.Component<TempReservedIPView.Props, TempReservedIPView.State> {
  componentWillMount() {
    this.props.refreshTempReservedIPs();
  }

  render() {
    const { classes, tempReservedIPs } = this.props;

    return (
      <div className={classes.grid}>
        <Grid
          rows={_.isNil(tempReservedIPs) ? [] : tempReservedIPs}
          columns={IPAddrTable.columns}
        >
          <TableView />
          <TableHeaderRow />
        </Grid>
      </div>
    );
  }
}

const styledIPAddrView = withStyles(styleSheet)(TempReservedIPView);

const ipaddrViewConnected = connect(
  (state: AdminUIState) => {
    return {
      tempReservedIPs: (state.cachedData.temporaryReservedIPs.data && state.cachedData.temporaryReservedIPs.data.ips)
    }
  },
  {
    refreshTempReservedIPs
  }
)(styledIPAddrView);

export {
  ipaddrViewConnected as TempReservedIPView
}
