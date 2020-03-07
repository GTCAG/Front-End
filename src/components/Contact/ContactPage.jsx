import React, { useState } from "react";

import styled from "styled-components";
import ImageForm from "../ImageForm/ImageForm";
import bgImg from "../../images/contact.jpg";
import IconInput from "../ImageForm/IconInput";
import TextArea from "../ImageForm/TextArea";

const Container = styled.div`
  height: 600px;
`;

const Button = styled.button`
  margin-top: 10px;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = () => {};

  const handleSubmit = () => {};
  return (
    <Container>
      <ImageForm handleSubmit={handleSubmit} img={bgImg} loading={false}>
        <h2>Contact Us</h2>
        <p>Fill out the form below and we'll take a look at your message!</p>
        <IconInput
          iconClass="fas fa-user"
          type="text"
          name="name"
          placeholder="Name"
        />
        <IconInput
          iconClass="far fa-envelope"
          type="email"
          name="email"
          placeholder="Email"
        />

        <TextArea rows="4" placeholder="Message" />

        <Button>Submit</Button>
      </ImageForm>
    </Container>
  );
};

export default ContactPage;
