import React from "react";

import styled from "styled-components";

const Card = styled.div`
  background-color: #394359;
  height: 450px;
  color: #f2be8d;

  .what {
    padding: 10px 25px;
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h3 {
      margin: 0;
      text-transform: uppercase;
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f2be8d;
  opacity: 0.15;
`;

const CardBody = styled.div``;

const DashboardCard = ({ title }) => {
  return (
    <Card>
      <div className="what">
        <div className="card-header">
          <h3>{title}</h3>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <Divider />
      <CardBody></CardBody>
    </Card>
  );
};

export default DashboardCard;
