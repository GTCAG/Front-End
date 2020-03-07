import React, { useState } from "react";

import styled from "styled-components";
import ImageForm from "../ImageForm/ImageForm";
import bgImg from "../../images/contact.jpg";
import IconInput from "../ImageForm/IconInput";
import TextArea from "../ImageForm/TextArea";
import { axiosAuth } from "../../axiosWithAuth";
import InfoSnack from "../FeedbackComponents/InfoSnack";

const Container = styled.div`
  height: 600px;
`;

const Button = styled.button`
  margin-top: 10px;
`;

const initialFormData = {
  name: "",
  email: "",
  message: ""
};

const ContactPage = () => {
  const [snack, setSnack] = useState({ open: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.email.length === 0) {
      alert("Please put an email for the contact form");
      return;
    }

    if (formData.name.length === 0) {
      alert("Please put a name for the contact form");
      return;
    }

    if (formData.message.length === 0) {
      alert("Please fill out the message body before submitting");
      return;
    }
    setLoading(true);
    axiosAuth()
      .post("/contact", formData)
      .then(res => {
        setFormData(initialFormData);
        setLoading(false);
        setSnack({ open: true, message: "Contact form submitted!" });
        console.log("Response: ", res);
      })
      .catch(err => {
        console.log("Error", err.response);
        setLoading(false);
        setSnack({
          open: true,
          message: "There was an error submitting the contact form!"
        });
      });
  };
  return (
    <Container>
      <InfoSnack
        open={snack.open}
        message={snack.message}
        onClose={() => setSnack({ open: false, message: "" })}
      />
      <ImageForm handleSubmit={handleSubmit} img={bgImg} loading={loading}>
        <h2>Contact Us</h2>
        <p>Fill out the form below and we'll take a look at your message!</p>
        <IconInput
          iconClass="fas fa-user"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <IconInput
          iconClass="far fa-envelope"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <TextArea
          name="message"
          rows="4"
          placeholder="Message"
          onChange={handleChange}
        />

        <Button>Submit</Button>
      </ImageForm>
    </Container>
  );
};

export default ContactPage;
