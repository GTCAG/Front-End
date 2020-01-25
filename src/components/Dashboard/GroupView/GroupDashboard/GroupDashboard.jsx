import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { axiosAuth } from "../../../../axiosWithAuth";
import GroupAppBar from "../../DashboardAppBar";

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
    </div>
  );
};

export default GroupDashboard;
