import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {
  Grid,
  TableView, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow, TableRowDetail,
  PagingPanel, TableEditColumn
} from '@devexpress/dx-react-grid-material-ui';
import {
  SortingState, LocalSorting, EditingState, RowDetailState, PagingState,
  LocalPaging, FilteringState, LocalFiltering,
} from '@devexpress/dx-react-grid'

import * as protos from '../../../proto/protos';
import { model } from '../../../proto/protos';
import Network = model.Network;
import { ChipCell } from '../../../components/table/ChipCell';
import {
  refreshNetworks, createNetwork, updateNetwork, deleteNetwork
} from '../../../reducers/apiReducers';
import { convertTagsStr, parseTags } from '../../../utils/model';
import { TableEditCell } from '../../../components/table/TableEditCell';
import { CreateDialog, CreateDialogType } from '../../../components/table/CreateDialog';
import { DeleteDialog } from '../../../components/table/DeleteDialog';


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
    refreshNetworks: typeof refreshNetworks;
    createNetwork: typeof createNetwork;
    updateNetwork: typeof updateNetwork;
    deleteNetwork: typeof deleteNetwork;
    classes: any
  }

  export interface State {
    createDialogOpen: boolean;
    isNew: boolean;
    editing: {[key: string]: any};
    deleteDialogOpen: boolean;
    deletingRows: any;
    expandedRows: any;
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
      name: 'netmask',
      title: 'Netmask',
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

  constructor(props?: NetworkTable.Props, context?: any) {
    super(props, context);

    this.state = {
      createDialogOpen: false,
      isNew: false,
      editing: {},
      deleteDialogOpen: false,
      deletingRows: [],
      expandedRows: [],
    }
  }

  // Unused but required by EditingState
  commitChanges = (added, changed, deleted) => {};

  onClickEdit = (network: Network) => (event) => {
    this.setState({
      createDialogOpen: true,
      isNew: false,
      editing: {
        ip: _.split(network.prefix, '/')[0],
        mask: _.toInteger(_.split(network.prefix, '/')[1]),
        gateways: _.join(network.gateways, ','),
        status: network.status,
        tags: convertTagsStr(network.tags),
        netmask: network.netmask,
        broadcast: network.broadcast,
      }
    });
  }

  onClickNew = (event) => {
    this.setState({
      createDialogOpen: true,
      isNew: true,
      editing: {
        ip: '',
        mask: '',
        gateways: '',
        status: Network.Status.UNKNOWN,
        tags: '',
      }
    })
  }

  onClickDelete = (network: Network) => (event) => {
    this.setState({
      deleteDialogOpen: true,
      deletingRows: [network],
    })
  }

  onClickCreate = (editing) => (event) => {
    this.props.createNetwork(new protos.serverpb.CreateNetworkRequest({
      ip: editing['ip'],
      mask: _.toInteger(editing['mask']),
      defaultGateways: _.split(editing['gateways'], ','),
      status: editing['status'],
      tags: parseTags(editing['tags']),
    }))
    this.setState({ createDialogOpen: false });
    setTimeout(() => {this.props.refreshNetworks()}, 1000);
  }

  onClickUpdate = (editing) => (event) => {
    this.props.updateNetwork(new protos.model.Network({
      prefix: editing['ip'] + '/' + editing['mask'],
      gateways: [editing['gateways']],
      netmask: editing['netmask'],
      broadcast: editing['broadcast'],
      status: editing['status'],
      tags: parseTags(editing['tags']),
    }))
    this.setState({ createDialogOpen: false });
    setTimeout(() => {this.props.refreshNetworks()}, 1000);
  }

  onChangeEdit = (name) => (event) => {
    const editing = _.clone(this.state.editing)
    editing[name] = event.target.value;
    this.setState({
      editing: editing
    })
  }

  // onExpandedRowsChange = (rows) => {
  //   const { networks } = this.props;
  //   _.map(_.difference(rows, this.state.expandedRows), (row) => {
  //     const pool = pools[row];
  //     this.props.refreshIPsInPool(new protos.serverpb.GetIPInPoolRequest({
  //       rangeStart: pool.start,
  //       rangeEnd: pool.end,
  //     }));
  //   })
  //   this.setState({
  //     expandedRows: rows,
  //   })
  // }

  onClickConfirmDelete = (event) => {
    _.map(this.state.deletingRows, (row: Network) => {
      this.props.deleteNetwork(new protos.serverpb.DeleteNetworkRequest({
        ip: _.split(row.prefix, '/')[0],
        mask: _.toInteger(_.split(row.prefix, '/')[1]),
      }));
    });
    this.setState({ deleteDialogOpen: false });
    setTimeout(() => { this.props.refreshNetworks() }, 1000);
  }

  onClickCancel = (event) => {
    this.setState({ deleteDialogOpen: false });
  }

  filter = (row, filter) => {
    switch(filter.columnName) {
      case 'prefix': {
        return row.prefix.indexOf(filter.value) >= 0;
      }
      case 'netmask': {
        return row.netmask.indexOf(filter.value) >= 0;
      }
      case 'gateways': {
        return row.gateways.indexOf(filter.value) >= 0;
      }
      case 'broadcast': {
        return row.braodcast.indexOf(filter.value) >= 0;
      }
      case 'status': {
        return Network.Status[row.status].indexOf(_.toUpper(filter.value)) >= 0;
      }
      case 'tags': {
        return convertTagsStr(row.tags).indexOf(filter.value) >= 0;
      }
    }
  }

  render() {
    const { classes, networks } = this.props;
    const {
      createDialogOpen, editing, isNew,
      expandedRows, deleteDialogOpen, deletingRows,
    } = this.state;

    return (
      <Paper className={classes.paper}>
        <Grid
          rows={_.isNil(networks) ? [] : networks}
          columns={NetworkTable.columns}
        >
          <SortingState />
          <EditingState
            onAddedRowsChange={this.onClickNew}
            onCommitChanges={this.commitChanges}
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
              return (
                <TableEditCell
                  onClickEdit={this.onClickEdit(args.row)}
                  onClickDelete={this.onClickDelete(args.row)}
                  classes={{}}
                />
              );
            }}
            allowAdding
          />
        </Grid>

        <CreateDialog
          open={createDialogOpen}
          isNew={isNew}
          clickCancel={() => {this.setState({ createDialogOpen: false })}}
          clickCreate={this.onClickCreate}
          clickUpdate={this.onClickUpdate}
          changeEdit={this.onChangeEdit}
          editing={editing}
          dialogType={CreateDialogType.Network}
          classes={{}}
        />
        <DeleteDialog
          deleteOpen={deleteDialogOpen}
          deletingRows={deletingRows}
          columns={NetworkTable.columns}
          clickCancel={this.onClickCancel}
          clickConfirmDelete={this.onClickConfirmDelete}
        />
      </Paper>
    );
  }
}

const styledNetworkTable = withStyles(styleSheet, { withTheme: true })(NetworkTable);

export {
  styledNetworkTable as NetworkTable
}
