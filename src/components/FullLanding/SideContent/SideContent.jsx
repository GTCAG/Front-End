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
      </div>
    </div>
  );
};

export default SideContent;
