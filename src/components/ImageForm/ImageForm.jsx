import React from "react";
import styled, { keyframes } from "styled-components";
import { CircularProgress } from "@material-ui/core";

const widthResize = keyframes`
0% {
  transform: translateY(15%);
  opacity: 0.1;
}

100% {
  transform: translateY(0);
  opacity: 1;
}
`;

const ImageForm = ({ img, loading, handleSubmit, children }) => {
  const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
  background-image: url(".${img}");
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-out;

  
  @media screen and (max-width: 525px) {
    width: 0%;
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
