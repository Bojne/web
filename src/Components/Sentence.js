import React from "react";
import styled from "styled-components";
import { Tooltip, Button } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";

const Sentence = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-top: 2rem;
`;

const Word = ({ text, active = false, tag = null }) => {
  const [selected, setSelected] = useScrollLock(active);
  const color = selected ? "teal" : "gray";
  if (tag) {
    return (
      <Tooltip label={tag}>
        <Button onClick={() => setSelected((c) => !c)} mx={3} color={color}>
          {text}
        </Button>
      </Tooltip>
    );
  }
  return (
    <Button onClick={() => setSelected((c) => !c)} mx={3} color={color}>
      {text}
    </Button>
  );
};

const SentenceToWords = ({ sentence, tags, posType }) => {
  const wordList =
    typeof sentence === typeof "String" ? sentence.split(" ") : sentence;
  return (
    <Sentence>
      {wordList.map((w, id) => (
        <Word
          text={w}
          key={id}
          active={tags ? tags[id] : false}
          tag={posType ? posType[id] : false}
        ></Word>
      ))}
    </Sentence>
  );
};

export default SentenceToWords;
