import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  cardAction: {
    minWidth: 275,
    height: 140
  },
  card: {
    minWidth: 275,
    height: 140
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "#333",

    marginTop: 10
  },
  pos: {
    marginBottom: 12
  },
  splitContainer: {
    display: "flex",
    width: "100%",
    marginTop: 30
  },
  splitInfoContainer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#607d8b"
  },
  cardContent: {
    height: "100%"
  },

  bottomDisplay: {
    color: "#37474f"
  },
  icon: {
    marginRight: 5
  }
});

const GroupCard = ({ group }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/dashboard/groups/${group._id}`);
  };

  return (
    <CardActionArea onClick={handleClick} className={classes.cardAction}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} variant="h5" component="h2">
            {group.name}
          </Typography>

          <div className={classes.splitContainer}>
            <Typography className={classes.splitInfoContainer} component="p">
              <PersonIcon className={classes.icon} />
              {group.members.length}
            </Typography>
            <Typography className={classes.splitInfoContainer} component="p">
              <EventNoteIcon className={classes.icon} />
              {group.events.length}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default GroupCard;
