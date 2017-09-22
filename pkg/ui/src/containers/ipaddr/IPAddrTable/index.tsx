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
import { refreshIPs, activateIP, deactivateIP, updateIP } from '../../../reducers/apiReducers';
import * as protos from '../../../proto/protos';


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
    activateIP: typeof activateIP;
    deactivateIP: typeof deactivateIP;
    updateIP: typeof updateIP;
  }

  export interface State {
    editingRows: any;
    changedRows: any;
    addedRows: any;
    editOpen: boolean;
    editNew: boolean;
    editingIP: string;
    editingStatus: IPAddr.Status;
    editingTags: string;
    deleteOpen: boolean;
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
      getCellData: (row: IPAddr) => (
        <div>{_.map(row.tags, (tag, i) =>
          <Chip
            key={i}
            label={tag.key + ": " + tag.value}
          />)}
        </div>
      )
    },
  ];

  constructor(props?: IPAddrTable.Props, context?: any) {
    super(props, context);

    this.state = {
      editingRows: [],
      changedRows: {},
      addedRows: [],

      editOpen: false,
      editNew: false,
      editingIP: "",
      editingStatus: IPAddr.Status.UNKNOWN,
      editingTags: "",

      deleteOpen: false,
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

  commitChanges = (added, changed, deleted) => {
    console.log(added, changed, deleted);
  };

  changeAddedRows = (addedRows) => {
    this.clickNew(null);
  }

  clickEdit = (addr: IPAddr) => (event) => {
    this.setState({
      editOpen: true,
      editNew: false,
      editingIP: addr.ip,
      editingStatus: addr.status,
      editingTags: this.convertTagsStr(addr.tags),
    });
  }

  clickNew = (event) => {
    this.setState({
      editOpen: true,
      editNew: true,
      editingIP: "",
      editingStatus: IPAddr.Status.UNKNOWN,
      editingTags: "",
    })
  }

  changeEdit = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  clickDelete = (addr: IPAddr) => (event) => {
    this.setState({
      deleteOpen: true,
      deletingRow: [addr],
    })
  }

  clickConfirmDelete = (event) => {
    this.props.deactivateIP(new protos.serverpb.DeactivateIPRequest({
      ip: this.state.deletingRow[0].ip
    }));
    this.setState({ deleteOpen: false });
    setTimeout(() => {this.props.refreshIPs()}, 1000);
  }

  clickActivate = (event) => {
    this.props.activateIP(new protos.serverpb.ActivateIPRequest({
      ip: this.state.editingIP,
      tags: this.parseTags(this.state.editingTags),
    }));
    this.setState({ editOpen: false });
    setTimeout(() => {this.props.refreshIPs()}, 1000);
  }

  clickUpdate = (event) => {
    this.props.updateIP(new protos.model.IPAddr({
      ip: this.state.editingIP,
      status: this.state.editingStatus,
      tags: this.parseTags(this.state.editingTags)
    }));
    this.setState({ editOpen: false });
    setTimeout(() => {this.props.refreshIPs()}, 1000);
  }

  render() {
    const { classes, ips } = this.props;
    const { editingRows, changedRows, addedRows } = this.state;

    return (
      <div>
        <Grid
          rows={_.isNil(ips) ? [] : ips}
          columns={IPAddrTable.columns}
        >
          <SortingState />
          <FilteringState defaultFilters={[]} />
          <EditingState
            addedRows={addedRows}
            onAddedRowsChange={this.changeAddedRows}
            onCommitChanges={this.commitChanges}
          />

          <LocalSorting />
          <LocalFiltering />

          <TableView />
          <TableHeaderRow allowSorting />

          <TableFilterRow />

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

        <Dialog
          ignoreBackdropClick
          open={this.state.editOpen}
          onRequestClose={() => {this.setState({editOpen: false})}}
          classes={{ paper: classes.dialog }}
        >
          <DialogTitle>{this.state.editNew ? "New" : "Edit"}</DialogTitle>
          <DialogContent>
            <FormGroup>
              <FormControl
                className={classes.formControl}
              >
                <TextField
                  id="ip"
                  label="IP"
                  value={this.state.editingIP}
                  margin="normal"
                  onChange={this.changeEdit('editingIP')}
                  disabled={!this.state.editNew}
                />
              </FormControl>
              <FormControl disabled={this.state.editNew}>
                <InputLabel htmlFor="status-select">Status</InputLabel>
                <Select
                  value={this.state.editingStatus}
                  onChange={this.changeEdit('editingStatus')}
                  input={<Input id="status-select" />}
                >
                  <MenuItem value={IPAddr.Status.ACTIVE}>ACTIVE</MenuItem>
                  <MenuItem value={IPAddr.Status.TEMPORARY_RESERVED}>TEMPORARY RESERVED</MenuItem>
                  <MenuItem value={IPAddr.Status.RESERVED}>RESERVED</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <TextField
                  id="tags"
                  label="Tags"
                  value={this.state.editingTags}
                  margin="normal"
                  onChange={this.changeEdit('editingTags')}
                />
              </FormControl>
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {this.setState({editOpen: false})}}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              color="accent"
              onClick={this.state.editNew ? this.clickActivate : this.clickUpdate}
            >
              {this.state.editNew ? "Activate" : "Update"}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          ignoreBackdropClick
          open={this.state.deleteOpen}
          onRequestClose={() => {this.setState({deleteOpen: false})}}
        >
          <DialogTitle>Delete IP</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure to delete the following IP?
            </DialogContentText>
            <Grid
              rows={this.state.deletingRow}
              columns={IPAddrTable.columns}
            >
              <TableView />
              <TableHeaderRow />
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {this.setState({deleteOpen: false})}} color="primary">Cancel</Button>
            <Button onClick={this.clickConfirmDelete} color="accent">Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const styledIPAddrTable = withStyles(styleSheet, { withTheme: true })(IPAddrTable);

export {
  styledIPAddrTable as IPAddrTable
}
