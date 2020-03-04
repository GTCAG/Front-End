import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import dateFormat from "dateformat";

import { axiosAuth } from "../../../axiosWithAuth";
import EventSongList from "./EventSongList";

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
  }
}));

const EventView = () => {
  const [event, setEvent] = useState({
    date: Date.now(),
    name: ""
  });
  const classes = useStyles();
  const { eventId } = useParams();

  useEffect(() => {
    // set the event from backend info.
    axiosAuth()
      .get(`/events/${eventId}`)
      .then(res => {
        console.log("Event view res:", res);
        setEvent(res.data);
      })
      .catch(err => {
        console.log("Err: ", err);
      });
  }, [eventId]);
  return (
    <div className={classes.root}>
      <div className={classes.cardContainer}>
        <div className={classes.titleContainer}>
          <h2 className={classes.eventName}>{event.name}</h2>
          <Typography variant="h6" className={classes.eventDate}>
            {dateFormat(event.date, "mmmm dS, h:MM TT")}
          </Typography>
        </div>
        <div className={classes.songsContainer}>
          <EventSongList admin={false} />
        </div>
      </div>
    </div>
  );
};

export default EventView;
