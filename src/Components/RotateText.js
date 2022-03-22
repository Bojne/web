import styled, { keyframes } from "styled-components";
import React from "react";

const RotatableEmoji = ({ emoji, size, initDeg, period }) => {
  const rotate = keyframes`
  from {
    transform: rotate(${() => (0 + initDeg).toString() + "deg"}); 
  }

  to {
    transform: rotate(360deg);
  }
`;
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} ${() => period || 30}s linear infinite;
    padding: 2rem 1rem;
    font-size: ${(props) => props.size}rem;
  `;
  return (
    <Rotate size={size}>
      <span role="img" aria-label="earth">
        {emoji || "x"}
      </span>
    </Rotate>
  );
};

export default RotatableEmoji;
