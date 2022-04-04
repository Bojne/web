import React from "react";
import DraggableObject from "../Components/Dragaable";
import Draggable from "react-draggable";
import RotatableEmoji from "../Components/RotateText";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const DragObject = () => {
  return (
    <Container>
      <Draggable>
        <div>
          <img src="https://github.com/Bojne/learn-react/blob/master/public/logo.png?raw=true"></img>
        </div>
      </Draggable>
    </Container>
  );
};

export default DragObject;
