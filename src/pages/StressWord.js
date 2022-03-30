import React, { useState } from "react";
import { TextInput } from "@mantine/core";
import SentenceToWords from "../Components/Sentence";
import styled from "styled-components";
var pos = require("pos");

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const WordTagging = ({ sentence }) => {
  let words = new pos.Lexer().lex(sentence);
  let tagger = new pos.Tagger();
  let taggedWords = tagger.tag(words);
  const stesssTag = ["NN", "NNP", "JJ"];
  let tags = taggedWords.map(([w, tag]) => stesssTag.includes(tag));
  console.log(tags);
  console.log(taggedWords);
  return <SentenceToWords sentence={sentence} tags={tags}></SentenceToWords>;
};

const StressWordApp = () => {
  const text =
    "Jennifer and Alice had finished the report before it was due last week.";
  const [value, setValue] = useState(text);
  return (
    <Wrapper>
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <WordTagging sentence={value}></WordTagging>
      <SentenceToWords sentence={value}></SentenceToWords>
    </Wrapper>
  );
};
export default StressWordApp;
