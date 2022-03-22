import React, { useState } from "react";
import styled from "styled-components";
import Counter from "../Components/Counter";
import RotatableEmoji from "../Components/RotateText";
const Layout = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 30%;
  display: flex;
`;

const OrbitApp2 = () => {
  const defaultSize = 6;
  const [size, setCounter] = useState(defaultSize);
  const [period, setPeriod] = useState(defaultSize);

  return (
    <Layout>
      <Counter
        value={size}
        setValue={setCounter}
        defaultValue={defaultSize}
      ></Counter>
      <Counter value={period} setValue={setPeriod} defaultValue={10}>
        Period
      </Counter>
      <renderEmoji />
      <Container>
        <RotatableEmoji
          emoji="🌏"
          size={size}
          period={10 / period}
        ></RotatableEmoji>
        <RotatableEmoji
          emoji="🌓"
          size={size}
          period={4}
          initDeg={30}
        ></RotatableEmoji>
        <RotatableEmoji emoji="🌍" period={10} size={size}></RotatableEmoji>
      </Container>
    </Layout>
  );
};

export default OrbitApp2;
