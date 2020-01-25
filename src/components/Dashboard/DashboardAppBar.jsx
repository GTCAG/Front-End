import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
    // fontFamily: "'PT Serif Caption', serif"
  },
  appBar: {
    backgroundColor: "#363636"
  }
}));

const GroupAppBar = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={handleMenuClose}>
        <div
          className={classes.list}
          role="presentation"
          onClick={() => setMenuOpen(false)}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                secondary="View your dashboard"
              />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <GroupRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LibraryMusicRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Song Library" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default GroupAppBar;
