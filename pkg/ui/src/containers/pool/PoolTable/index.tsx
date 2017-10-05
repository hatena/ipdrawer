import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import {
  Grid,
  TableView, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow, TableRowDetail,
  GroupingPanel, PagingPanel, DragDropContext, TableEditColumn, TableEditRow
} from '@devexpress/dx-react-grid-material-ui';
import {
  SortingState, LocalSorting, EditingState
} from '@devexpress/dx-react-grid'
import {
  Chip,
  Paper,
  Button,
  TableCell,
} from 'material-ui';

import { model } from "../../../proto/protos";
import Pool = model.Pool;
import { ChipCell } from '../../../components/table/ChipCell';
import { CreateDialog } from '../../../components/table/CreateDialog';


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
  },
  button: {
    padding: theme.spacing.unit,
    minWidth: 40,
  }
});

namespace PoolTable {
  export interface Props {
    pools: Pool[];
    classes: any;
  }

  export interface State {
    dialogOpen: boolean;
    isNew: boolean;
    editing: {[key: string]: any};
    deleteDialogOpen: boolean;
    deletingRow: any;
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

    this.state = {
      dialogOpen: false,
      isNew: false,
      editing: {},
      deleteDialogOpen: false,
      deletingRow: [],
    }
  }

  // Unused but required by EditingState
  commitChanges = (added, changed, deleted) => {};

  convertTagsStr = (tags: model.ITag[]): string => {
    return tags.map((tag) => `${tag.key}=${tag.value}`).join(",")
  }

  clickEdit = (pool: Pool) => (event) => {
    this.setState({
      dialogOpen: true,
      isNew: false,
      editing: {
        start: pool.start,
        end: pool.end,
        status: pool.status,
        tags: this.convertTagsStr(pool.tags),
      }
    });
  }

  clickNew = (event) => {
    this.setState({
      dialogOpen: true,
      isNew: true,
      editing: {
        start: "",
        end: "",
        status: Pool.Status.UNKNOWN,
        tags: "",
      }
    })
  }

  clickDelete = (pool: Pool) => (event) => {
    this.setState({
      deleteDialogOpen: true,
      deletingRow: [pool],
    })
  }

  clickCreate = (editing) => (event) => {

  }

  clickUpdate = (editing) => (event) => {

  }

  changeEdit = (name) => (event) => {
    const editing = _.clone(this.state.editing)
    editing[name] = event.target.value;
    this.setState({
      editing: editing
    })
  }

  render() {
    const { classes, pools } = this.props;
    const {
      dialogOpen,
      editing,
      isNew,
    } = this.state;

    return (
      <Paper className={classes.paper}>
        <Grid
          rows={_.isNil(pools) ? [] : pools}
          columns={this.columns}
        >
          <SortingState />
          <EditingState
            onAddedRowsChange={this.clickNew}
            onCommitChanges={this.commitChanges}
          />

          <LocalSorting />

          <TableView />
          <TableHeaderRow allowSorting />

          <TableEditColumn
            cellTemplate={(args) => {
              return <TableCell className={classes.cell}>
                <span>
                  <Button
                    color="primary"
                    onClick={this.clickEdit(args.row)}
                    className={classes.button}
                  >
                    Edit
                  </Button>
                </span>
                <span>
                  <Button
                    color="primary"
                    onClick={this.clickDelete(args.row)}
                    className={classes.button}
                  >
                    Delete
                  </Button>
                </span>
              </TableCell>
            }}
            allowAdding
          />
        </Grid>

        <CreateDialog
          open={dialogOpen}
          isNew={isNew}
          clickCancel={() => {this.setState({dialogOpen: false})}}
          clickCreate={this.clickCreate}
          clickUpdate={this.clickUpdate}
          changeEdit={this.changeEdit}
          editing={editing}
          dialogType={CreateDialog.DialogType.Pool}
          classes={{}}
        />
      </Paper>
    );
  }
}

const styledPoolTable = withStyles(styleSheet, { withTheme: true })(PoolTable);

export {
  styledPoolTable as PoolTable
}
