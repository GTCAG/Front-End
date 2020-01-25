import React from "react";
import styled from "styled-components";
import DashboardCard from "./DashboardCard";

const HomeContainer = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 25px;
  gap: 25px;
  background-color: #eee;
  grid-template-columns: auto auto auto;
`;

const DashboardHome = () => {
  return (
    <HomeContainer>
      <DashboardCard title="Upcoming events" />
    </HomeContainer>
  );
};

export default DashboardHome;
