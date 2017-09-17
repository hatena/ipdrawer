import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import ListIcon from 'material-ui-icons/List';

namespace Header {
  export interface Props {
    classes: any
  }

  export interface State {
    open: boolean
  }
}

const styleSheet = {
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
};

class Header extends React.Component<Header.Props, Header.State> {

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
    this.state = {
      open: false,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({open: true})
  }

  handleDrawerClose() {
    this.setState({open: false})
  }

  render() {
    const classes = this.props.classes;

    const sideList = (
      <div>
        <List className={classes.list} disablePadding>
          <Link to="/ui/network">
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Network" />
            </ListItem>
          </Link>
          <Link to="/ui/pool">
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Pool" />
            </ListItem>
          </Link>
          <Link to="/ui/ip">
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="IPAddr" />
            </ListItem>
          </Link>
          <Link to="/ui/temp_reserved_ip">
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Temporary Reserved IPAddr" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon onClick={this.handleDrawerOpen} />
            </IconButton>
            <Typography type="title" color="inherit" className="initial">
              IPDrawer UI
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.open}
          onRequestClose={this.handleDrawerClose}
          onClick={this.handleDrawerClose}
          type="temporary"
        >
          {sideList}
        </Drawer>
      </div>
    );
  }
}

const styledHeader = withStyles(styleSheet)(Header);

export {
  styledHeader as Header
};
