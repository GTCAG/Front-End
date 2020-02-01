import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import dateFormat from "dateformat";

import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20
  },
  cardcontainer: {
    boxSizing: "border-box",
    marginBottom: 20
  },
  eventTitle: {
    marginRight: 5,
    fontSize: 21,
    textAlign: "center"
  },
  eventDate: {
    color: "#898989",
    paddingLeft: 30,
    borderLeft: "1px solid gray"
  }
});

const EventBubble = ({ event }) => {
  const [localDate] = useState(new Date(event.date));
  const classes = useStyles();
  return (
    <Card className={classes.cardcontainer}>
      <CardActionArea className={classes.card}>
        <Typography variant="h5" className={classes.eventTitle}>
          {event.name}
        </Typography>
        <Divider className={classes.divider} orientation="vertical" />

        <Typography variant="h6" className={classes.eventDate}>
          {dateFormat(localDate, "mmmm dS, h:MM TT")}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default EventBubble;
