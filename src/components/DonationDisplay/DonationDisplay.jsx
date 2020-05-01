import React from "react";
import "./DonationDisplay.scss";
import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

      <Link to="/donate" className="donation">
        <PaymentRoundedIcon className={classes.icon} />
        <p>Card/Cash</p>
      </Link>

      <div className="donation disabled">
        <i className="fab fa-paypal fa-2x paypal"></i>
        <p>Paypal</p>
      </div>
    </div>
  );
};

export default DonationDisplay;
