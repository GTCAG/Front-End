import React, { useState } from "react";
import List from "@material-ui/core/List";
import EventAddSongDialog from "./EventAddSongDialog";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import Toolbar from "@material-ui/core/Toolbar";
import ClearIcon from "@material-ui/icons/Clear";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import InfoSnack from "../../FeedbackComponents/InfoSnack";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: "border-box",
    width: "80%"
  },
  songTitle: {
    color: "#555"
  },
  card: {
    marginBottom: 20,
    width: "100%",
    boxSizing: "border-box"
  },
  barRoot: {
    padding: 5,
    backgroundColor: "#37474f"
  },
  title: {
    textAlign: "center"
  },
  nextIcon: {
    marginLeft: 10
  },
  toolbar: {
    justifyContent: "space-between"
  }
}));

const EventSongList = ({ songs, admin }) => {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: "" });
  const classes = useStyles();

  const handleAddSong = () => {
    setAddDialogOpen(true);
  };

  const handleSuccess = () => {
    setSnack({ open: true, message: "Added Song" });
  };

  return (
    <div className={classes.root}>
      <InfoSnack
        message={snack.message}
        open={snack.open}
        onClose={() => setSnack({ ...snack, open: false })}
      />
      <EventAddSongDialog
        open={addDialogOpen}
        handleClose={() => setAddDialogOpen(false)}
        onSuccess={handleSuccess}
      />
      <Card className={classes.card}>
        <AppBar className={classes.barRoot} position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              Songs
            </Typography>
            <Tooltip title="Add Song">
              <IconButton
                aria-label="add song"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleAddSong}
                color="inherit"
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <List className={classes.list}>
          <ListItem>
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.songTitle}
              primary="Example Song"
            />

            <ListItemSecondaryAction>
              {admin ? (
                <Tooltip title="Remove">
                  <IconButton edge="end" aria-label="delete">
                    <ClearIcon />
                  </IconButton>
                </Tooltip>
              ) : null}
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default EventSongList;
