import React, { useState } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles, TextField, CircularProgress } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function getSignedURL(songId, file) {
  return new Promise((resolve, reject) => {
    console.log("Doing...");
    axiosAuth()
      .post(`/songs/${songId}/attachment-upload-signature`, {
        fileName: file.name,
        fileType: file.type,
      })
      .then((res) => {
        console.log("Ok");
        const { signedURL } = res.data;
        resolve(signedURL);
      })
      .catch((err) => {
        console.log("Not ok");
        reject(err);
      });
  });
}

function toSecureURL(url) {
  return url.replace("http", "https");
}

const AddAttachmentDialog = ({ open, onClose, songId }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");

  const handleAdd = () => {
    getSignedURL(songId, file)
      .then((signedUrl) => {
        const secureURL = toSecureURL(signedUrl);
        const config = {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log("Percent completed: ", percentCompleted);
          },
        };

        return axios.put(secureURL, file, config);
      })
      .then((res) => {
        console.log("Upload completed", res);
      })
      .catch((err) => {
        console.log("Upload interrupted: ", err.response);
      });
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
        <DialogContentText>Upload a file for this song</DialogContentText>
        {loading ? (
          <div className={classes.progressContainer}>
            <CircularProgress />
          </div>
        ) : (
          <TextField
            type="file"
            className={classes.field}
            variant="outlined"
            // value={file}
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
          disabled={loading}
        >
          Upload
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

export default AddAttachmentDialog;
