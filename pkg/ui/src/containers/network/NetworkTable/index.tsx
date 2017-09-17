import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Chip from 'material-ui/Chip';

import { model } from "../../../proto/protos";
import Network = model.Network;

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

namespace NetworkTable {
  export interface Props {
    networks: Network[]
    classes: any
  }

  export interface State {

  }
}

class NetworkTable extends React.Component<NetworkTable.Props, NetworkTable.State> {
  render() {
    const { classes, networks } = this.props;

    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prefix</TableCell>
              <TableCell>Gateways</TableCell>
              <TableCell>Broadcast</TableCell>
              <TableCell>Netmask</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(networks, (network) => {
              return (
                <TableRow key={network.prefix}>
                  <TableCell>
                    {network.prefix}
                  </TableCell>
                  <TableCell>
                    {network.gateways}
                  </TableCell>
                  <TableCell>
                    {network.broadcast}
                  </TableCell>
                  <TableCell>
                    {network.netmask}
                  </TableCell>
                  <TableCell>
                    {network.status}
                  </TableCell>
                  <TableCell className={classes.chip_row}>
                    {network.tags.map((tag, i) => {
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

const styledNetworkTable = withStyles(styleSheet, { withTheme: true })(NetworkTable);

export {
  styledNetworkTable as NetworkTable
}
