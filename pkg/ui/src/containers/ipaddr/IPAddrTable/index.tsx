import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import {
  SortingState, SelectionState, FilteringState, PagingState, GroupingState, RowDetailState,
  LocalFiltering, LocalGrouping, LocalPaging, LocalSorting,
  ColumnOrderState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  TableView, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow, TableRowDetail,
  GroupingPanel, PagingPanel, DragDropContext,
} from '@devexpress/dx-react-grid-material-ui';

import { model } from "../../../proto/protos";
import IPAddr = model.IPAddr;
import IIPAddr = model.IIPAddr;

const styleSheet: StyleRulesCallback = theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  chip: {
    margin: theme.spacing.unit,
  },
  chip_row: {
    display: 'flex',
  }
});

namespace IPAddrTable {
  export interface Props {
    ips: IPAddr[]
    classes: any
  }

  export interface State {

  }
}

class IPAddrTable extends React.Component<IPAddrTable.Props, IPAddrTable.State> {
  static columns = [
    { name: "ip", title: "IP" },
    { name: "status", title: "Status" },
    { name: "tags", title: "Tags" }
  ];

  convertRows(ips: IPAddr[]) {
    return _.map(ips, (ip) => {
      return {
        ip: ip.ip,
        status: ip.status,
        tags: (
          <div>{ip.tags.map((tag, i) =>
            <Chip
              key={i}
              label={tag.key + ": " + tag.value}
            />)}
          </div>)
      }
    })
  }

  render() {
    const { classes, ips } = this.props;
    const rows = this.convertRows(ips);

    return (
      <Paper className={classes.paper}>
        <Grid
          rows={rows}
          columns={IPAddrTable.columns}
        >
          <TableView />
          <TableHeaderRow />
        </Grid>
      </Paper>
    );
  }
}

const styledIPAddrTable = withStyles(styleSheet, { withTheme: true })(IPAddrTable);

export {
  styledIPAddrTable as IPAddrTable
}
