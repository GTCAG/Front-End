import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: 30,
    marginBottom: 20
  },
  eventTitle: {},
  eventDate: {
    color: "#898989",
    paddingLeft: 35,
    borderLeft: "1px solid gray"
  }
});

const EventBubble = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h5" className={classes.eventTitle}>
        Event Title
      </Typography>
      <Divider className={classes.divider} orientation="vertical" />

      <Typography variant="h6" className={classes.eventDate}>
        January 15, 6:30PM
      </Typography>
    </Card>
  );
};

export default EventBubble;
