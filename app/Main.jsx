import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from "@material-ui/core/Icon";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import ContentArea from "./ContentArea.jsx";
const drawerWidth = 385;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    minHeight: 500,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  mainRoot:{
    flexGrow: 1,
    flexDirection: "column",
    zIndex: 1,
    minHeight: 500,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    paddingRight: 16,
    paddingLeft: 24,
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
        marginLeft: drawerWidth,
      },
  },
  appBar: {
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  flex: {
      flex : 1
  },
  placeHolder:{
      minHeight:80
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mobileOpen : false
        }
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    }
    handleDrawerToggle() {
        this.setState({
            mobileOpen : !this.state.mobileOpen
        });
    }
    handleLinkClick(address){
        window.open(address);
    }

    render(){
        const { classes, theme } = this.props;
        const drawer = <div><About /><Divider /><Contact /></div>
        return(
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerToggle}
                        className={classes.navIconHide}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex} noWrap>
                        Text Here
                        </Typography>
                        <IconButton onClick={() => this.handleLinkClick("https://github.com/jebadirad")}>
                            <Icon className="fab fa-github"></Icon>
                        </IconButton>
                        <IconButton>
                            <Icon className="fab fa-linkedin-in" onClick={() => this.handleLinkClick("https://www.linkedin.com/in/jondavid-ebadirad")}></Icon> 
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                    {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                <Drawer
                    variant="permanent"
                    open
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                {drawer}
                </Drawer>
                </Hidden>
                <main className={classes.mainRoot}>
                    <Toolbar className={classes.placeHolder} />
                    <ContentArea />
                </main>
            </div>
            );
    }
}

export default withStyles(styles)(Main);