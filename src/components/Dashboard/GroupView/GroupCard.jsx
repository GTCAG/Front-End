import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles({
  cardAction: {
    minWidth: 275,
    height: 175
  },
  card: {
    minWidth: 275,
    height: 175
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10
  },
  pos: {
    marginBottom: 12
  },
  splitContainer: {
    display: "flex",
    width: "100%",
    height: "100%"
  },
  splitInfoContainer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    height: "100%"
  }
});

const GroupCard = ({ group }) => {
  const classes = useStyles();
  return (
    <CardActionArea className={classes.cardAction}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} variant="h5" component="h2">
            {group.name}
          </Typography>

          <div className={classes.splitContainer}>
            <Typography className={classes.splitInfoContainer} component="p">
              Members: {group.members.length}
            </Typography>
            <Typography className={classes.splitInfoContainer} component="p">
              Events: {group.events.length}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default GroupCard;
