import React, { Component, useState } from "react";
import styled, { keyframes } from "styled-components";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button class="block" onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        {/* <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button> */}
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

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

const CounterSet = () => {
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
      <a href={bioLink} target="_blank" rel="noopener noreferrer">
        {" "}
        Yueh-Han
      </a>
    </p>
  );
};

const App = () => {
  return (
    <Layout>
      <CounterSet />
      <CounterSet />
      <CounterSet />
      <CounterSet />
      <CounterSet />
      <CounterSet />
      <LambdaDemo />
      <Rotate>
        &lt; <span>🌏 🌝</span> &gt;
      </Rotate>
      <Sign bioLink="https://github.com/bojne"></Sign>
    </Layout>
  );
};

export default App;
