import React, { useState } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import validateUrl from "../../../util/validateUrl";

import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles, TextField, CircularProgress } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";

import { axiosAuth } from "../../../axiosWithAuth";

const useStyles = makeStyles(() => ({
  contentContainer: {
    padding: 20,
    width: "100%",
    boxSizing: "border-box"
  },
  dialogTitle: {
    textAlign: "center"
  },
  button: {},
  field: {
    width: "100%"
  },
  progressContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const AddUrlDialog = ({ open, onClose, songId }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleAdd = () => {
    if (validateUrl(value)) {
      setLoading(true);
      axiosAuth()
        .put(`/songs/${songId}/addurl`, { url: value })
        .then(res => {
          console.log("Add url response: ", res);

          setLoading(false);
          onClose();
        })
        .catch(err => {
          console.log("Error: ", err.response);
          setLoading(false);
        });
    } else {
      alert("That is not a valid Link/URL");
    }
  };
  return (
    <Dialog onClose={onClose} aria-labelledby="add-song-title" open={open}>
      <DialogTitle className={classes.dialogTitle} id="add-song-title">
        Add URL
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add a reference URL to the song. Be sure it's a valid URL
        </DialogContentText>
        {loading ? (
          <div className={classes.progressContainer}>
            <CircularProgress />
          </div>
        ) : (
          <TextField
            type="text"
            className={classes.field}
            variant="outlined"
            value={value}
            label="URL"
            placeholder="URL"
            onChange={e => setValue(e.target.value)}
          />
        )}
      </DialogContent>

      <DialogActions>
        <Button
          color="primary"
          onClick={handleAdd}
          className={classes.button}
          fullWidth
          disabled={loading}
        >
          Add
        </Button>
        <Button
          color="secondary"
          onClick={onClose}
          disabled={loading}
          className={classes.button}
          fullWidth
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUrlDialog;
