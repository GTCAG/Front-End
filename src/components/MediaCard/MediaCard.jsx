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
    color: "#444"
  }
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
      <div className="media">
        <a href="https://www.facebook.com/GraceTrinityChurch/?ref=nf&hc_ref=ART03pEjMPC3cd-tbTp_iAhT6IPlHWrCdI2wgyh_HWggVSb27aafVQL5ELahZNU9vZY">
          <FacebookIcon className={classes.icon} />
          <p>Facebook</p>
        </a>
      </div>
      <div className="media">
        <a href="">
          <InstagramIcon className={classes.icon} />
          <p>Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default MediaCard;
