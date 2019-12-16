import React from "react";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import { Route } from "react-router-dom";
import styled from "styled-components";
import DashboardHome from "./DashboardHome";

//Color Palette: D88A83 - BA6C65 - F2BE8D - 394359  - 303242

const DashboardContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardMenu />
      <Route exact path="/dashboard/">
        <DashboardHome />
      </Route>
      <Route path="/dashboard/settings">
        <h1>Settings</h1>
      </Route>
    </DashboardContainer>
  );
};

export default Dashboard;