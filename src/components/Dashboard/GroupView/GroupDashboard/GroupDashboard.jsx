import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { axiosAuth } from "../../../../axiosWithAuth";
import EventBubble from "./EventBubble";
import { Button } from "@material-ui/core";
import MemberList from "./MemberList";

const initialGroupState = {
  admins: [],
  events: [],
  _id: 0,
  name: "",
  members: []
};

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
  eventList: {
    width: "75%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  infoContainer: {
    display: "flex",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  toolbar: {
    display: "flex",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 25,
    borderBottom: "1px solid #ddd"
  },
  groupName: {
    margin: 0,
    padding: 0
  },
  joinCode: {
    margin: 0,
    color: "#777",
    fontFamily: "Roboto"
  }
}));

const GroupDashboard = () => {
  //Hooks
  const params = useParams();
  const [group, setGroup] = useState(initialGroupState);
  const groupId = params.groupId;

  const classes = useStyles();

  //Fetch group from id
  useEffect(() => {
    axiosAuth()
      .get(`/groups/${groupId}`)
      .then(res => {
        console.log("GroupDashboard response: ", res);
        setGroup(res.data);
      })
      .catch(err => {
        console.log("err: ", err.response);
      });
  }, []);

  console.log("group: ", group);

  const handleCreateEvent = () => {
    console.log("Clicked");
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <div className={classes.titleContainer}>
          <h1 className={classes.groupName}>{group.name}</h1>
          <p className={classes.joinCode}>Join Code: {group.code}</p>
        </div>

        <Button
          color="primary"
          className={classes.createEventButton}
          variant="contained"
          onClick={handleCreateEvent}
        >
          Create New Event
        </Button>
      </div>

      <div className={classes.infoContainer}>
        <div className={classes.eventList}>
          <h3>Events</h3>

          <EventBubble />
          <EventBubble />
          <EventBubble />
          <EventBubble />
          <EventBubble />
          <EventBubble />
        </div>

        <MemberList members={group.members} />
      </div>
    </div>
  );
};

export default GroupDashboard;
