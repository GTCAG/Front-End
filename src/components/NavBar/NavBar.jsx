import React, { Component } from "react";
import logo from "../../images/gtc-logo.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="shadow nav-center">
      <div className="nav-wrapper max-size">
        <img className="logo" src={logo} alt="church logo" />
        <div className="links">
          <a href="#">Home</a>
          {/* <a href="#">Services</a> */}
          <a href="#">Media</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
