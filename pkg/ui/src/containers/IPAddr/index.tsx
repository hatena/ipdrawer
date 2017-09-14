import * as React from "react";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { AdminUIState } from "../../reducers/index";
import * as IPAddrActions from '../../actions/ipaddr';
import { model } from "../../proto/protos";
import IPAddr = model.IPAddr;
import IPStatus = model.IPAddr.IPStatus;
import {bindActionCreators} from "redux";

const styleSheet = createStyleSheet('BasicTable', theme => ({
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
}));

namespace IPAddrTable {
  export interface Props extends RouteComponentProps<void> {
    ips: IPAddr[]
    actions: typeof IPAddrActions
    classes: any
  }

  export interface State {

  }
}

class IPAddrTable extends React.Component<IPAddrTable.Props, IPAddrTable.State> {
  componentWillMount() {
    this.props.actions.fetchIPAddrs();
  }

  render() {
    const { classes } = this.props;
    const ips = this.props.ips;

    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>IP</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ips.map(ip => {
              return (
                <TableRow key={ip.ip}>
                  <TableCell>
                    {ip.ip}
                  </TableCell>
                  <TableCell>
                    {ip.status}
                  </TableCell>
                  <TableCell className={classes.chip_row}>
                    {ip.tags.map((tag, i) => {
                      return (
                        <Chip
                          className={classes.chip}
                          label={tag.key + ": " + tag.value}
                          key={i}
                        />
                      )
                    })}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const styledIPAddrTable = withStyles(styleSheet)(IPAddrTable);

const ipaddrTableConnected = connect(
  (state: AdminUIState) => {
    return {
      ips: state.ipam.ips

    }
  },
  (dispatch) =>{
    return {
      actions: bindActionCreators(IPAddrActions as any, dispatch)
    }
  }
)(styledIPAddrTable);

export {
  ipaddrTableConnected as IPAddrTable
}
