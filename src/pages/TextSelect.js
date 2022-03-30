import React from "react";
import styled from "styled-components";
import SentenceToWords from "../Components/Sentence";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
      {texts.map((s, id) => (
        <SentenceToWords sentence={s} key={id}></SentenceToWords>
      ))}
    </Container>
  );
};

export default TextSelectApp;
