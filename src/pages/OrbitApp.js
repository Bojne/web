import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Counter from "../Components/Counter";
const Button = (props) => {
  return (
    <button class="block" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const CounterWrapper = styled.div`
  display: flex;
`;

// Here we create a component that will rotate everything we pass in over two seconds

const Layout = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

const RotatableEmoji = ({ emoji, size, initDeg, period }) => {
  const rotate = keyframes`
  from {
    transform: rotate(${() => initDeg || 0}deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
  const Rotate = styled.div`
    animation: ${rotate} ${() => period || 30}s linear infinite;
    padding: 2rem 1rem;
    font-size: ${(props) => props.size}rem;
  `;
  return (
    <Rotate size={size}>
      <span role="img" aria-label="earth">
        {emoji}
      </span>
    </Rotate>
  );
};

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
