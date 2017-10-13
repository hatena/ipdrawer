import * as React from 'react';
import {
  Button, TableCell,
} from 'material-ui';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';


const styleSheet: StyleRulesCallback = theme => ({
  button: {
    padding: theme.spacing.unit,
    minWidth: 40,
  }, 
});

namespace TableEditCell {
  export interface Props {
    onClickEdit: any;
    onClickDelete: any;
    classes: any;
  }

  export interface State {
  }
}

class TableEditCell extends React.Component<TableEditCell.Props, TableEditCell.State> {
  render() {
    const {
      onClickEdit,
      onClickDelete,
      classes,
    } = this.props;

    return (
      <TableCell>
        <span>
          <Button
            color="primary"
            onClick={onClickEdit}
            className={classes.button}
          >
            Edit
          </Button>
        </span>
        <span>
          <Button
            color="primary"
            onClick={onClickDelete}
            className={classes.button}
          >
            Delete
          </Button>
        </span>
      </TableCell>
    );
  }
}

const styledTableEditCell = withStyles(styleSheet, { withTheme: true })(TableEditCell);

export {
  styledTableEditCell as TableEditCell
}
