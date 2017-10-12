import * as _ from 'lodash';
import * as React from "react";
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import { TableCell } from 'material-ui';
import {
  SortingState, SelectionState, FilteringState, PagingState, GroupingState, RowDetailState,
  LocalFiltering, LocalGrouping, LocalPaging, LocalSorting,
  ColumnOrderState, EditingState
} from '@devexpress/dx-react-grid';
import {
  Grid,
  TableView, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow, TableRowDetail,
  GroupingPanel, PagingPanel, DragDropContext, TableEditColumn, TableEditRow, DropDownMenu
} from '@devexpress/dx-react-grid-material-ui';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormGroup,
  TextField,
} from 'material-ui';

import { model } from "../../../proto/protos";
import IPAddr = model.IPAddr;
import { refreshIPs, createIP, deactivateIP, updateIP } from '../../../reducers/apiReducers';
import * as protos from '../../../proto/protos';
import { ChipCell } from '../../../components/table/ChipCell';
import { CreateDialog, CreateDialogType } from '../../../components/table/CreateDialog';
import { DeleteDialog } from '../../../components/table/DeleteDialog';


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
  },
  lookupEditCell: {
    verticalAlign: 'middle',
    paddingRight: theme.spacing.unit,
    '& ~ $lookupEditCell': {
      paddingLeft: theme.spacing.unit,
    },
  },
  cell: {
    whiteSpace: 'nowrap',
    textAlign: 'center',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: 0,
  },
  dialog: {
    width: 'calc(100% - 16px)',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    padding: theme.spacing.unit,
    minWidth: 40,
  }
});


namespace IPAddrTable {
  export interface Props {
    ips: IPAddr[];
    classes: any;
    refreshIPs: typeof refreshIPs;
    createIP: typeof createIP;
    deactivateIP: typeof deactivateIP;
    updateIP: typeof updateIP;
  }

  export interface State {
    editOpen: boolean;
    editNew: boolean;
    editing: {[key: string]: any};
    deleteDialogOpen: boolean;
    deletingRow: any;
  }
}

class IPAddrTable extends React.Component<IPAddrTable.Props, IPAddrTable.State> {
  static columns = [
    {
      name: "ip",
      title: "IP"
    },
    {
      name: "status",
      title: "Status",
      getCellData: (row: IPAddr) => IPAddr.Status[row.status],
    },
    {
      name: "tags",
      title: "Tags",
      getCellData: (row: IPAddr) => <ChipCell tags={row.tags} classes={{}} />
    },
  ];

  constructor(props?: IPAddrTable.Props, context?: any) {
    super(props, context);

    this.state = {
      editOpen: false,
      editNew: false,
      editing: {},

      deleteDialogOpen: false,
      deletingRow: null,
    };
  }

  parseTags = (str: string): model.Tag[] => {
    if (str === "") {
      return [];
    }
    return str.split(",").map((tag) => {
      const splitted = tag.split("=");
      return new model.Tag({
        key: splitted[0],
        value: splitted[1],
      })
    })
  }

  convertTagsStr = (tags: model.ITag[]): string => {
    return tags.map((tag) => `${tag.key}=${tag.value}`).join(",")
  }

  // Unused but required by EditingState
  commitChanges = (added, changed, deleted) => {};

  clickEdit = (addr: IPAddr) => (event) => {
    this.setState({
      editOpen: true,
      editNew: false,
      editing: {
        ip: addr.ip,
        status: addr.status,
        tags: this.convertTagsStr(addr.tags),
      }
    });
  }

  clickNew = (event) => {
    this.setState({
      editOpen: true,
      editNew: true,
      editing: {
        ip: "",
        status: IPAddr.Status.UNKNOWN,
        tags: "",
      }
    })
  }

  clickDelete = (addr: IPAddr) => (event) => {
    this.setState({
      deleteDialogOpen: true,
      deletingRow: [addr],
    })
  }



  clickCreate = (editing) => (event) => {
    this.props.createIP(new protos.model.IPAddr({
      ip: editing['ip'],
      status: editing['statue'],
      tags: this.parseTags(editing['tags']),
    }));
    this.setState({ editOpen: false });
    setTimeout(() => {this.props.refreshIPs()}, 1000);
  }

  clickUpdate = (editing) => (event) => {
    this.props.updateIP(new protos.model.IPAddr({
      ip: editing['ip'],
      status: editing['status'],
      tags: this.parseTags(editing['tags'])
    }));
    this.setState({ editOpen: false });
    setTimeout(() => {this.props.refreshIPs()}, 1000);
  }

  changeEdit = (name) => (event) => {
    const editing = _.clone(this.state.editing)
    editing[name] = event.target.value;
    this.setState({
      editing: editing
    })
  }

  onClickCancel = (event) => {
    this.setState({deleteDialogOpen: false });
  }

  onClickConfirmDelete = (event) => {
    _.map(this.state.deletingRow, (row: IPAddr) => {
      this.props.deactivateIP(new protos.serverpb.DeactivateIPRequest({
        ip: row.ip
      }));
    });
    this.setState({ deleteDialogOpen: false });
    setTimeout(() => {this.props.refreshIPs()}, 1000);
  }

  filter = (row, filter) => {
    if (filter.columnName == 'ip') {
      return row.ip.indexOf(filter.value) >= 0;
    }
    if (filter.columnName == 'status') {
      return IPAddr.Status[row.status].indexOf(_.toUpper(filter.value)) >= 0;
    }
    if (filter.columnName == 'tags') {
      return this.convertTagsStr(row.tags).indexOf(filter.value) >= 0;
    }
  }

  render() {
    const { classes, ips } = this.props;
    const {
      editOpen,
      editNew,
      editing,
      deleteDialogOpen,
      deletingRow
    } = this.state;

    return (
      <div>
        <Grid
          rows={_.isNil(ips) ? [] : ips}
          columns={IPAddrTable.columns}
        >
          <SortingState />
          <FilteringState defaultFilters={[]} />
          <EditingState
            onAddedRowsChange={this.clickNew}
            onCommitChanges={this.commitChanges}
          />
          <PagingState
            defaultCurrentPage={0}
            defaultPageSize={50}
          />

          <LocalSorting />
          <LocalFiltering
            filterFn={this.filter}
          />
          <LocalPaging />

          <TableView />
          <TableHeaderRow allowSorting />

          <TableFilterRow />
          <PagingPanel
            allowedPageSizes={[10,50,100]}
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
        </Grid>

        <CreateDialog
          open={editOpen}
          clickCancel={() => {this.setState({editOpen: false})}}
          isNew={editNew}
          clickCreate={this.clickCreate}
          clickUpdate={this.clickUpdate}
          changeEdit={this.changeEdit}
          editing={editing}
          dialogType={CreateDialogType.IPAddr}
          classes={{}}
        />

        <DeleteDialog
          deleteOpen={deleteDialogOpen}
          deletingRows={deletingRow}
          columns={IPAddrTable.columns}
          clickCancel={this.onClickCancel}
          clickConfirmDelete={this.onClickConfirmDelete}
        />
      </div>
    );
  }
}

const styledIPAddrTable = withStyles(styleSheet, { withTheme: true })(IPAddrTable);

export {
  styledIPAddrTable as IPAddrTable
}
