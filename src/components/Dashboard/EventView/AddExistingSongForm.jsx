import React, { useState } from "react";
import InfoSnack from "../../FeedbackComponents/InfoSnack";
import { useParams } from "react-router-dom";
import { axiosAuth } from "../../../axiosWithAuth";
import {
  fade,
  Card,
  makeStyles,
  InputBase,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  CircularProgress
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import AddIcon from "@material-ui/icons/Add";
import { useEffect } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "500px",
    [theme.breakpoints.down("xs")]: {
      width: "260px"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  searchContainer: {
    border: "1px solid rgb(0,0,0,0.5)",
    borderRadius: "5px",
    margin: "15px 15px"
  },
  card: {
    width: "100%"
  },
  spinnerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    overflow: "auto"
  }
}));

const AddExistingSongForm = ({ setSongs, songs }) => {
  const classes = useStyles();
  const { eventId } = useParams();
  const [apiWait, setApiWait] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    message: ""
  });
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    setApiWait(true);
    axiosAuth()
      .get("/songs")
      .then(res => {
        setSongList(res.data);
        setFilteredList(res.data);
        setApiWait(false);
      })
      .catch(err => {
        console.log("Error: ", err);
        setApiWait(false);
      });
  }, []);

  useEffect(() => {
    const filtered = songList.filter(song =>
      song.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredList(filtered);
  }, [searchValue]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleAdd = song => {
    const filteredList = songList.filter(s => s._id !== song._id);
    setSongList(filteredList);
    axiosAuth()
      .post(`/events/${eventId}/song`, { songId: song._id })
      .then(res => {
        setSongs([...songs, song]);
        setSnack({
          open: true,
          message: `Added '${song.title}' to the event!`
        });
      })
      .catch(err => {
        console.log("Error: ", console.log(err));
        setSnack({
          open: true,
          message: `There was an error adding song '${song.title}'`
        });
      });
  };

  if (apiWait)
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  return (
    <div className={classes.root}>
      <InfoSnack
        open={snack.open}
        message={snack.message}
        onClose={() => setSnack({ open: false, message: "" })}
      />
      <Card className={classes.card}>
        <div className={classes.searchContainer}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              value={searchValue}
            />
          </div>
        </div>

        <List className={classes.list} dense={false}>
          {filteredList.map((song, index) => (
            <ListItem key={index}>
              <ListItemText>{song.title}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="add"
                  onClick={() => handleAdd(song)}
                >
                  <AddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default AddExistingSongForm;
