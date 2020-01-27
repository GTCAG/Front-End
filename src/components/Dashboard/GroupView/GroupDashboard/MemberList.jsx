import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import MemberBubble from "./MemberBubble";

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: "border-box",
    // height: "100%",
    width: "30%",
    marginLeft: 20,
    marginTop: 61,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      width: "100%"
    }
  },
  barRoot: {
    padding: 5,
    backgroundColor: "#363636"
  },

  title: {
    textAlign: "center"
  },
  card: {
    marginBottom: 20,
    width: "100%",
    boxSizing: "border-box"
  },
  eventTitle: {},
  eventDate: {
    color: "#898989",
    paddingLeft: 35,
    borderLeft: "1px solid gray"
  }
}));

const MemberList = ({ members }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <AppBar className={classes.barRoot} position="">
          <Typography variant="h6" className={classes.title}>
            Members
          </Typography>
        </AppBar>
        <List>
          {members.map((member, key) => (
            <MemberBubble member={member} key={key} />
          ))}
        </List>
      </Card>
    </div>
  );
};

export default MemberList;
