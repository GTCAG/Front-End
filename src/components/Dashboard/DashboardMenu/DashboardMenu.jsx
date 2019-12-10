import React from "react";

import styled from "styled-components";

const Menu = styled.div`
  height: 100%;
  width: 160px

  color: #eee;
  padding: 40px;
  background-color: #40434B

`;

const FillBox = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #55dabd;
  margin: 10px 0px;
  color: white;
  border-style: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
`;

const DashboardMenu = () => {
  return (
    <Menu>
      <FillBox>CREATE GROUP</FillBox>
    </Menu>
  );
};

export default DashboardMenu;
