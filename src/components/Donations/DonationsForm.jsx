import React, { useState } from "react";
import ImageForm from "../ImageForm/ImageForm";
import bgImg from "../../images/donate1.jpg";
import styled from "styled-components";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

const FormContainer = styled.div`
  height: 650px;
  width: 100%;
`;

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        fontFamily: "Open Sans, sans-serif",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#c23d4b"
      }
    }
  };
};

const CardInput = styled.div`
  .StripeElement {
    padding: 20px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: white;
    margin: 10px 0 20px 0;
    // font-family: "Source Code Pro", monospace;
    font-family: Open Sans, sans-serif;

    max-width: 500px;
  }
  &:focus,
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }
`;

const InputLabel = styled.label`
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  font-weight: 500;

  color: #6b7c93;
  // font-weight: 300;
  letter-spacing: 0.025em;
  cursor: default;
`;

const InputField = styled.input`
  padding: 20px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  color: #424770;
  border-radius: 4px;
  background: white;
  margin: 10px 0 20px 0;
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  font-weight: 500;
  max-width: 500px;

  &::placeholder {
    color: #aab7c4;
  }

  &:focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }
`;

const AmountInput = styled.input`
  padding: 20px 14px 0px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  box-sizing: border-box;
  outline: 0;
  border-radius: 4px;
  background: #333;
  margin: 10px 0 20px 0;
  font-size: 70px;
  width: 100%;
  max-width: 500px;
  color: white;

  &:focus,
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  padding: 20px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  box-sizing: border-box;
  outline: 0;
  border-radius: 4px;
  background: #333;
  margin: 10px 0 20px 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 70px;
  width: 100%;
  max-width: 500px;
  color: white;

  &:focus,
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }
`;

const DonationsForm = ({ stripe }) => {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleAmountChange = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);
    const { token } = await stripe.createToken({ name });
    console.log("Token: ", token);

    axios
      .post("http://localhost:4000/charge", { id: token.id, amount: amount })
      .then(res => {
        console.log("Response: ", res);
      })
      .catch(err => {
        console.log(err.response);
      });

    setProcessing(false);
  };

  return (
    <FormContainer>
      <ImageForm img={bgImg} handleSubmit={handleSubmit}>
        <h2>Donate by Card</h2>
        <p>Enter an amount to give</p>
        <AmountContainer>
          $
          <AmountInput
            type="number"
            onChange={handleAmountChange}
            value={amount}
            min="0"
            step="0.01"
          />
        </AmountContainer>
        <InputLabel htmlFor="name">Full Name</InputLabel>
        <InputField
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
          id="name"
          name="name"
        />
        <InputLabel>Card Details</InputLabel>
        <CardInput>
          <CardElement {...createOptions()} />
        </CardInput>
        <button type="submit" disabled={processing}>
          Pay
        </button>
      </ImageForm>
    </FormContainer>
  );
};

export default injectStripe(DonationsForm);
