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
import { axiosAuth } from "../../../axiosWithAuth";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";

import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    boxSizing: "border-box",
    width: "80%"
  },
  songTitle: {
    color: "#555"
  },
  list: {
    minHeight: 100
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
  },
  clearIcon: {
    marginRight: 13
  }
}));

const EventSongList = ({ songs, admin, onSuccess, eventId, setSongs }) => {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const classes = useStyles();

  const handleAddSong = () => {
    setAddDialogOpen(true);
  };

  const handleRemoveSong = songId => {
    const filteredSongs = songs.filter(song => song._id != songId);
    setSongs(filteredSongs);
    const body = { songId };
    console.log("Delete body: ", body);
    axiosAuth()
      .delete(`/events/${eventId}/song`, { data: body })
      .then(res => {
        console.log("Remove res: ", res);
      })
      .catch(err => {
        console.log("There was an error removing a song", err.response);
      });
  };

  const eventOnSuccess = (songId, setLoading) => {
    onSuccess(songId, setLoading, setAddDialogOpen);
  };
  return (
    <div className={classes.root}>
      <EventAddSongDialog
        open={addDialogOpen}
        handleClose={() => setAddDialogOpen(false)}
        onSuccess={eventOnSuccess}
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
          {songs.map((song, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <MusicNoteIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.songTitle}
                primary={song.title}
              />
              <ListItemSecondaryAction>
                {admin ? (
                  <Tooltip title="Remove">
                    <IconButton
                      className={classes.clearIcon}
                      edge="end"
                      onClick={() => handleRemoveSong(song._id)}
                      aria-label="remove"
                    >
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                ) : null}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default EventSongList;
