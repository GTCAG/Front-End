import React from "react";

//Components
import Schedule from "../Schedule/Schedule";
import NavBar from "../NavBar/NavBar";

import "./FullLanding.scss";
import DonationDisplay from "../DonationDisplay/DonationDisplay";
import MediaCard from "../MediaCard/MediaCard";
import SideContent from "./SideContent/SideContent";

const FullLanding = () => {
  return (
    <div className="landing">
      <div className="landing-content-wrapper">
        <div className="landing-content max-size">
          <SideContent />
          <div className="vertical-content">
            <Schedule />
            <DonationDisplay />
            <MediaCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullLanding;
