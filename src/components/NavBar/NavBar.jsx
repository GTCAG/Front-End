import React from "react";
import logo from "../../images/gtc-logo.png";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="shadow nav-center">
      <div className="nav-wrapper max-size">
        <img className="logo" src={logo} alt="church logo" />
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Library</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
