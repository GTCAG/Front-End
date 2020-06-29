import React from "react";
import "./DonationDisplay.scss";
import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

import venmoIcon from "../../images/icons/venmo.png";
import cashappIcon from "../../images/icons/cash-app.png";

const Icon = styled.img`
  width: 35px;
  margin-right: 15px;
`;

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: "40px",
    marginRight: "20px",
  },
  disabledIcon: {
    fontSize: "40px",
    marginRight: "20px",
    color: "#888",
    opacity: 0.7,
  },
}));

const DonationDisplay = () => {
  const classes = useStyles();
  return (
    <div className="info-card shadow">
      <h2>Donate</h2>
      <p>We accept the following</p>
      <Link to="/donate" className="donation">
        <PaymentRoundedIcon className={classes.icon} />
        <p>Card</p>
      </Link>

      <Link to="/donate" className="donation">
        <i className="fab fa-paypal fa-2x paypal"></i>
        <p>PayPal</p>
      </Link>

      <Link to="/donate" className="donation">
        <Icon src={venmoIcon} />
        <p>Venmo</p>
      </Link>
      <Link to="/donate" className="donation">
        <Icon src={cashappIcon} />
        <p>CashApp</p>
      </Link>
    </div>
  );
};

export default DonationDisplay;
