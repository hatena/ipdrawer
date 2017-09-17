import * as React from "react";
import { bindActionCreators } from "redux";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { AdminUIState } from "../../../reducers/index";
import { model } from "../../../proto/protos";
import IPAddr = model.IPAddr;
import { IPAddrTable } from '../IPAddrTable';
import { refreshTempReservedIPs } from '../../../reducers/apiReducers';

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
      <IPAddrTable
        ips={tempReservedIPs}
        classes={{}}
      />
    );
  }
}

const styledIPAddrView = withStyles(styleSheet)(TempReservedIPView);

const ipaddrViewConnected = connect(
  (state: AdminUIState) => {
    return {
      tempReservedIPs: (state.cachedData.temporaryReservedIPs.data && state.cachedData.temporaryReservedIPs.data.temporaryReservedIps)
    }
  },
  {
    refreshTempReservedIPs
  }
)(styledIPAddrView);

export {
  ipaddrViewConnected as TempReservedIPView
}
