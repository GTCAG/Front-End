import React from "react";
import "./MediaCard.scss";

const MediaCard = () => {
  return (
    <div className="info-card shadow">
      <h2>Get Connected</h2>
      <div className="media">
        <a href="https://www.youtube.com/channel/UCNaKPci4jHkzFyo2hYwlVRQ">
          <i className="fab fa-youtube fa-2x youtube"></i>
          <p>Youtube</p>
        </a>
      </div>
      <div className="media">
        <a href="https://www.facebook.com/GraceTrinityChurch/?ref=nf&hc_ref=ART03pEjMPC3cd-tbTp_iAhT6IPlHWrCdI2wgyh_HWggVSb27aafVQL5ELahZNU9vZY">
          <i className="fab fa-facebook-f fa-2x facebook"></i>
          <p>Facebook</p>
        </a>
      </div>
      <div className="media">
        <a href="">
          <i className="fab fa-instagram fa-2x instagram"></i>
          <p>Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default MediaCard;
