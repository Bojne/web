import React from "react";
import RotatableEmoji from "../Components/RotateText";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  width: 30rem;
  background: rgb(2, 0, 36);
  border-radius: 2rem;
  background: linear-gradient(
    130deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const CloudApp = () => {
  return (
    <Wrapper>
      <RotatableEmoji emoji={"⛅️"} size={5} period={10}></RotatableEmoji>
    </Wrapper>
  );
};

export default CloudApp;
