import React from "react";
import { makeStyles } from "@material-ui/core";

import audioFileIcon from "../../../images/icons/audio_file_icon.svg";
import pdfFileIcon from "../../../images/icons/pdf_file_icon.svg";
import textFileIcon from "../../../images/icons/text_file_icon.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fileNameText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  fileIcon: {
    width: 80,
  },
}));

function getFileIcon(fileName) {
  const sections = fileName.split(".");
  const fileExtension = sections[sections.length - 1];

  switch (fileExtension) {
    case "txt":
      return textFileIcon;
    case "mp3":
    case "mp4":
    case "wav":
      return audioFileIcon;
    case "pdf":
      return pdfFileIcon;

    default:
      return textFileIcon;
  }
}

const Attachment = ({ fileName }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        className={classes.fileIcon}
        src={getFileIcon(fileName)}
        alt="File"
      />
      <p className={classes.fileNameText}>{fileName}</p>
    </div>
  );
};

export default Attachment;
