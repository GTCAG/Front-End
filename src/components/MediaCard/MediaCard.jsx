import React from "react";
import "./MediaCard.scss";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: "40px",
    marginRight: "20px",
    color: "#444",
  },

  disabledIcon: {
    fontSize: "40px",
    marginRight: "20px",
    color: "#888",
    opacity: 0.7,
  },
}));
const MediaCard = () => {
  const classes = useStyles();
  return (
    <div className="info-card shadow">
      <h2>Get Connected</h2>
      <div className="media">
        <a href="https://www.youtube.com/channel/UCNaKPci4jHkzFyo2hYwlVRQ">
          {/* <i className="fab fa-youtube fa-2x youtube"></i> */}
          <YouTubeIcon className={classes.icon} />
          <p>Youtube</p>
        </a>
      </div>
      <div className="media disabled">
        <a href="" onClick={(e) => e.preventDefault()}>
          <FacebookIcon className={classes.disabledIcon} />
          <p>Facebook</p>
        </a>
      </div>
      <div className="media disabled">
        {/* Cancel out link clicks of disabled elements */}
        <a href="" onClick={(e) => e.preventDefault()}>
          <InstagramIcon className={classes.disabledIcon} />
          <p>Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default MediaCard;
