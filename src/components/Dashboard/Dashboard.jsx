import React from "react";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardMenu />
    </DashboardContainer>
  );
};

export default Dashboard;
