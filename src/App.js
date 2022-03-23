import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import OrbitApp2 from "./pages/OrbitApp";
import OrbitApp from "./pages/CounterApp";
import EmojiRing from "./pages/MoonApp";
import ClockApp from "./pages/ClockApp";
import styled from "styled-components";
import "./index.css";

const Sign = ({ bioLink }) => {
  return (
    <p class="block fixed">
      {" "}
      Made by <a href={bioLink}> Yueh-Han</a>
    </p>
  );
};

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-right: 4rem;
  padding: 0.7rem;
  background-color: #d6e5fa;
  border-radius: 1rem;
`;

const NavBar = () => {
  return (
    <Bar>
      <Link class="block" to="/">
        Home
      </Link>
      <Link class="block" to="/counter">
        Counter
      </Link>
      <Link class="block" to="/moon">
        Moon
      </Link>
      <Link class="block" to="/clocks">
        Clocks
      </Link>

      <Sign bioLink="https://github.com/bojne"></Sign>
    </Bar>
  );
};

const Container = styled.div`
  margin-left: 5em;
`;

const App = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<OrbitApp2 />}></Route>
        <Route exact path="/counter" element={<OrbitApp />}></Route>
        <Route exact path="/moon" element={<EmojiRing />}></Route>
        <Route exact path="/clocks" element={<ClockApp />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
