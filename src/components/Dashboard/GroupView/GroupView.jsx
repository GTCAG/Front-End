import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import GroupCard from "./GroupCard";
import { axiosAuth } from "../../../axiosWithAuth";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    width: "100%",
    margin: 25,
    gridTemplateColumns: "1fr 1fr 1fr",
    // gridTemplateRows: "auto",
    gap: "25px",
    overflowY: "auto"
  }
}));

const GroupView = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axiosAuth()
      .get("/groups")
      .then(res => {
        console.log(res);
        setGroups(res.data);
      })
      .catch(err => {
        console.log("Error groups: ", err.response);
      });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {groups.map(group => {
        return <GroupCard group={group} />;
      })}
    </div>
  );
};

export default GroupView;
