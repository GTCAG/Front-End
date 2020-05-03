import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { makeStyles, IconButton, Tooltip, TextField } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import AddUrlDialog from "./AddUrlDialog";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import AddAttachmentDialog from "./AddAttachmentDialog";

import Attachment from "./Attachment";
import { axiosAuth } from "../../../axiosWithAuth";
import BackdropWait from "../../FeedbackComponents/BackdropWait";

const useStyles = makeStyles((theme) => ({
  addButton: {
    marginBottom: 25,
    width: "80%",
  },
  root: {
    flexGrow: 1,
    padding: 25,
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
    maxWidth: 1200,
  },
  cardContainer: {
    background: "#FFFFFF",
    position: "relative",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  songName: {
    margin: 0,
    padding: 0,
    fontSize: "38px",
    textAlign: "center",
  },
  contentContainer: {},
  bpmContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  referenceContainer: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  chip: {
    marginRight: 10,
    marginBottom: 10,
  },
  subTitle: {
    textAlign: "center",
    fontSize: "20px",
  },
  bpm: {
    textAlign: "center",
  },
  attachmentsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  noResultsText: {
    color: "#333",
    opacity: 0.7,
    margin: 0,
    fontSize: "18px",
    fontFamily: "Roboto",
  },
  editButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  confirmButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  bpmField: {
    marginTop: 10,
  },
  centeredFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  addButton: {
    marginLeft: 10,
  },
}));

const SongViewPage = () => {
  const { songId } = useParams();
  const [edit, setEdit] = useState(false);
  const [urlDialog, setUrlDialog] = useState(false);
  const [attachmentDialog, setAttachmentDialog] = useState(false);
  const [attachmentFiles, setAttachmentFiles] = useState([]);
  const [songEditValues, setSongEditValues] = useState({
    title: "",
    bpm: 0,
    url: "",
    attachment: "",
  });
  const [apiWait, setApiWait] = useState(false);
  const [song, setSong] = useState({
    title: "",
    bpm: 0,
    referenceUrls: [],
    attachmentUrls: [],
  });

  useEffect(() => {
    setApiWait(true);
    axiosAuth()
      .get(`/songs/${songId}`)
      .then((res) => {
        console.log("Song view res", res);
        setSong(res.data);
        setSongEditValues({
          ...songEditValues,
          title: res.data.title,
          bpm: res.data.bpm,
        });
        setApiWait(false);
      })
      .catch((err) => {
        console.log("Err:", err.response);
        setApiWait(false);
      });
  }, []);

  useEffect(() => {
    // Get attachment list
    axiosAuth()
      .get(`/songs/${songId}/attachment-list`)
      .then((res) => {
        setAttachmentFiles(res.data.attachments);
      })
      .catch((err) => {
        console.error("Error getting attachment list: ", err);
      });
  }, []);

  const handleEditChanges = (e) => {
    setSongEditValues({ ...songEditValues, [e.target.name]: e.target.value });
  };

  const handleConfirmChanges = () => {
    axiosAuth()
      .put(`/songs/${songId}`, songEditValues)
      .then((res) => {
        console.log("Edited song response: ", res);
      })
      .catch((err) => {
        console.log("Error: ", err.response);
      });
    setSong({ ...song, title: songEditValues.title, bpm: songEditValues.bpm });
    setEdit(false);
  };

  const handleChipDelete = (url) => {
    axiosAuth().delete(`/songs/${songId}/removeurl`, { data: { url } });
    const filteredArr = song.referenceUrls.filter((refUrl) => refUrl != url);
    setSong({ ...song, referenceUrls: filteredArr });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BackdropWait open={apiWait} />
      <AddUrlDialog
        songId={songId}
        open={urlDialog}
        onClose={() => setUrlDialog(false)}
      />

      <AddAttachmentDialog
        songId={songId}
        open={attachmentDialog}
        onClose={() => setAttachmentDialog(false)}
      />
      <div className={classes.cardContainer}>
        {edit ? (
          <Tooltip title="Confirm Changes">
            <IconButton
              onClick={handleConfirmChanges}
              className={classes.confirmButton}
            >
              <CheckIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Edit">
            <IconButton
              onClick={() => setEdit(true)}
              className={classes.editButton}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
        )}

        {edit ? (
          <TextField
            type="text"
            label="Title"
            variant="outlined"
            name="title"
            placeholder="Song Title"
            value={songEditValues.title}
            onChange={handleEditChanges}
          />
        ) : (
          <h2 className={classes.songName}>{song.title}</h2>
        )}

        <div className={classes.bpmContainer}>
          {edit ? (
            <TextField
              type="number"
              name="bpm"
              label="BPM"
              className={classes.bpmField}
              value={songEditValues.bpm}
              onChange={handleEditChanges}
            />
          ) : (
            <h3 className={classes.bpm}>BPM: {song.bpm}</h3>
          )}
        </div>
        <div className={classes.centeredFlex}>
          <h3 className={classes.subTitle}>URLs</h3>
          {edit && (
            <Tooltip title="Add">
              <IconButton
                onClick={() => setUrlDialog(true)}
                className={classes.addButton}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
        <div className={classes.referenceContainer}>
          {song.referenceUrls.length === 0 && (
            <p className={classes.noResultsText}>There are no URLs yet</p>
          )}
          {song.referenceUrls.map((url, index) => (
            <Chip
              clickable
              className={classes.chip}
              label={shortenUrl(url)}
              component="div"
              onClick={
                edit
                  ? (e) => e.preventDefault()
                  : () => {
                      window.location = url;
                    }
              }
              icon={<AttachFileIcon />}
              color="primary"
              key={index}
              variant="outlined"
              onDelete={edit ? () => handleChipDelete(url) : null}
            />
          ))}
        </div>
        <div className={classes.centeredFlex}>
          <h2 className={classes.subTitle}>Attachments</h2>

          {edit && (
            <Tooltip title="Add">
              <IconButton
                onClick={() => setAttachmentDialog(true)}
                className={classes.addButton}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}

          <div className={classes.attachmentsContainer}>
            {attachmentFiles.length === 0 ? (
              <p className={classes.noResultsText}>
                There are no attachments yet
              </p>
            ) : (
              attachmentFiles.map((file, index) => (
                <Attachment key={index} fileName={file} songId={songId} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function shortenUrl(url) {
  if (url.length > 20) {
    url = url.slice(0, 20);
    url = url + "...";
  }

  return url;
}

export default SongViewPage;
