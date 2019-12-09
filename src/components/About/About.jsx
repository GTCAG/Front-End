import React from "react";
import LoginPage from "../Login/LoginPage";
import "./About.scss";
import Register from "../Register/Register";

const About = () => {
  return (
    <div className="login-page-container">
      <LoginPage />
      <Register />
    </div>
  );
};

export default About;
