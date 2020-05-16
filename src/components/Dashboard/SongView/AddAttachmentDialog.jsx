import React, { useState } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles, withStyles, TextField } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";

import LinearProgress from "@material-ui/core/LinearProgress";

import { axiosAuth } from "../../../axiosWithAuth";
import axios from "axios";
const useStyles = makeStyles(() => ({
  contentContainer: {
    padding: 20,
    width: "100%",
    boxSizing: "border-box",
  },
  dialogTitle: {
    textAlign: "center",
  },
  button: {},
  field: {
    width: "100%",
  },
  progressContainer: {
    width: "100%",
    "& > * + *": {
      marginTop: 20,
    },
  },
}));

const CompleteLinearProgress = withStyles({
  barColorPrimary: {
    backgroundColor: "#22dd22",
  },
})(LinearProgress);

function getSignedURL(songId, file) {
  return new Promise((resolve, reject) => {
    console.log("Doing...");
    axiosAuth()
      .post(`/songs/${songId}/attachment-upload-signature`, {
        fileName: file.name,
        fileType: file.type,
      })
      .then((res) => {
        const { signedURL } = res.data;
        resolve(signedURL);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function toSecureURL(url) {
  return url.replace("http", "https");
}

const AddAttachmentDialog = ({ open, onClose, songId }) => {
  const [uploading, setUploading] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [file, setFile] = useState("");

  const handleAdd = () => {
    setUploading(true);
    getSignedURL(songId, file)
      .then((signedUrl) => {
        const secureURL = toSecureURL(signedUrl);
        const config = {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setLoadPercent(percentCompleted);
          },
        };

        return axios.put(secureURL, file, config);
      })
      .then((res) => {
        setComplete(true);
        setTimeout(onClose, 2000);
      })
      .catch((err) => {});
  };

  const classes = useStyles();
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="add-attachment-title"
      open={open}
    >
      <DialogTitle className={classes.dialogTitle} id="add-attachment-title">
        Add Attachment
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {complete
            ? "Upload Complete!"
            : uploading
            ? "Uploading file..."
            : "Upload a file for this song"}
        </DialogContentText>
        {uploading ? (
          <div className={classes.progressContainer}>
            {complete ? (
              <CompleteLinearProgress
                variant="determinate"
                value={loadPercent}
              />
            ) : (
              <LinearProgress variant="determinate" value={loadPercent} />
            )}
          </div>
        ) : (
          <TextField
            type="file"
            className={classes.field}
            variant="outlined"
            placeholder="File"
            onChange={(e) => setFile(e.target.files[0])}
          />
        )}
      </DialogContent>

      <DialogActions>
        <Button
          color="primary"
          onClick={handleAdd}
          className={classes.button}
          fullWidth
          disabled={uploading}
        >
          Upload
        </Button>
        <Button
          color="secondary"
          onClick={onClose}
          disabled={uploading}
          className={classes.button}
          fullWidth
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAttachmentDialog;
