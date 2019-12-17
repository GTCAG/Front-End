import React from "react";
import "./DonationDisplay.scss";
import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: "40px",
    marginRight: "20px"
  }
}));

const DonationDisplay = () => {
  const classes = useStyles();
  return (
    <div className="info-card shadow">
      <h2>Donate</h2>
      <div className="donation">
        <PaymentRoundedIcon className={classes.icon} />
        <p>Card/Cash</p>
      </div>
      <div className="donation">
        <i className="fab fa-paypal fa-2x paypal"></i>
        <p>Paypal</p>
      </div>
    </div>
  );
};

export default DonationDisplay;
