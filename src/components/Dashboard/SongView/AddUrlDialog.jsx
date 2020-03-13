import React, { useState } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { makeStyles, TextField } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";

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
  }
}));

const AddUrlDialog = ({ open, onClose }) => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  return (
    <Dialog onClose={onClose} aria-labelledby="add-song-title" open={open}>
      <DialogTitle className={classes.dialogTitle} id="add-song-title">
        Add URL
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add a reference URL to the song. Be sure it's a valid URL
        </DialogContentText>
        <TextField
          type="text"
          className={classes.field}
          variant="outlined"
          value={value}
          label="URL"
          placeholder="URL"
          onChange={e => setValue(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button color="primary" className={classes.button} fullWidth>
          Add
        </Button>
        <Button color="secondary" className={classes.button} fullWidth>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUrlDialog;
