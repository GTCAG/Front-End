import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import GroupCard from "./GroupCard";
import { axiosAuth } from "../../../axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    width: "100%",
    margin: 25,
    gridTemplateColumns: "1fr 1fr 1fr",
    // gridTemplateRows: "auto",
    gap: "25px",
    overflowY: "auto"
  },
  fabContainer: {
    margin: 0,
    top: "auto",
    right: 25,
    bottom: 25,
    left: "auto",
    position: "fixed"
  },
  fab: {
    marginLeft: 20
  },
  fabIcon: {
    marginRight: 5
  }
}));

const GroupView = () => {
  const [groups, setGroups] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [groupDialog, setGroupDialog] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setGroupDialog(false);
  };

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

  const handleAddClick = () => {
    setOpen(true);
  };

  const handleGroupAddClick = () => {
    setGroupDialog(true);
  };

  const handleGroupJoin = () => {};

  const handleGroupCreate = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <div className={classes.fabContainer}>
        <Tooltip title="Add Group" aria-label="add">
          <Fab
            variant="extended"
            onClick={handleGroupAddClick}
            className={classes.fab}
            color="inherit"
            aria-label="add"
          >
            <AddIcon className={classes.fabIcon} />
            Join
          </Fab>
        </Tooltip>
        <Tooltip title="Create" aria-label="create">
          <Fab
            onClick={handleAddClick}
            className={classes.fab}
            color="primary"
            aria-label="create"
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
      <div className={classes.root}>
        {groups.map(group => {
          return <GroupCard group={group} />;
        })}
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name for the group to make.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Group Name"
            variant="outlined"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleGroupCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={groupDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Join Group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the code of the group to join.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="code"
            label="Code"
            variant="outlined"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleGroupJoin} color="primary">
            Join
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GroupView;
