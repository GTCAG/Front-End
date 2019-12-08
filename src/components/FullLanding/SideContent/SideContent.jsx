import React from "react";
import "./SideContent.scss";

import logo from "../../../images/gtc-logo-white.png";

const SideContent = () => {
  return (
    <div className="side-container">
      <div className="title-info shadow">
        <img className="logo" src={logo} alt="" />
        <h1>Grace Trinity Church</h1>
        <p>Assemblies of God</p>
        <div className="main-info-body"></div>
      </div>

      <div className="side-info shadow">
        <div className="centered heavy-shadow ">
          <h2>Welcome to Church!</h2>
          <p>We're located at 5821 Auburn Blvd, Sacramento, CA 95841</p>
        </div>
        {/* <div className="quick-info">
          <div className="info-wrapper">
            <i class="fas fa-church fa-3x"></i>
            <br />
            <p>Located at </p>
            <span>5821 Auburn Blvd, Sacramento, CA 95841</span>
          </div>
           <div className="info-wrapper">
            <i class="fas fa-baby fa-3x"></i>
            <br />
            <p>Baby/Toddler Care</p>
            <span>
              We have a dedicated toddler room to help keep your loved ones
              occupied as you listen in.
            </span>
          </div> 
          <div className="info-wrapper">
            <i class="fas fa-globe-americas fa-3x"></i>
            <br />
            <p>Translation</p>
            <span>
              Don't speak Ukranian or Russian? <br />
              No problem. <br />
              We have English translators ready during live sermons.
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideContent;
