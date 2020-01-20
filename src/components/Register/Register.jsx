import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import bgImg from "../../images/abstract2.jpg";
import "./Register.scss";
import ImageForm from "../ImageForm/ImageForm";
import IconInput from "../ImageForm/IconInput";
import styled from "styled-components";

const HalfInput = styled.input`
  box-sizing: border-box;
  border-style: none;
  padding: 8px 15px;
  color: rgb(83, 83, 83);
  width: 30%;
  font-size: 18px;
  background-color: #eeeeee;
  outline: none;

  &:disabled {
    background-color: $disabled-input-bg;
  }
`;

const initialFormData = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: ""
};

const Register = () => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const isRegistering = useSelector(state => state.isRegistering);
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const checkErrors = () => {
    const { password, confirmPassword, email, firstName } = formData;
    const newErrors = {};
    if (password !== confirmPassword) {
      newErrors.passMatch = true;
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

  const handleSuccess = () => {
    setOpen(true);
    setFormData(initialFormData);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkErrors()) {
      console.log("We made it");
      dispatch(
        register(
          {
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName
          },
          handleSuccess
        )
      );
    }
  };
  return (
    <ImageForm img={bgImg} loading={isRegistering} handleSubmit={handleSubmit}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Succesfully Registered"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <h2>Register</h2>
      <p>Enter your details below to continue</p>
      {formErrors.email && <p className="form-error">{formErrors.email}</p>}

      <IconInput
        iconClass="far fa-envelope"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        disabled={isRegistering}
      />
      {formErrors.password && (
        <p className="form-error">{formErrors.password}</p>
      )}
      <IconInput
        iconClass="fas fa-lock"
        type="password"
        name="password"
        placeholder="Password"
        disabled={isRegistering}
        value={formData.password}
        onChange={handleChange}
      />
      {formErrors.passMatch === true && (
        <p className="form-error">Passwords do not match</p>
      )}

      <IconInput
        iconClass="fas fa-lock"
        type="password"
        name="confirmPassword"
        disabled={isRegistering}
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {formErrors.firstName && (
        <p className="form-error">{formErrors.firstName}</p>
      )}
      <div className="half-input-container">
        <HalfInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          disabled={isRegistering}
          onChange={handleChange}
        />
        <HalfInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          disabled={isRegistering}
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <button className="register-btn" disabled={isRegistering}>
        Register
      </button>
      <p className="subtext">
        Already have an account?{" "}
        <Link to="/login">
          <span>Login here</span>
        </Link>
      </p>
    </ImageForm>
  );
};

export default Register;
