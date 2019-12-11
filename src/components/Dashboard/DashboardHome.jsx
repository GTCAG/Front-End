import React from "react";
import styled from "styled-components";
import DashboardCard from "./DashboardCard";

const HomeContainer = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  max-width: 1700px;
  padding: 25px;
  gap: 25px;
  background-color: #eee;
  grid-template-columns: auto auto auto;
`;

const DashboardHome = () => {
  return (
    <HomeContainer>
      <DashboardCard title="Upcoming events" />
      <DashboardCard title="Groups" />
      <DashboardCard title="Songs" />
    </HomeContainer>
  );
};

export default DashboardHome;
