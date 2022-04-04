import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import OrbitApp2 from "./pages/OrbitApp";
import OrbitApp from "./pages/CounterApp";
import EmojiRing from "./pages/MoonApp";
import ClockApp from "./pages/ClockApp";
import styled from "styled-components";
import "./index.css";
import BirthdayApp from "./pages/Birthday";
import TextSelectApp from "./pages/TextSelect";
import StressWordApp from "./pages/StressWord";
import DragObject from "./pages/DragObject";

const Sign = ({ bioLink }) => {
  return (
    <p className="block fixed">
      {" "}
      Made by <a href={bioLink}> Yueh-Han</a>
    </p>
  );
};

const Bar = styled.div`
  display: inline-flex;
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
      <Link className="block" to="/">
        Home
      </Link>
      <Link className="block" to="/counter">
        Counter
      </Link>
      <Link className="block" to="/moon">
        Moon
      </Link>
      <Link className="block" to="/clocks">
        Clocks
      </Link>
      <Link className="block" to="/bday">
        B-day
      </Link>
      <Link className="block" to="/text-select">
        Text Select
      </Link>
      <Link className="block" to="/stress-words">
        Stress Words
      </Link>
      <Link className="block" to="/collage">
        Collage
      </Link>
      <Sign bioLink="https://github.com/bojne"></Sign>
    </Bar>
  );
};

const Container = styled.div`
  padding-left: 5em;
  background-color: white;
  width: 100%;
  height: 100%;
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
        <Route exact path="/bday" element={<BirthdayApp />}></Route>
        <Route exact path="/text-select" element={<TextSelectApp />}></Route>
        <Route exact path="/stress-words" element={<StressWordApp />}></Route>
        <Route exact path="/collage" element={<DragObject />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
