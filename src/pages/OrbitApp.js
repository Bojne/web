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

const Sign = ({ bioLink }) => {
  return (
    <p>
      {" "}
      Made by{" "}
      <a href={bioLink} target="_blank">
        {" "}
        Yueh-Han
      </a>
    </p>
  );
};

const Container = styled.div`
  width: 50%;
`;

const App = () => {
  const [counter, setCounter] = useState(1);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToOne = () => setCounter(1);
  return (
    <Layout>
      <Sign bioLink="https://github.com/bojne"></Sign>
      <CounterWrapper class="card block">
        <p class="block accent fixed">{counter}</p>
        <Button onClick={increaseByOne} text="plus" />
        <Button onClick={setToOne} text="one" />
        <Button onClick={decreaseByOne} text="minus" />
      </CounterWrapper>
      <Container>
        <Rotate size={counter}>
          &lt; <span role="img">🌏</span>&gt;
        </Rotate>
      </Container>
    </Layout>
  );
};

export default App;
