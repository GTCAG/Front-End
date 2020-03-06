import React, { useState } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import Button from "@material-ui/core/Button";
import AddExistingSongForm from "./AddExistingSongForm";
import CreateSongForm from "./CreateSongForm";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  contentContainer: {
    padding: 20,
    width: "100%",
    boxSizing: "border-box"
  },
  dialogTitle: {
    textAlign: "center"
  },
  button: {
    marginBottom: 15
  }
});

const EventAddSongDialog = ({ open, handleClose, onSuccess }) => {
  const [creatingSong, setCreatingSong] = useState(true);
  const [addingExisting, setAddingExisting] = useState(false);
  const classes = useStyles();

  const handleAddExisting = () => {
    setAddingExisting(true);
  };

  const handleCreateNew = () => {
    setCreatingSong(true);
  };

  const handleOurClose = () => {
    handleClose();
    setTimeout(() => {
      setAddingExisting(false);
      setCreatingSong(false);
    }, 400);
  };

  return (
    <Dialog
      onClose={handleOurClose}
      aria-labelledby="add-song-title"
      open={open}
    >
      <DialogTitle className={classes.dialogTitle} id="add-song-title">
        {creatingSong
          ? "Create New Song"
          : addingExisting
          ? "Add Existing Song"
          : "Add Song"}
      </DialogTitle>
      <div className={classes.contentContainer}>
        {creatingSong ? (
          <CreateSongForm handleClose={handleOurClose} onSuccess={onSuccess} />
        ) : addingExisting ? (
          <AddExistingSongForm onSuccess={onSuccess} />
        ) : (
          <div>
            <Button
              className={classes.button}
              variant="contained"
              fullWidth
              onClick={handleAddExisting}
              color="primary"
            >
              Add Existing
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleCreateNew}
            >
              Create New
            </Button>
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default EventAddSongDialog;
