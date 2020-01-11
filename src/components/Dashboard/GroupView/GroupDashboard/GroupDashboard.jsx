import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosAuth } from "../../../../axiosWithAuth";
import AppBar from "@material-ui/core/AppBar";

const initialGroupState = {
  admins: [],
  events: [],
  _id: 0,
  name: "",
  members: []
};

const GroupDashboard = () => {
  //Hooks
  const params = useParams();
  const [group, setGroup] = useState();
  const groupId = params.groupId;

  //Fetch group from id
  useEffect(() => {
    axiosAuth()
      .get(`/${groupId}`)
      .then(res => {
        console.log("GroupDashboard response: ", res);
        setGroup(res.data);
      })
      .catch(err => {
        console.log("err: ", err.response);
      });
  }, []);

  return <div></div>;
};

export default GroupDashboard;
