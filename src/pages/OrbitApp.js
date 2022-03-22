import React, { Component, useState } from "react";
import styled, { keyframes } from "styled-components";

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
  animation: ${rotate} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: ${(props) => props.size}rem;
`;

const Layout = styled.div`
  margin-left: 5rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const RotatableEmoji = ({ emoji, size }) => {
  return (
    <Rotate size={size}>
      <span role="img" aria-label="earth">
        {emoji}
      </span>
    </Rotate>
  );
};

const Container = styled.div`
  width: 50%;
`;

const OrbitApp2 = () => {
  const defaultSize = 10;
  const [counter, setCounter] = useState(defaultSize);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const reset = () => setCounter(defaultSize);
  return (
    <Layout>
      <CounterWrapper class="card block">
        <p class="block accent fixed">Size: {counter}</p>
        <Button onClick={increaseByOne} text="plus" />
        <Button onClick={reset} text="reset" />
        <Button onClick={decreaseByOne} text="minus" />
      </CounterWrapper>
      <Container>
        <RotatableEmoji emoji="🌏" size={counter}></RotatableEmoji>
      </Container>
      <RotatableEmoji emoji="🌍" size={counter}></RotatableEmoji>
    </Layout>
  );
};

export default OrbitApp2;
