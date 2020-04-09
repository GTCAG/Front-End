import React, { useState, useEffect } from "react";
import { axiosAuth } from "../../axiosWithAuth";
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
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "35px",
    width: "80%",
    minHeight: "500px",
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: "#eee",
    maxHeight: "450px",
    overflowY: "auto",
  },
  title: {
    marginBottom: 10,
  },
  searchBar: {
    margin: "20px 0px ",
  },
  loadingContainer: {
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function generateList(songList, dense) {
  return (
    <List dense={dense}>
      {songList.map((song, index) => (
        <ListItem key={index} button onClick={() => console.log("Test")}>
          <ListItemAvatar>
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
          </ListItemAvatar>
          <ListItemText primary={song.title} />
          <ArrowForwardIcon />
        </ListItem>
      ))}
    </List>
  );
}

const SongListView = () => {
  const classes = useStyles();
  const [songList, setSongList] = useState([]);
  const [filteredSongList, setFilteredSongList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const dense = false;

  useEffect(() => {
    setLoading(true);
    axiosAuth()
      .get("/songs")
      .then((res) => {
        setSongList(res.data);
        setFilteredSongList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "Error getting list of songs for song list view component: ",
          err
        );
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // If no search term, set to full song list.
    if (searchTerm.length === 0) {
      setFilteredSongList(songList);
    } else {
      // Filter the list by search term.
      const filtered = songList.filter((song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSongList(filtered);
    }
  }, [searchTerm]);

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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <div className={classes.loadingContainer}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.demo}>
          {generateList(filteredSongList, dense)}
        </div>
      )}
    </Paper>
  );
};

export default SongListView;
