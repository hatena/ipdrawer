import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {
  Grid,
  TableView, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow, TableRowDetail,
  GroupingPanel, PagingPanel, DragDropContext,
} from '@devexpress/dx-react-grid-material-ui';
import {
  SortingState, LocalSorting
} from '@devexpress/dx-react-grid'
import Chip from 'material-ui/Chip';

import { model } from "../../../proto/protos";
import Pool = model.Pool;
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
    // display: 'flex',
  }
});

namespace PoolTable {
  export interface Props {
    pools: Pool[];
    classes: any;
  }

  export interface State {

  }
}

class PoolTable extends React.Component<PoolTable.Props, PoolTable.State> {
  columns: Object[]

  constructor(props?: PoolTable.Props, context?: any) {
    super(props, context);

    this.columns = [
      {
        name: 'range',
        getCellData: (row: Pool) => row.start + " ~ " + row.end
      },
      {
        name: 'status',
        getCellData: (row: Pool) => Pool.Status[row.status]
      },
      {
        name: 'tags',
        getCellData: (row: Pool) => <ChipCell tags={row.tags} classes={{}} />
      },
    ]
  }

  render() {
    const { classes, pools } = this.props;

    return (
      <Paper className={classes.paper}>
        <Grid
          rows={_.isNil(pools) ? [] : pools}
          columns={this.columns}
        >
          <SortingState />
          <LocalSorting />

          <TableView />
          <TableHeaderRow allowSorting />
        </Grid>
      </Paper>
    );
  }
}

const styledPoolTable = withStyles(styleSheet, { withTheme: true })(PoolTable);

export {
  styledPoolTable as PoolTable
}
