import * as _ from 'lodash';
import * as React from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormGroup,
  TextField,
  FormControl,
  Button,
  MenuItem,
  Input,
  InputLabel,
  Select
} from 'material-ui';

import { model } from "../../../proto/protos";
import * as protos from '../../../proto/protos';
import IPAddr = model.IPAddr;
import Pool = model.Pool;


const styleSheet: StyleRulesCallback = theme => ({
  dialog: {
    width: 'calc(100% - 16px)',
  },
});


namespace CreateDialog {
  export interface Props {
    open: boolean;
    isNew: boolean;
    clickCancel: any;
    clickCreate: any;
    clickUpdate: any;
    changeEdit: any;
    classes: any;
    editing?: {[key: string]: any};
    dialogType: DialogType;
    networks?: protos.model.Network[];
  }

  export interface State {

  }
}

class CreateDialog extends React.Component<CreateDialog.Props, CreateDialog.State> {

  constructor(props?: CreateDialog.Props, context?: any) {
    super(props, context);
  }

  ipaddrFormGroup() {
    const {
      classes,
      isNew,
      editing,
      changeEdit
    } = this.props;

    return (
      <FormGroup>
        <FormControl>
          <TextField
            id="ip"
            label="IP"
            value={editing['ip']}
            margin="normal"
            onChange={changeEdit('ip')}
            disabled={!isNew}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="status-select">Status</InputLabel>
          <Select
            value={editing['status']}
            onChange={changeEdit('status')}
            input={<Input id="status-select" />}
          >
            <MenuItem value={IPAddr.Status.ACTIVE}>ACTIVE</MenuItem>
            <MenuItem value={IPAddr.Status.RESERVED}>RESERVED</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <TextField
            id="tags"
            label="Tags"
            value={editing['tags']}
            margin="normal"
            onChange={changeEdit('tags')}
          />
        </FormControl>
      </FormGroup>
    );
  }

  poolFormGroup() {
    const { classes, isNew, editing, changeEdit, networks } = this.props;

    return (
      <FormGroup>
        {isNew ?
          <FormControl>
            <InputLabel htmlFor="network-select">Network</InputLabel>
            <Select
              value={editing['network']}
              onChange={changeEdit('network')}
              input={<Input id="network-select" />}
            >
              {_.map(networks, (network, i) => {
                return <MenuItem value={network.prefix} key={i}>{network.prefix} ({_.find(network.tags, (tag) => tag.key == 'Name').value})</MenuItem>
              })}
            </Select>
          </FormControl>
          : null}
        <FormControl>
          <TextField
            id="start"
            label="start"
            value={editing['start']}
            margin="normal"
            onChange={changeEdit('start')}
            disabled={!isNew}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="end"
            label="end"
            value={editing['end']}
            margin="normal"
            onChange={changeEdit('end')}
            disabled={!isNew}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="status-select">Status</InputLabel>
          <Select
            value={editing['status']}
            onChange={changeEdit('status')}
            input={<Input id="status-select" />}
          >
            <MenuItem value={Pool.Status.AVAILABLE}>AVAILABLE</MenuItem>
            <MenuItem value={Pool.Status.RESERVED}>RESERVED</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <TextField
            id="tags"
            label="Tags"
            value={editing['tags']}
            margin="normal"
            onChange={changeEdit('tags')}
          />
        </FormControl>
      </FormGroup>
    )
  }

  render() {
    const {
      classes,
      open,
      isNew,
      clickCancel,
      clickCreate,
      clickUpdate,
      editing,
      dialogType,
    } = this.props;

    return <Dialog
      ignoreBackdropClick
      open={open}
      onRequestClose={clickCancel}
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle>{isNew ? "New" : "Edit"}</DialogTitle>
      <DialogContent>
        { (() => {
          if (dialogType == CreateDialog.DialogType.IPAddr) {
              return this.ipaddrFormGroup();
          } else if (dialogType == CreateDialog.DialogType.Pool) {
              return this.poolFormGroup();
          }
        })()}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={clickCancel}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          color="accent"
          onClick={isNew ? clickCreate(editing) : clickUpdate(editing)}
        >
          {isNew ? "Create" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  }
}

module CreateDialog {
  export enum DialogType {
    IPAddr = 1,
    Pool
  }
}

const styledCreateDialog = withStyles(styleSheet, { withTheme: true })(CreateDialog);

export {
  styledCreateDialog as CreateDialog
}
