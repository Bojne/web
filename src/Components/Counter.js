import React, { useState } from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
`;

const Button = (props) => {
  return (
    <button class="block" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);
  return (
    <CounterWrapper class="card block">
      <p class="block accent fixed">{counter}</p>
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </CounterWrapper>
  );
};

export default Counter;
