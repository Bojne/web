import React, { useState } from "react";
import { TextInput, Select } from "@mantine/core";
import SentenceToWords from "../Components/Sentence";
import styled from "styled-components";
var pos = require("pos");

const Wrapper = styled.div`
  display: flex;
  row-gap: 10px;
  margin-top: 2rem;
`;
let tagger = new pos.Tagger();

const isStessWord = (word) => {
  // tag that required stress
  const stesssTag = ["NN", "NNP", "NNS", "NNPS", "JJ", "VB", "VBG"];
  let words = new pos.Lexer().lex(word);
  let taggedWord = tagger.tag(words);
  console.log(taggedWord);
  return stesssTag.includes(taggedWord[0][1]);
};

const WordTagging = ({ sentence }) => {
  const wordArray = sentence.split(" ");
  const tags = wordArray.map((w) => isStessWord(w));
  console.log(tags);
  console.log(wordArray);
  return <SentenceToWords sentence={wordArray} tags={tags}></SentenceToWords>;
};

const StressWordApp = () => {
  const texts = [
    "They've been learning English for two months.",
    "My friends have nothing to do this weekend.",
    "I would have visited in April if I had known Peter was in town.",
    "Natalie will have been studying for four hours by six o'clock.",
    "The boys and I will spend the weekend next to the lake fishing for trout.",
    "Jennifer and Alice had finished the report before it was due last week.",
  ];
  const [text, setText] = useState(texts[0]);
  const [inputText, setInputText] = useState(texts[0]);

  return (
    <Wrapper>
      <Select
        label="Select a sentence"
        placeholder="Pick one"
        value={text}
        onChange={setText}
        data={texts.map((sen) => ({ value: sen, label: sen }))}
      />
      <WordTagging sentence={text ? text : "NA"}></WordTagging>
      <br></br>
      <TextInput
        label="Or type/paste your own sentence"
        value={inputText}
        onChange={(event) => setInputText(event.currentTarget.value)}
      />
      <WordTagging sentence={inputText ? inputText : "NA"}></WordTagging>
    </Wrapper>
  );
};
export default StressWordApp;
