import React from "react";
import ImageForm from "../ImageForm/ImageForm";
import bgImg from "../../images/donate1.jpg";
import styled from "styled-components";
import IconInput from "../ImageForm/IconInput";
import DonationsForm from "./DonationsForm";
import { Elements } from "react-stripe-elements";

const FormContainer = styled.div`
  height: 600px;
  width: 100%;
`;

const DonationsPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Donation submit");
  };
  return (
    <div>
      <Elements>
        <DonationsForm handleSubmit={handleSubmit} />
      </Elements>
    </div>
  );
};

export default DonationsPage;
