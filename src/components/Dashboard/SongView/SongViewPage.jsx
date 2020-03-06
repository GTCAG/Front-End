import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { makeStyles, IconButton, Tooltip } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import EditIcon from "@material-ui/icons/Edit";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import { axiosAuth } from "../../../axiosWithAuth";
import BackdropWait from "../../FeedbackComponents/BackdropWait";

const useStyles = makeStyles(theme => ({
  addButton: {
    marginBottom: 25,
    width: "80%"
  },
  root: {
    flexGrow: 1,
    padding: 25,
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      padding: 10
    },
    maxWidth: 1200
  },
  cardContainer: {
    background: "#FFFFFF",
    position: "relative",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  songName: {
    margin: 0,
    padding: 0,
    fontSize: "38px",
    textAlign: "center"
  },
  contentContainer: {},
  bpmContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  referenceContainer: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  chip: {
    marginRight: 10,
    marginBottom: 10
  },
  subTitle: {
    textAlign: "center",
    fontSize: "20px"
  },
  bpm: {
    textAlign: "center"
  },
  attachmentsContainer: {
    display: "flex"
  },
  noResultsText: {
    color: "#333",
    opacity: 0.7,
    margin: 0,
    fontSize: "18px",
    fontFamily: "Roboto"
  },
  editButton: {
    position: "absolute",
    top: 20,
    right: 20
  }
}));

const SongViewPage = () => {
  const { songId } = useParams();
  const [apiWait, setApiWait] = useState(false);
  const [song, setSong] = useState({
    title: "",
    bpm: 0,
    referenceUrls: [],
    attachmentUrls: []
  });

  useEffect(() => {
    setApiWait(true);
    axiosAuth()
      .get(`/songs/${songId}`)
      .then(res => {
        console.log("Song view res", res);
        setSong(res.data);
        setApiWait(false);
      })
      .catch(err => {
        console.log("Err:", err.response);
        setApiWait(false);
      });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BackdropWait open={apiWait} />
      <div className={classes.cardContainer}>
        <Tooltip title="Edit">
          <IconButton className={classes.editButton}>
            <EditIcon />
          </IconButton>
        </Tooltip>

        <h2 className={classes.songName}>{song.title}</h2>

        <div className={classes.bpmContainer}>
          {/* Metronome Icon */}
          <h3 className={classes.bpm}>BPM: {song.bpm}</h3>
        </div>

        <h3 className={classes.subTitle}>URLs</h3>
        <div className={classes.referenceContainer}>
          {song.referenceUrls.length === 0 && (
            <p className={classes.noResultsText}>There are no URLs yet</p>
          )}
          {song.referenceUrls.map((url, index) => (
            <Chip
              clickable
              className={classes.chip}
              label={url}
              component="a"
              href={url}
              icon={<AttachFileIcon />}
              color="primary"
              key={index}
              variant="outlined"
            />
          ))}
        </div>
        <h2 className={classes.subTitle}>Attachments</h2>
        <div className={classes.attachmentsContainer}>
          {song.attachmentUrls.length === 0 && (
            <p className={classes.noResultsText}>
              There are no attachments yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongViewPage;
