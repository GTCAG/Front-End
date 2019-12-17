import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import { login } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import "./LoginPage.scss";

const initialFormData = {
  email: "",
  password: ""
};
const LoginPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.loginError);
  const loggingIn = useSelector(state => state.isLoggingIn);
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="parentp">
      <div className="parent">
        <div className="image-container"></div>
        <div className="login-half shadow">
          {loggingIn ? (
            <div className="progress-container">
              <CircularProgress />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="login-form ">
              <h2>Login</h2>
              <p>Enter your details below to continue</p>
              <div className={`icon-input` + (loggingIn ? " disabled" : "")}>
                <i className="far fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loggingIn}
                />
              </div>
              <div className={`icon-input` + (loggingIn ? " disabled" : "")}>
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loggingIn}
                />
              </div>
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
