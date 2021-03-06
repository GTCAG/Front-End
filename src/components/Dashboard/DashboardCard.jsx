import React from "react";

import styled, { keyframes } from "styled-components";

const fadeInAndUp = keyframes`
0% {
  transform: translateY(15%);
  opacity: 0.1;
}

100% {
  transform: translateY(0);
  opacity: 1;
}
`;

const Card = styled.div`
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.555);
  background-color: #394359;
  height: 450px;
  color: #f2be8d;

  animation: ${fadeInAndUp} 0.37s ease-out 0s;

  .what {
    padding: 10px 25px;
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
    h3 {
      margin: 0;
      text-transform: uppercase;
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
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <Divider />
      <CardBody></CardBody>
    </Card>
  );
};

export default DashboardCard;
