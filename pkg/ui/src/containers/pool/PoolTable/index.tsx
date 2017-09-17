import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import {StyledComponentProps} from "material-ui";

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
            {_.map(pools, pool => {
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
                  <TableCell>
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

const styledPoolTable = withStyles(styleSheet, { withTheme: true })(PoolTable);

export {
  styledPoolTable as PoolTable
}
