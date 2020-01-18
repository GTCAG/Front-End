import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const ImageForm = ({ img, loading, handleSubmit, children }) => {
  const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
  background-image: url(".${img}");
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 525px) {
    display: none;
  }
`;
  return (
    <div className="parentp">
      <div className="parent">
        <ImageContainer />
        <div className="login-half shadow">
          {loading ? (
            <div className="progress-container">
              <CircularProgress />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="login-form ">
              {children}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
