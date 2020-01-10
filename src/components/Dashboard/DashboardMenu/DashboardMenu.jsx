import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";

const Menu = styled.div`
  width: 160px
  min-width: 160px;

  color: #eee;
  padding: 35px;
  background-color: #303242;

`;

const FillBox = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #394359;
  margin: 10px 0px;
  color: white;
  border-style: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
`;

const MenuButtonList = styled.div`
  margin-top: 25px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const MenuButton = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  p {
    text-transform: uppercase;
    font-size: 13.5px;
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
    margin-left: 20px;
  }

  opacity: 0.4;

  &.active {
    opacity: 1;
    color: #f2be8d;
  }
  &:hover {
    opacity: 0.7;
    // color: #f2be8d;
  }
`;

const DashboardMenu = () => {
  const [activeLink, setActiveLink] = useState("dashboard");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        break;
      case "/dashboard/settings":
        setActiveLink("settings");
        break;
      case "/dashboard/songs":
        setActiveLink("songs");
        break;
      case "/dashboard/groups":
        setActiveLink("groups");
        break;
      default:
        setActiveLink("dashboard");
        break;
    }
  }, [location]);

  const onNavClick = e => {
    const clicked = e.currentTarget.getAttribute("name");
    if (activeLink !== clicked) {
      setActiveLink(clicked);
    }
  };

  return (
    <Menu>
      <FillBox>CREATE GROUP</FillBox>
      <MenuButtonList>
        <Link to="/dashboard">
          <MenuButton
            onClick={onNavClick}
            className={activeLink === "dashboard" ? "active" : ""}
            name="dashboard"
          >
            <DashboardRoundedIcon />
            <p>Dashboard</p>
          </MenuButton>
        </Link>

        <Link to="/dashboard/groups">
          <MenuButton
            onClick={onNavClick}
            className={activeLink === "groups" ? "active" : ""}
            name="groups"
          >
            <GroupRoundedIcon />
            <p>Groups</p>
          </MenuButton>
        </Link>

        <Link to="/dashboard/songs">
          <MenuButton
            onClick={onNavClick}
            className={activeLink === "songs" ? "active" : ""}
            name="songs"
          >
            {/* <i class="fas fa-music"></i> */}
            <LibraryMusicRoundedIcon />
            <p>Song Library</p>
          </MenuButton>
        </Link>

        <Link to="/dashboard/settings">
          <MenuButton
            onClick={onNavClick}
            className={activeLink === "settings" ? "active" : ""}
            name="settings"
          >
            <SettingsRoundedIcon />
            <p>Settings</p>
          </MenuButton>
        </Link>
      </MenuButtonList>
    </Menu>
  );
};

export default DashboardMenu;
