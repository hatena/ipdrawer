import * as React from "react";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Chip from 'material-ui/Chip';

import * as PoolActions from '../../../actions/pool';
import { model } from "../../../proto/protos";
import Pool = model.Pool;

const styleSheet = createStyleSheet('PoolTable', theme => ({
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
}));

namespace PoolTable {
  export interface Props {
    pools: Pool[]
    actions: typeof PoolActions
    classes: any
  }

  export interface State {

  }
}

class PoolTable extends React.Component<PoolTable.Props, PoolTable.State> {
  componentWillMount() {
    this.props.actions.fetchPools();
  }

  render() {
    const { classes, pools } = this.props;

    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pools.map(pool => {
              return (
                <TableRow key={pool.start + "," + pool.end}>
                  <TableCell>
                    {pool.start}
                  </TableCell>
                  <TableCell>
                    {pool.end}
                  </TableCell>
                  <TableCell>
                    {pool.status}
                  </TableCell>
                  <TableCell className={classes.chip_row}>
                    {pool.tags.map((tag, i) => {
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

const styledPoolTable = withStyles(styleSheet)(PoolTable);

export {
  styledPoolTable as PoolTable
}
