import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

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
  }
  i {
    margin-right: 25px;
  }

  opacity: 0.4;

  &.active {
    opacity: 1;
    color: #f2be8d;
  }
`;

const DashboardMenu = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Menu>
      <FillBox>CREATE GROUP</FillBox>
      <MenuButtonList>
        <Link to="/dashboard">
          <MenuButton className="active">
            <i class="fas fa-th"></i>
            <p>Dashboard</p>
          </MenuButton>
        </Link>
        <Link to="/dashboard/settings">
          <MenuButton>
            <i class="fas fa-cog"></i>
            <p>Settings</p>
          </MenuButton>
        </Link>
      </MenuButtonList>
    </Menu>
  );
};

export default DashboardMenu;
