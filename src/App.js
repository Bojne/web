import React from "react";
import { Routes, Route } from "react-router-dom";

import OrbitApp from "./pages/OrbitApp";

const Home = () => {
  return <div>This is home! </div>;
};
const App = () => {
  return (
    <Routes>
      {" "}
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/orbit" element={<OrbitApp />}></Route>
    </Routes>
  );
};

export default App;
