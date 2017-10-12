import * as React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText,
  DialogActions, Button,
} from 'material-ui';
import {
  Grid, TableView, TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

namespace DeleteDialog {
  export interface Props {
    deleteOpen: boolean;
    deletingRows: any[];
    columns: any[];
    clickCancel: React.EventHandler<any>;
    clickConfirmDelete: React.EventHandler<any>;
  }

  export interface State {

  }
}

export class DeleteDialog extends React.Component<DeleteDialog.Props, DeleteDialog.State> {
  render() {
    const { deleteOpen, deletingRows,
      columns, clickConfirmDelete, clickCancel } = this.props;

    return (
      <Dialog
        ignoreBackdropClick
        open={deleteOpen}
        onRequestClose={clickCancel}
      >
        <DialogTitle>Delete IP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to delete the following items?
          </DialogContentText>
          <Grid
            rows={deletingRows}
            columns={columns}
          >
            <TableView />
            <TableHeaderRow />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={clickCancel} color="primary">Cancel</Button>
          <Button onClick={clickConfirmDelete} color="accent">Delete</Button>
        </DialogActions>
      </Dialog>
    )
  }
}