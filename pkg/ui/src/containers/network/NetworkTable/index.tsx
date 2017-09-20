import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {
  Grid,
  TableView, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow, TableRowDetail,
  GroupingPanel, PagingPanel, DragDropContext,
} from '@devexpress/dx-react-grid-material-ui';

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
  static columns = [
    { name: 'prefix', label: 'Prefix' },
    { name: 'gateways', label: 'Gateways' },
    { name: 'broadcast', label: 'Broadcast' },
    { name: 'status', label: 'Status' },
    { name: 'tags', label: 'Tags' }
  ]

  convertToRows(networks: Network[]) {
    return _.map(networks, (network: Network) => {
      return {
        prefix: network.prefix,
        gateways: network.gateways,
        broadcast: network.broadcast,
        status: Network.Status[network.status],
        tags: (
          <div>{network.tags.map((tag, i) =>
            <Chip
              key={i}
              label={tag.key + ": " + tag.value}
            />)}
          </div>
        )
      };
    })
  }

  render() {
    const { classes, networks } = this.props;
    const rows = this.convertToRows(networks);

    return (
      <Paper className={classes.paper}>
        <Grid
          rows={rows}
          columns={NetworkTable.columns}
        >
          <TableView />
          <TableHeaderRow />
        </Grid>
      </Paper>
    );
  }
}

const styledNetworkTable = withStyles(styleSheet, { withTheme: true })(NetworkTable);

export {
  styledNetworkTable as NetworkTable
}
