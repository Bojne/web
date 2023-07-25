import React from "react";
import styled from "styled-components";
import ImageUpload from "../Components/ImageUpload";

const Wrapper = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: monospace, monospace;
  margin-top: 3rem;
`;

const ImageUploadApp = () => {
  return (
    <Wrapper>
      <ImageUpload />
    </Wrapper>
  );
};

export default ImageUploadApp;
