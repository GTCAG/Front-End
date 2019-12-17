import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "35px",
    width: "80%"
  },
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: "#eee"
  },
  title: {
    marginBottom: 10
  },
  searchBar: {
    margin: "20px 0px "
  }
}));

const initialSongList = [
  {
    name: "Test"
  },
  {
    name: "Test2"
  },
  {
    name: "Test"
  },
  {
    name: "Test"
  },
  {
    name: "Test5"
  },
  {
    name: "Test"
  },
  {
    name: "Test"
  }
];
const SongListView = () => {
  const classes = useStyles();
  const [songList, setSongList] = useState(initialSongList);
  const dense = false;

  return (
    <Paper className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Song Library
      </Typography>
      <TextField
        className={classes.searchBar}
        fullWidth
        id="outlined-basic"
        label="Search"
        placeholder="Search Song Library"
        variant="outlined"
      />

      <div className={classes.demo}>
        <List dense={dense}>
          {songList.map(song => (
            <ListItem button onClick={() => console.log("Test")}>
              <ListItemAvatar>
                <ListItemIcon>
                  <MusicNoteIcon />
                </ListItemIcon>
              </ListItemAvatar>
              <ListItemText primary={song.name} />
              <ArrowForwardIcon />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
};

export default SongListView;
