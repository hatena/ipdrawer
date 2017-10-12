import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {
  Grid,
  TableView, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow, TableRowDetail,
  GroupingPanel, PagingPanel, DragDropContext,
} from '@devexpress/dx-react-grid-material-ui';

import { model } from "../../../proto/protos";
import Network = model.Network;
import { ChipCell } from '../../../components/table/ChipCell';


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
    {
      name: 'prefix',
      title: "Prefix",
    },
    {
      name: 'gateways',
      title: 'Gateways'
    },
    {
      name: 'broadcast',
      title: 'Broadcast',
    },
    {
      name: 'status',
      title: 'Status',
      getCellData: (row: Network) => Network.Status[row.status],
    },
    {
      name: 'tags',
      title: 'Tags',
      getCellData: (row: Network) => <ChipCell tags={row.tags} classes={{}} />
    },
  ]

  render() {
    const { classes, networks } = this.props;

    return (
      <Paper className={classes.paper}>
        <Grid
          rows={_.isNil(networks) ? [] : networks}
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
