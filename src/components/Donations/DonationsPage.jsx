import React from "react";
import DonationsForm from "./DonationsForm";
import { Elements } from "react-stripe-elements";

const DonationsPage = () => {
  return (
    <div>
      <Elements>
        <DonationsForm />
      </Elements>
    </div>
  );
};

export default DonationsPage;
