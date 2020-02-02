import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import DashboardHome from "./DashboardHome";
import SongsView from "./SongsView";
import GroupView from "./GroupView/GroupView";
import GroupDashboard from "./GroupView/GroupDashboard/GroupDashboard";
import DashboardAppBar from "./DashboardAppBar";
import EventView from "./EventView/EventView";

//Color Palette: D88A83 - BA6C65 - F2BE8D - 394359  - 303242

const DashboardContainer = styled.div`
  // display: flex;
  // height: 100%;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      {/* <DashboardMenu /> */}
      <DashboardAppBar title="Dashboard" />
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
      <Route exact path="/dashboard/groups/:groupId">
        <GroupDashboard />
      </Route>
      <Route exact path="/dashboard/events/:eventId"></Route>
      <EventView />
    </DashboardContainer>
  );
};

export default Dashboard;
