import React from "react";
import "./About.scss";
import styled from "styled-components";

const Container = styled.div`
  // background-color: red;

  display: flex;
  justify-content: center;
  width: 100%;
`;

const Bubble = styled.div`
  color: #333;
  background-color: white;
  margin: 35px;
  width: 100%;
  max-width: 1500px;
  padding: 25px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;

  @media (max-width: 700px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const About = () => {
  return (
    <Container>
      <Bubble>Test</Bubble>
    </Container>
  );
};

export default About;
