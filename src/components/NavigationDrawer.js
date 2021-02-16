import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    },
    drawer: {
    width: drawerWidth,
    flexShrink: 0,
    },
    drawerPaper: {
    width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
    logo: {
    margin: 'auto',
    },
});

  
class NavigationDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          currentPage: "Page 1",
          
        };  
        
    }

    render() {

        const { classes } = this.props;
        const navigationItems = [
            {
              text: "Page 1",
              icon: <MailIcon/>,
              path: '/',
              onClick: () => {
                  this.setState(state => ({
                    currentPage: "Page 1"
                  }));
              },
            },
            {
              text: "Page 2",
              icon: <InboxIcon/>,
              path: '/page2',
              onClick: () => {
                this.setState(state => ({
                  currentPage: "Page 2"
                }));
            },
            },
            {
              text: "Page 3",
              icon: <InboxIcon/>,
              path: '/page3',
              onClick: () => {
                this.setState(state => ({
                  currentPage: "Page 3"
                }));
            },
            },
        ];

        return (

            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                    <Typography variant="h6" noWrap>
                        {this.state.currentPage}
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar}>
                    <Typography variant="h3" align='center'>
                        App
                    </Typography>
                    </div>
                    <Divider />
                    <List>
                    {navigationItems.map(function(item, index) {
                        const { text, icon, path, onClick} = item;
                        return (
                        <ListItem onClick={onClick}button key={text} component={Link} to={path}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText>{text}</ListItemText>
                        </ListItem>
                        );
                    })}
                    </List>
                </Drawer>
                <main className={classes.content} >
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path="/page2">
                            <Typography variant="h6">
                                This is page 2
                            </Typography>
                        </Route>
                        <Route path="/page3">
                            <Typography variant="h6">
                                This is page 3
                            </Typography>
                        </Route>
                        <Route path="/">
                            <Typography variant="h6">
                                This is page 1
                            </Typography>
                        </Route>
                    </Switch>
                </main>
            </div>
        );

    }

  }

  export default withStyles(styles)(NavigationDrawer)