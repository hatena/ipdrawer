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
import IPAddr = model.IPAddr;


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

  render() {
    const {
      classes,
      open,
      isNew,
      clickCancel,
      clickCreate,
      clickUpdate,
      editing
    } = this.props;

    return <Dialog
      ignoreBackdropClick
      open={open}
      onRequestClose={clickCancel}
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle>{isNew ? "New" : "Edit"}</DialogTitle>
      <DialogContent>
        {this.ipaddrFormGroup()}
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

const styledCreateDialog = withStyles(styleSheet, { withTheme: true })(CreateDialog);

export {
  styledCreateDialog as CreateDialog
}
