import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RotatableEmoji from "../Components/RotateText";

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
const CityBox = styled.div`
  display: flex;
  font-family: monospace, monospace;
`;

const TimeSpan = ({ date, flag, timezone }) => {
  return (
    <CityBox>
      <h3 class="block fixed"> {flag}</h3>
      <h3 class="block accent fixed">
        {date.toLocaleTimeString("en-US", { timeZone: timezone })}
      </h3>
    </CityBox>
  );
};

const Clocks = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const locations = [
    { flag: "🇺🇸 San Francisco", timezone: "America/Los_Angeles" },
    { flag: "🇦🇷 Buenos Aires", timezone: "America/Argentina/Buenos_Aires" },
    { flag: "🇬🇧 London", timezone: "Europe/London" },
    { flag: "🇩🇪 Berlin", timezone: "Europe/Berlin" },
    { flag: "🇮🇳 Hyderabad", timezone: "Asia/Calcutta" },
    { flag: "🇹🇼 Taipei", timezone: "Asia/Taipei" },
    { flag: "🇰🇷 Seoul", timezone: "Asia/Seoul" },
  ];

  return (
    <Wrapper>
      <TimeSpan date={date} flag={"✨ You"}></TimeSpan>
      <br></br>
      {locations.map(({ flag, timezone }) => (
        <TimeSpan date={date} flag={flag} timezone={timezone}></TimeSpan>
      ))}
    </Wrapper>
  );
};

const App = () => {
  return (
    <Wrapper>
      <Clocks></Clocks>
      <RotatableEmoji emoji="🌏" size={6} period={30}></RotatableEmoji>
    </Wrapper>
  );
};

export default App;
