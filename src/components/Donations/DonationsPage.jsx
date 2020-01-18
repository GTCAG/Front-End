import React from "react";
import ImageForm from "../ImageForm/ImageForm";
import bgImg from "../../images/people1.jpg";
import styled from "styled-components";
import IconInput from "../ImageForm/IconInput";

const FormContainer = styled.div`
  height: 600px;
  width: 100%;
`;

const DonationsPage = () => {
  return (
    <FormContainer>
      <ImageForm img={bgImg}>
        <h2>Login</h2>
        <p>Enter your details below to continue</p>
        <IconInput
          type="password"
          name="something"
          value="Test Value"
          iconClass="fas fa-lock"
        />
        <button disabled={false}>Login</button>
      </ImageForm>
    </FormContainer>
  );
};

export default DonationsPage;
