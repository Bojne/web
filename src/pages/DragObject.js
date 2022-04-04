import React, { useState, useRef, useCallback } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import styled from "styled-components";
import Counter from "../Components/Counter";
import { toPng } from "html-to-image";
import logo from "../logo.png";
import thinkingEmoji from "../thinking-face.png";
import { Button } from "@mantine/core";

const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const Frame = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  width: 50rem;
  height: 30rem;
  border: 1px solid black;
  margin-bottom: 1rem;
`;

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
      bounds="parent"
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
  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
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
      <Frame ref={ref}>
        {balls.map((b, id) => (
          <DraggableEmoji
            key={id}
            size={size}
            setStatus={setStatus}
          ></DraggableEmoji>
        ))}

        <Draggable bounds="parent">
          <Resizable
            defaultSize={{
              width: 150,
              height: 150,
            }}
            style={{
              background: `url(${thinkingEmoji})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            lockAspectRatio={true}
          ></Resizable>
        </Draggable>
      </Frame>
      <Button onClick={onButtonClick}>Screenshot</Button>
    </Container>
  );
};

export default DragObject;
