import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Counter from "../Components/Counter";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 15s linear infinite;
  padding: 2rem 1rem;
  font-size: 3rem;
`;

const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const OrbitApp = () => {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  const [v4, setV4] = useState(0);
  const [v5, setV5] = useState(0);
  const [v6, setV6] = useState(0);

  return (
    <Layout>
      <Counter value={v1} setValue={setV1} />
      <Counter value={v2} setValue={setV2} />
      <Counter value={v3} setValue={setV3} />
      <Counter value={v4} setValue={setV4} />
      <Counter value={v5} setValue={setV5} />
      <Counter value={v6} setValue={setV6} />
      <Rotate>
        <span role="img" aria-label="monkey">
          🙊
        </span>
      </Rotate>
    </Layout>
  );
};

export default OrbitApp;
