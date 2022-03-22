import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./index.css";

const Sign = ({ bioLink }) => {
  return (
    <p class="block fixed">
      {" "}
      Made by{" "}
      <a href={bioLink} target="_blank">
        {" "}
        Yueh-Han
      </a>
    </p>
  );
};

const Bar = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 4rem;
`;

const NavBar = () => {
  return (
    <Bar class="block fixed">
      <Link class="block" to="/">
        Home
      </Link>
      <Link class="block" to="/counter">
        Counter
      </Link>
      <Sign bioLink="https://github.com/bojne"></Sign>
    </Bar>
  );
};

export default NavBar;
