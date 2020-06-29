import React, { useState } from "react";
import ImageForm from "../ImageForm/ImageForm";
import bgImg from "../../images/donate1.jpg";
import styled from "styled-components";

import paypalIcon from "../../images/icons/paypal_icon.svg";
import paypalTitle from "../../images/icons/paypal_title.svg";

import venmoIcon from "../../images/icons/venmo.png";
import cashappIcon from "../../images/icons/cash-app.png";

const FormContainer = styled.div`
  height: 650px;
  width: 100%;
`;

const Tag = styled.span`
  font-weight: bold;
  font-family: Open Sans, sans-serif;
  letter-spacing: 1px;
  font-size: 24px;
  color: #2c2e2f;
  opacity: 0.83;
`;

const OtherTagIcon = styled.img`
  width: 40px;
  opacity: 0.7;
`;

const OtherContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;

const PayPalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;

  background: #2c2e2f;
  color: #fff;

  font-size: 14.5px;
  height: 50px;
  cursor: pointer;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: 0.25s;

  margin-top: 25px;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
  }
`;
const PaypalIcon = styled.img`
  margin-right: 5px;
  height: 25px;
`;

const PaypalTitle = styled.img`
  height: 25px;
`;

const CashAppTag = styled(Tag)`
  margin-left: 5px;
`;

const DonationsForm = () => {
  const handlePaypalButton = () => {
    window.location.href = "https://www.paypal.com/biz/fund?id=YJCTP942P8MRY";
  };

  return (
    <FormContainer>
      <ImageForm img={bgImg}>
        <h2>Choose how to donate</h2>
        <p>Donate with Venmo, CashApp, or PayPal</p>
        <OtherContainer>
          <OtherTagIcon src={venmoIcon} />
          <Tag>@GTCAG</Tag>
        </OtherContainer>
        <OtherContainer>
          <OtherTagIcon src={cashappIcon} />
          <CashAppTag>$GTCAG</CashAppTag>
        </OtherContainer>
        <PayPalButton onClick={handlePaypalButton}>
          <PaypalIcon src={paypalIcon} />
          <PaypalTitle src={paypalTitle} />
        </PayPalButton>
      </ImageForm>
    </FormContainer>
  );
};

export default DonationsForm;
