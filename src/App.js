import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import OrbitApp2 from "./pages/OrbitApp";
import OrbitApp from "./pages/Counter";

const Home = () => {
  return <div>This is home! </div>;
};

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<OrbitApp2 />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/counter" element={<OrbitApp />}></Route>
      </Routes>
    </div>
  );
};

export default App;
