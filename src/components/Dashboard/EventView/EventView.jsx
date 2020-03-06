import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import dateFormat from "dateformat";
import { useSelector } from "react-redux";
import InfoSnack from "../../FeedbackComponents/InfoSnack";

import { axiosAuth } from "../../../axiosWithAuth";
import EventSongList from "./EventSongList";
import BackdropWait from "../../FeedbackComponents/BackdropWait";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 25,
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      padding: 10
    },
    maxWidth: 1200
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  eventName: {
    margin: 0,
    padding: 0,
    fontSize: "35px"
  },
  eventDate: {
    color: "#898989"
  },
  cardContainer: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    padding: 20
  },
  headerTitle: {
    margin: 0,
    padding: 0,
    marginTop: 25
  },
  songsContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 40
  },
  addButton: {
    marginBottom: 25,
    width: "80%"
  }
}));

const EventView = () => {
  const [snack, setSnack] = useState({ open: false, message: "" });
  const [apiWait, setApiWait] = useState(false);
  const [event, setEvent] = useState({
    date: Date.now(),
    name: "",
    songs: [],
    roles: []
  });
  const [associatedGroup, setAssociatedGroup] = useState({
    admins: []
  });
  const [admin, setAdmin] = useState(false);
  const userId = useSelector(state => state.userId);
  const classes = useStyles();
  const { eventId } = useParams();

  useEffect(() => {
    setApiWait(true);
    // set the event from backend info.
    axiosAuth()
      .get(`/events/${eventId}`)
      .then(res => {
        console.log("Event view res:", res);
        setEvent(res.data);
        setApiWait(false);
      })
      .catch(err => {
        console.log("Err: ", err);
      });
  }, [eventId]);

  useEffect(() => {
    if (event.associatedGroup)
      axiosAuth()
        .get(`/groups/${event.associatedGroup}`)
        .then(ares => {
          setAssociatedGroup(ares.data);
        })
        .catch(err => {
          console.log("Err: ", err);
        });
  }, [event]);

  useEffect(() => {
    if (associatedGroup && associatedGroup.admins && userId) {
      const isAdmin = associatedGroup.admins.some(admin => admin._id == userId);
      setAdmin(isAdmin);
    }
  }, [userId, associatedGroup]);

  const setSongs = songs => {
    setEvent({ ...event, songs });
  };

  const handleSuccess = (songId, setLoading, setDialogOpen) => {
    axiosAuth()
      .post(`/events/${eventId}/song`, { songId })
      .then(res => {
        setDialogOpen(false);
        setLoading(false);
        setSnack({ open: true, message: "Added Song" });
        setEvent({ ...event, songs: res.data.songs });
      })
      .catch(err => {
        console.log("Error: ", console.log(err));
        setSnack({ open: true, message: "There was an error adding the song" });
      });
  };

  return (
    <div className={classes.root}>
      <BackdropWait open={apiWait} />
      <InfoSnack
        message={snack.message}
        open={snack.open}
        onClose={() => setSnack({ ...snack, open: false })}
      />
      <div className={classes.cardContainer}>
        <div className={classes.titleContainer}>
          <h2 className={classes.eventName}>{event.name}</h2>
          <Typography variant="h6" className={classes.eventDate}>
            {dateFormat(event.date, "mmmm dS, h:MM TT")}
          </Typography>
        </div>
        <div className={classes.songsContainer}>
          <EventSongList
            songs={event.songs}
            setSongs={setSongs}
            onSuccess={handleSuccess}
            admin={admin}
            eventId={eventId}
          />
        </div>
      </div>
    </div>
  );
};

export default EventView;
