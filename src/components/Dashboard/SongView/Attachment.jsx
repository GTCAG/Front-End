import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { axiosAuth } from "../../../axiosWithAuth";
import audioFileIcon from "../../../images/icons/audio_file_icon.svg";
import pdfFileIcon from "../../../images/icons/pdf_file_icon.svg";
import textFileIcon from "../../../images/icons/text_file_icon.svg";

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    borderRadius: 20,
    width: 130,

    transition: "0.08s ease-in background-color",
    "&:hover": {
      backgroundColor: "#DDD",
    },
  },
  fileNameText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Roboto",
    color: "black",
    textDecoration: "none",
    margin: 0,
    marginTop: 15,
  },
  fileIcon: {
    width: 80,
    textDecoration: "none",
  },
  hrefContainer: {
    textDecoration: "none",
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

const Attachment = ({ fileName, songId }) => {
  const [link, setLink] = useState("");

  useEffect(() => {
    axiosAuth()
      .get(`/songs/${songId}/attachment-signature`, { params: { fileName } })
      .then((res) => {
        setLink(res.data.signedURL);
      })
      .catch((err) => {
        console.error(
          "There was an error retrieving the url for the file: " + fileName
        );
        console.log(err.response.data);
      });
  }, [fileName, songId]);

  const classes = useStyles();
  return (
    <a href={link} className={classes.hrefContainer}>
      <div className={classes.container}>
        <img
          className={classes.fileIcon}
          src={getFileIcon(fileName)}
          alt="File"
        />
        <p className={classes.fileNameText}>{fileName}</p>
      </div>
    </a>
  );
};

export default Attachment;
