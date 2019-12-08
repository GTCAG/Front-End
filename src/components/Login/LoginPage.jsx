import React from "react";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="parentp">
      <div className="parent">
        <div className="image-container"></div>
        <div className="login-half shadow">
          <form className="login-form ">
            <h2>Login</h2>
            <p>Enter your details below to continue</p>
            <div className="icon-input">
              <i class="far fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="icon-input">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="forgot">
              <p>
                Forgot Password <span>></span>
              </p>
            </div>
            <button>Login</button>
            <p className="subtext">
              Don't have an account? <span>Sign up here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
