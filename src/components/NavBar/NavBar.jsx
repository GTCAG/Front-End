import React, { useState, useEffect } from "react";
import logo from "../../images/gtc-logo.png";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../hamburgers.css";

const MenuLinks = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  a {
    // padding-top: 5px;
    // width: fit-content;

    text-decoration: none;
    text-align: center;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #6b7c93;
    margin-left: 35px;
    &:after {
      content: "";
      display: block;
      margin: auto;
      margin-top: 5px;
      height: 2px;
      width: 0px;
      background-color: black;
      transition: width 0.22s ease;
    }
    &:hover:after {
      width: 104%;
    }
  }
`;

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Open: ", open);

    const menuElement = document.querySelector(".menu-container");
    if (open) {
      menuElement.setAttribute("style", "height: 200px");
    } else {
      menuElement.setAttribute("style", "height: 0px");
    }
  }, [open]);

  const handleMenuClick = e => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="shadow nav-center">
        <div className="nav-wrapper max-size">
          <img className="logo" src={logo} alt="church logo" />
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Library</Link>
          </div>
          <button
            onClick={handleMenuClick}
            className={`hamburger hamburger--slider${open ? ` is-active` : ""}`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>

      <div className="menu-container">
        <MenuLinks>
          <Link to="/">Home</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Library</Link>
        </MenuLinks>
      </div>
    </div>
  );
};

export default NavBar;
