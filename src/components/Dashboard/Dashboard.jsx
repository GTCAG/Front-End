import React from "react";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import { Route } from "react-router-dom";
import styled from "styled-components";
import DashboardHome from "./DashboardHome";
import SongsView from "./SongsView";
import GroupView from "./GroupView/GroupView";

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

      <Route path="/dashboard/songs">
        <SongsView />
      </Route>
      <Route path="/dashboard/settings">
        <h1>Settings</h1>
      </Route>
      <Route exact path="/dashboard/groups">
        <GroupView />
      </Route>
      <Route exact path="/dashboard/groups/create"></Route>
    </DashboardContainer>
  );
};

export default Dashboard;
