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
import CircularProgress from "@material-ui/core/CircularProgress";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    maxWidth: 1300,
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    // gridTemplateRows: "auto",
    paddingBottom: 10,
    gap: "25px"
    // overflowY: "auto"
  },
  backdrop: {
    zIndex: 90,
    color: "#fff"
  },
  fabContainer: {
    margin: 0,
    top: "auto",
    right: 25,
    bottom: 25,
    left: "auto",
    position: "fixed",
    zIndex: 89
  },
  fab: {
    marginLeft: 20
  },
  fabIcon: {
    marginRight: 5
  },
  diaContent: {
    margin: "0 auto"
  },
  viewContainer: {
    margin: "25px 0px 25px 25px",
    paddingRight: 25,
    overflowY: "auto"
  }
}));

const GroupView = () => {
  const [groups, setGroups] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [groupDialog, setGroupDialog] = useState(false);
  const [inputText, setInputText] = useState("");
  const [apiWait, setApiWait] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    message: ""
  });

  const handleClose = () => {
    setOpen(false);
    setGroupDialog(false);
    setInputText("");
    setWaiting(false);
  };

  const handleSnackClose = () => {
    setSnack({ ...snack, open: false });
  };

  useEffect(() => {
    setApiWait(true);
    axiosAuth()
      .get("/groups")
      .then(res => {
        console.log(res);
        setGroups(res.data);
        setApiWait(false);
      })
      .catch(err => {
        console.log("Error groups: ", err.response);
        setApiWait(false);
      });
  }, []);

  const handleAddClick = () => {
    setOpen(true);
  };

  const handleGroupAddClick = () => {
    setGroupDialog(true);
  };

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  const handleGroupJoin = () => {
    // setGroupDialog(false);
    if (inputText.length === 0) {
      alert("Code field cannot be empty");
      return;
    }

    setWaiting(true);

    axiosAuth()
      .post("/groups/join", { code: inputText })
      .then(res => {
        console.log("Response: ", res);
        setOpen(false);
        setWaiting(false);
        setSnack({ open: true, message: `Successfuly joined ${inputText}!` });
        setInputText("");
      })
      .catch(err => {
        console.log("Error res: ", err.response);
        setOpen(false);
        setWaiting(false);
        setSnack({ open: true, message: "Failed to join group" });
      });
  };

  const handleGroupCreate = () => {
    if (inputText.length === 0) {
      alert("Group name field cannot be empty");
      return;
    }

    setWaiting(true);
    axiosAuth()
      .post("/groups", { groupName: inputText })
      .then(res => {
        console.log("made group response: ", res);
        setGroups([...groups, res.data.createdGroup]);
        setOpen(false);
        setWaiting(false);
        setSnack({ open: true, message: `Group ${inputText} created` });
        setInputText("");
      })
      .catch(err => {
        console.log("Error making group: ", err.response);
        setOpen(false);
        setWaiting(false);
        setSnack({ open: true, message: "Failed to create group" });
      });
  };
  const classes = useStyles();
  return (
    <div className={classes.viewContainer}>
      <Backdrop className={classes.backdrop} open={apiWait}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        message={snack.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
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
        {groups.map((group, index) => {
          return <GroupCard group={group} key={index} />;
        })}
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Group</DialogTitle>
        <DialogContent className={classes.diaContent}>
          {waiting ? (
            <CircularProgress />
          ) : (
            <div>
              <DialogContentText>
                Enter the name of the group to make.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Group Name"
                variant="outlined"
                type="text"
                value={inputText}
                fullWidth
                onChange={handleInputChange}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleGroupCreate}
            color="primary"
            disabled={waiting}
          >
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
        <DialogContent className={classes.diaContent}>
          {waiting ? (
            <CircularProgress />
          ) : (
            <div>
              <DialogContentText>
                Enter the code of the group to join.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="code"
                label="Code"
                variant="outlined"
                value={inputText}
                type="text"
                fullWidth
                onChange={handleInputChange}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleGroupJoin} color="primary" disabled={waiting}>
            Join
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GroupView;
