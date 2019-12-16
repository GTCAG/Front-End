import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  console.log("Login error:", loginError);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Data: ", formData);
    dispatch(login(formData));
  };

  return (
    <div className="parentp">
      <div className="parent">
        <div className="image-container"></div>
        <div className="login-half shadow">
          <form onSubmit={handleSubmit} className="login-form ">
            <h2>Login</h2>
            <p>Enter your details below to continue</p>
            <div className="icon-input">
              <i className="far fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="icon-input">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="forgot">
              <Link>
                <p>
                  Forgot Password <span>></span>
                </p>
              </Link>
            </div>
            <button>Login</button>
            {loginError && <p className="form-error">{loginError}</p>}
            <p className="subtext">
              Don't have an account?{" "}
              <Link to="/register">
                <span>Sign up here</span>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
