import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import Counter from "../Components/Counter";
const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const Image = styled.div`
  background-image: url("https://github.com/Bojne/learn-react/blob/master/public/logo.png?raw=true");
  background-repeat: no-repeat;
  background-size: contain;
  color: gray;
  height: ${(props) => props.size}rem;
  width: ${(props) => props.size}rem;
  border: 4px dotted rgba(255, 255, 255, 0);
  &:hover {
    border: 4px dotted blue;
    cursor: grab;
  }
  &:active {
    border: 4px dotted blue;
    cursor: grabbing;
  }
`;

const DraggableEmoji = ({ size, setStatus }) => {
  const startDragging = () => setStatus("Dragging!");
  const stopDragging = () => setStatus("Done :)");

  return (
    <Draggable
      onStart={startDragging}
      onDrag={startDragging}
      onStop={stopDragging}
    >
      <Image size={size}></Image>
    </Draggable>
  );
};

const FlexContiner = styled.div`
  display: flex;
`;

const DragObject = () => {
  const defSize = 5;
  const [size, setSize] = useState(defSize);
  const [status, setStatus] = useState("Sitting...");
  const balls = Array.from(Array(10).keys());
  return (
    <Container>
      <h3>Status: {status}</h3>
      <FlexContiner>
        <h4>Size: </h4>
        <Counter
          value={size}
          setValue={setSize}
          defaultValue={defSize}
        ></Counter>
      </FlexContiner>
      <FlexContiner>
        {balls.map((b) => (
          <DraggableEmoji size={size} setStatus={setStatus}></DraggableEmoji>
        ))}
      </FlexContiner>
    </Container>
  );
};

export default DragObject;
