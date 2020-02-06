import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { axiosAuth } from "../../../axiosWithAuth";

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
    justifyContent: "space-between",
    alignItems: "center"
  },
  eventName: {
    margin: 0,
    padding: 0
  },
  eventDate: {
    color: "#898989",
    paddingLeft: 30,
    borderLeft: "1px solid gray"
  },
  cardContainer: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    padding: 20
  }
}));

const EventView = () => {
  const [event, setEvent] = useState({});
  const classes = useStyles();
  const { eventId } = useParams();

  useEffect(() => {
    // set the event from backend info.
    axiosAuth()
      .get(`/events/${eventId}`)
      .then(res => {
        console.log("Event view res:", res);
      })
      .catch(err => {
        console.log("Err: ", err);
      });
  }, [eventId]);
  return (
    <div className={classes.root}>
      <div className={classes.cardContainer}>
        <div className={classes.titleContainer}>
          <h2 className={classes.eventName}>Event Title</h2>
          <Typography variant="h6" className={classes.eventDate}>
            {/* {dateFormat(localDate, "mmmm dS, h:MM TT")} */}
            Event Date
          </Typography>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EventView;
