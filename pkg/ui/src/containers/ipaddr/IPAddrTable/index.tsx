import * as React from "react";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Chip from 'material-ui/Chip';

import * as IPAddrActions from '../../../actions/ipaddr';
import { model } from "../../../proto/protos";
import IPAddr = model.IPAddr;

const styleSheet = createStyleSheet('BasicTable', theme => ({
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
}));

namespace IPAddrTable {
  export interface Props {
    ips: IPAddr[]
    fetchIPAction: any
    classes: any
  }

  export interface State {

  }
}

class IPAddrTable extends React.Component<IPAddrTable.Props, IPAddrTable.State> {
  componentWillMount() {
    this.props.fetchIPAction();
  }

  render() {
    const { classes, ips } = this.props;

    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>IP</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ips.map(ip => {
              return (
                <TableRow key={ip.ip}>
                  <TableCell>
                    {ip.ip}
                  </TableCell>
                  <TableCell>
                    {ip.status}
                  </TableCell>
                  <TableCell className={classes.chip_row}>
                    {ip.tags.map((tag, i) => {
                      return (
                        <Chip
                          className={classes.chip}
                          label={tag.key + ": " + tag.value}
                          key={i}
                        />
                      )
                    })}
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

const styledIPAddrTable = withStyles(styleSheet)(IPAddrTable);

export {
  styledIPAddrTable as IPAddrTable
}
