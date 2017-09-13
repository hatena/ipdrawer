import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { connect } from "react-redux";
import { AdminUIState } from "../../reducers";

const styleSheet = createStyleSheet('BasicTable', theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

const data = [
  {id: 1, backup_key: 'test db', backup_type: 'full', node: 'node1', hostname: 'localhost', started_at: 'aaa', ended_at: 'bbb', status: 'failed'}
];

interface BackupTableExplicitData {
  classes: any
}

type BackupTableProps = BackupTableExplicitData & RouteComponentProps<void>;

class BackupTable extends React.Component<BackupTableProps, {}> {
  render() {
    const classes = this.props.classes;

    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Backup Key</TableCell>
              <TableCell>Backup Type</TableCell>
              <TableCell>Node Name</TableCell>
              <TableCell>Hostname</TableCell>
              <TableCell>Started At</TableCell>
              <TableCell>Ended At</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>
                    {n.backup_key}
                  </TableCell>
                  <TableCell>
                    {n.backup_type}
                  </TableCell>
                  <TableCell>
                    {n.node}
                  </TableCell>
                  <TableCell>
                    {n.hostname}
                  </TableCell>
                  <TableCell>
                    {n.started_at}
                  </TableCell>
                  <TableCell>
                    {n.ended_at}
                  </TableCell>
                  <TableCell>
                    {n.status}
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

const styledBackupTable = withStyles(styleSheet)(BackupTable);

const backupTableConnected = connect(
  (state: AdminUIState) => {

  },
  {

  },
)(styledBackupTable);

export {
  backupTableConnected as BackupTable
};
