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
import Pool = model.Pool;


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
  static columns = [
    { name: 'start', label: 'Start' },
    { name: 'end', label: 'End' },
    { name: 'status', label: 'Status', },
    { name: 'tags', label: 'Tags' },
  ]

  convertToRows(pools: Pool[]) {
    return _.map(pools, (pool: Pool) => {
      return {
        start: pool.start,
        end: pool.end,
        status: Pool.Status[pool.status],
        tags: (
          <div>{pool.tags.map((tag, i) =>
            <Chip
              key={i}
              label={tag.key + ": " + tag.value}
            />)}
          </div>
        )
      }
    })
  }

  render() {
    const { classes, pools } = this.props;
    const rows = this.convertToRows(pools)

    return (
      <Paper className={classes.paper}>
        <Grid
          rows={rows}
          columns={PoolTable.columns}
        >
          <TableView />
          <TableHeaderRow />
        </Grid>
      </Paper>
    );
  }
}

const styledPoolTable = withStyles(styleSheet, { withTheme: true })(PoolTable);

export {
  styledPoolTable as PoolTable
}
