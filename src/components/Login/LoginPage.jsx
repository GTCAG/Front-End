import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import "./LoginPage.scss";
import ImageForm from "../ImageForm/ImageForm";
import bgImg from "../../images/abstract2.jpg";
import IconInput from "../ImageForm/IconInput";

const initialFormData = {
  email: "",
  password: ""
};
const LoginPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn);
  const loginError = useSelector(state => state.loginError);
  const loggingIn = useSelector(state => state.isLoggingIn);
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
  };

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ImageForm handleSubmit={handleSubmit} img={bgImg} loading={loggingIn}>
      <h2>Login</h2>
      <p>Enter your details below to continue</p>
      <IconInput
        iconClass="far fa-envelope"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        disabled={loggingIn}
      />
      <IconInput
        iconClass="fas fa-lock"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        disabled={loggingIn}
      />
      <div className="forgot">
        <Link>
          <p>
            Forgot Password <span>></span>
          </p>
        </Link>
      </div>
      <button disabled={loggingIn}>Login</button>
      {loginError && <p className="form-error">{loginError}</p>}
      <p className="subtext">
        Don't have an account?{" "}
        <Link to="/register">
          <span>Sign up here</span>{" "}
        </Link>
      </p>
    </ImageForm>
  );
};

export default LoginPage;
