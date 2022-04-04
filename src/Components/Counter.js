import React from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
`;

const Button = ({ onClick, text }) => {
  return (
    <button className="block" onClick={onClick}>
      {text}
    </button>
  );
};

const Counter = ({ value, setValue, defaultValue }) => {
  const increaseByOne = () => setValue(value + 1);
  const decreaseByOne = () => setValue(value - 1);
  const resetValue = () => setValue(defaultValue || 1);
  return (
    <CounterWrapper>
      <p className="block accent fixed">{value}</p>
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={resetValue} text="reset" />
      <Button onClick={decreaseByOne} text="minus" />
    </CounterWrapper>
  );
};

export default Counter;
