import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import {
  Grid,
  TableView, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow, TableRowDetail,
  GroupingPanel, PagingPanel, DragDropContext, TableEditColumn, TableEditRow
} from '@devexpress/dx-react-grid-material-ui';
import {
  SortingState, LocalSorting, EditingState, RowDetailState, PagingState,
  LocalPaging, FilteringState, LocalFiltering,
} from '@devexpress/dx-react-grid'
import {
  Chip,
  Paper,
  Button,
  TableCell,
} from 'material-ui';

import { model } from "../../../proto/protos";
import * as protos from "../../../proto/protos";
import Pool = model.Pool;
import Network = model.Network;
import { ChipCell } from '../../../components/table/ChipCell';
import { CreateDialog } from '../../../components/table/CreateDialog';
import { DeleteDialog } from '../../../components/table/DeleteDialog';
import {
  createPool, updatePool, deletePool, refreshPools,
  refreshIPsInPool, ipInPoolRequestToID } from '../../../reducers/apiReducers';
import { convertTagsStr, parseTags } from '../../../utils/model';
import { KeyedCachedDataReducerState } from '../../../reducers/cachedDataReducers';
import { IPAddrTable } from '../../ipaddr/IPAddrTable';


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
  },
  details: {
    margin: 20,
  }
});

namespace PoolTable {
  export interface Props {
    pools: Pool[];
    networks: Network[];
    ipsInPool: KeyedCachedDataReducerState<protos.serverpb.GetIPInPoolResponse>;
    createPool: typeof createPool;
    updatePool: typeof updatePool;
    deletePool: typeof deletePool;
    refreshPools: typeof refreshPools;
    refreshIPsInPool: typeof refreshIPsInPool;
    classes: any;
  }

  export interface State {
    dialogOpen: boolean;
    isNew: boolean;
    editing: {[key: string]: any};
    deleteDialogOpen: boolean;
    deletingRows: any;
    expandedRows: any;
  }
}

class PoolTable extends React.Component<PoolTable.Props, PoolTable.State> {
  static columns = [
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

  constructor(props?: PoolTable.Props, context?: any) {
    super(props, context);

    this.state = {
      dialogOpen: false,
      isNew: false,
      editing: {},
      deleteDialogOpen: false,
      deletingRows: [],
      expandedRows: [],
    }
  }

  // Unused but required by EditingState
  commitChanges = (added, changed, deleted) => {};

  clickEdit = (pool: Pool) => (event) => {
    this.setState({
      dialogOpen: true,
      isNew: false,
      editing: {
        start: pool.start,
        end: pool.end,
        status: pool.status,
        tags: convertTagsStr(pool.tags),
      }
    });
  }

  clickNew = (event) => {
    this.setState({
      dialogOpen: true,
      isNew: true,
      editing: {
        network: "",
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
      deletingRows: [pool],
    })
  }

  clickCreate = (editing) => (event) => {
    this.props.createPool(new protos.serverpb.CreatePoolRequest({
      ip: _.split(editing['network'], '/')[0],
      mask: _.toInteger(_.split(editing['network'], '/')[1]),
      pool: {
        start: editing['start'],
        end: editing['end'],
        status: editing['status'],
        tags: parseTags(editing['tags']),
      }
    }))
    this.setState({ dialogOpen: false });
    setTimeout(() => {this.props.refreshPools()}, 1000);
  }

  clickUpdate = (editing) => (event) => {
    this.props.updatePool(new protos.model.Pool({
      start: editing['start'],
      end: editing['end'],
      status: editing['status'],
      tags: parseTags(editing['tags']),
    }))
    this.setState({ dialogOpen: false });
    setTimeout(() => {this.props.refreshPools()}, 1000);
  }

  changeEdit = (name) => (event) => {
    const editing = _.clone(this.state.editing)
    editing[name] = event.target.value;
    this.setState({
      editing: editing
    })
  }

  onExpandedRowsChange = (rows) => {
    const { pools, ipsInPool } = this.props;
    _.map(_.difference(rows, this.state.expandedRows), (row) => {
      const pool = pools[row];
      this.props.refreshIPsInPool(new protos.serverpb.GetIPInPoolRequest({
        rangeStart: pool.start,
        rangeEnd: pool.end,
      }));
    })
    this.setState({
      expandedRows: rows,
    })
  }

  onClickConfirmDelete = (event) => {
    _.map(this.state.deletingRows, (row: Pool) => {
      this.props.deletePool(new protos.serverpb.DeletePoolRequest({
        rangeStart: row.start,
        rangeEnd: row.end,
      }));
    });
    this.setState({ deleteDialogOpen: false });
    setTimeout(() => { this.props.refreshPools() }, 1000);
  }

  onClickCancel = (event) => {
    this.setState({deleteDialogOpen: false });
  }

  filter = (row, filter) => {
    if (filter.columnName == 'range') {
      if (row.start.indexOf(filter.value) == -1) {
        return row.end.indexOf(filter.value) >= 0;
      }
      return row.start.indexOf(filter.value) >= 0;
    }
    if (filter.columnName == 'status') {
      return Pool.Status[row.status].indexOf(_.toUpper(filter.value)) >= 0;
    }
    if (filter.columnName == 'tags') {
      return convertTagsStr(row.tags).indexOf(filter.value) >= 0;
    }
  }

  render() {
    const { classes, pools, networks } = this.props;
    const {
      dialogOpen,
      editing,
      isNew,
      expandedRows,
      deleteDialogOpen,
      deletingRows,
    } = this.state;

    return (
      <Paper className={classes.paper}>
        <Grid
          rows={_.isNil(pools) ? [] : pools}
          columns={PoolTable.columns}
        >
          <SortingState />
          <EditingState
            onAddedRowsChange={this.clickNew}
            onCommitChanges={this.commitChanges}
          />
          <RowDetailState
            expandedRows={expandedRows}
            onExpandedRowsChange={this.onExpandedRowsChange}
          />
          <PagingState
            defaultCurrentPage={0}
            defaultPageSize={25}
          />
          <FilteringState defaultFilters={[]} />

          <LocalSorting />
          <LocalFiltering
            filterFn={this.filter}
          />
          <LocalPaging />

          <TableView />
          <TableHeaderRow allowSorting />
          <TableFilterRow />
          <PagingPanel
            allowedPageSizes={[25,50,100]}
          />

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
          <TableRowDetail
            template={({ row }) => {
              const data = this.props.ipsInPool[ipInPoolRequestToID(new protos.serverpb.GetIPInPoolRequest({
                rangeStart: row.start,
                rangeEnd: row.end,
              }))].data;
              const ips = data && data.ips;
              if (_.isNil(ips)) {
                return <div></div>
              }
              return (
                <div className={classes.details}>
                  <Grid
                    rows={_.isNil(ips) ? [] : ips}
                    columns={IPAddrTable.columns}
                  >
                    <TableView />
                    <TableHeaderRow />
                  </Grid>
                </div>
              )}}
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
          networks={networks}
          classes={{}}
        />
        <DeleteDialog
          deleteOpen={deleteDialogOpen}
          deletingRows={deletingRows}
          columns={PoolTable.columns}
          clickCancel={this.onClickCancel}
          clickConfirmDelete={this.onClickConfirmDelete}
        />
      </Paper>
    );
  }
}

const styledPoolTable = withStyles(styleSheet, { withTheme: true })(PoolTable);

export {
  styledPoolTable as PoolTable
}
