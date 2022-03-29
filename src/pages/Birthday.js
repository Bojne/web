import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: monospace, monospace;
  margin-top: 3rem;
`;
const NoteWrapper = styled.p`
  margin-top: 30rem;
  font-size: 0.87rem;
  color: grey;
  width: 20rem;
`;

const BirthdayApp = () => {
  const [date, setDate] = useState(new Date());
  const msInYear = 365.25 * 24 * 60 * 6 * 10000;
  const dateDiffInMs = (date - new Date(1999, 2, 28)) / msInYear;

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 10);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Wrapper>
      {dateDiffInMs.toString().slice(0, 12)}

      <NoteWrapper>
        Update 2: OMG I figured it out! The `Date` ojbect in JavaScript
        initialized using the month index. So number 3 refers to April. What a
        trap.
      </NoteWrapper>
      <NoteWrapper>
        Update 1: Well, I can't actually figured out why it's not perfectly
        matching the time. Puzzle for next time!{" "}
      </NoteWrapper>
    </Wrapper>
  );
};

export default BirthdayApp;
