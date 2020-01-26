import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { axiosAuth } from "../../../../axiosWithAuth";
import EventBubble from "./EventBubble";

const initialGroupState = {
  admins: [],
  events: [],
  _id: 0,
  name: "",
  members: []
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  eventList: {
    margin: 50
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
  return (
    <div className={classes.root}>
      <h2>Join Code: {group.code}</h2>
      <div className={classes.eventList}>
        <h3>Events</h3>

        <EventBubble />
        <EventBubble />
        <EventBubble />
        <EventBubble />
        <EventBubble />
        <EventBubble />
      </div>
    </div>
  );
};

export default GroupDashboard;
