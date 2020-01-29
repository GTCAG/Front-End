import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/userActions";
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

import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
  const [currentTitle, setCurrentTitle] = useState("Dashboard");
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        break;
      case "/dashboard/settings":
        setCurrentTitle("Settings");
        break;
      case "/dashboard/songs":
        setCurrentTitle("Songs");
        break;
      case "/dashboard/groups":
        setCurrentTitle("Groups");
        break;
      default:
        setCurrentTitle("Dashboard");
        break;
    }
  }, []);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  const handleMenuNavClick = (dest, title) => {
    history.push(dest);
    setCurrentTitle(title);
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
            {currentTitle}
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
            <ListItem
              button
              onClick={() => handleMenuNavClick("/dashboard", "Dashboard")}
            >
              <ListItemIcon>
                <DashboardRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                secondary="View your dashboard"
              />
            </ListItem>

            <ListItem
              button
              onClick={() => handleMenuNavClick("/dashboard/groups", "Groups")}
            >
              <ListItemIcon>
                <GroupRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItem>
            <ListItem
              button
              onClick={() =>
                handleMenuNavClick("/dashboard/songs", "Song List")
              }
            >
              <ListItemIcon>
                <LibraryMusicRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Song Library" />
            </ListItem>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <ArrowBackIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() =>
                handleMenuNavClick("/dashboard/settings", "Settings")
              }
            >
              <ListItemIcon>
                <SettingsRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>

            <ListItem button onClick={() => handleLogout()}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default GroupAppBar;
