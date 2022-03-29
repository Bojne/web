import React from "react";
import styled from "styled-components";
import { Button } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";

const Sentence = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-top: 2rem;
`;

const Word = ({ text }) => {
  const [scrollLocked, setScrollLocked] = useScrollLock();
  const color = scrollLocked ? "teal" : "gray";
  return (
    <Button onClick={() => setScrollLocked((c) => !c)} mx={3} color={color}>
      {text}
    </Button>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const SentenceToWords = ({ sentence }) => {
  const wordList = sentence.split(" ");
  console.log(wordList.map((w) => <div>w</div>));
  return (
    <Sentence>
      {wordList.map((w) => (
        <Word text={w}></Word>
      ))}
    </Sentence>
  );
};

const TextSelectApp = () => {
  const texts = [
    "They've been learning English for two months.",
    "My friends have nothing to do this weekend.",
    "I would have visited in April if I had known Peter was in town.",
    "Natalie will have been studying for four hours by six o'clock.",
    "The boys and I will spend the weekend next to the lake fishing for trout.",
    "Jennifer and Alice had finished the report before it was due last week.",
  ];

  return (
    <Container>
      {texts.map((s) => (
        <SentenceToWords sentence={s}></SentenceToWords>
      ))}
    </Container>
  );
};

export default TextSelectApp;
