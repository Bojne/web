import React, { useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import styled from "styled-components";
import Counter from "../Components/Counter";
import ScreenshotBtn from "../Components/ScreenshotBtn";
import logo from "../logo.png";
import thinkingEmoji from "../thinking-face.png";
const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const emojiURL =
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/thinking-face_1f914.png";

const Image = styled.div`
  background-image: url(${logo});
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
      <ScreenshotBtn></ScreenshotBtn>
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

      <Draggable>
        <Resizable
          defaultSize={{
            width: 150,
            height: 150,
          }}
          style={{
            background: `url(${thinkingEmoji})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            // border: "4px dotted blue",
          }}
          lockAspectRatio={true}
        ></Resizable>
      </Draggable>
    </Container>
  );
};

export default DragObject;
