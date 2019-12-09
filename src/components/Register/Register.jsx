import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Register.scss";
const initialFormData = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: ""
};
const Register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkErrors = e => {
    const { password, confirmPassword, email, firstName, lastName } = formData;
    const newErrors = {};
    if (password !== confirmPassword) {
      newErrors.passMatch = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be atleast 6 characters long";
    }

    if (email.length <= 0) {
      newErrors.email = "Email field is required";
    }

    if (firstName.length === 0) {
      newErrors.firstName = "First name is required";
    }
    //Check if any new errors surfaced.
    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return false;
    } else {
      //Reset form errors
      setFormErrors({});
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Data: ", formData);

    if (checkErrors(e)) {
      console.log("We made it");
    } else {
      console.log("Nope");
    }
  };

  return (
    <div className="parentp">
      <div className="parent">
        <div className="image-container"></div>
        <div className="login-half shadow">
          <form onSubmit={handleSubmit} className="login-form ">
            <h2>Register</h2>
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
            <div className="icon-input">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="half-input-container">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <button className="register-btn">Register</button>
            <p className="subtext">
              Already have an account?{" "}
              <Link>
                <span>Login here</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
