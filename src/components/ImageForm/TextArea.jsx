import React from "react";

import styled from "styled-components";

const Root = styled.textarea`
  border-style: none;
  padding: 8px 15px;
  color: #535353;
  font-size: 18px;
  background-color: #eeeeee;
  outline: none;
  border-radius: 4px;

  margin: 10px 0px;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
`;

const TextArea = props => {
  return <Root {...props}></Root>;
};

export default TextArea;
