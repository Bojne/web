import React from "react";
// import styled, { keyframes } from "styled-components";
import RotatableEmoji from "../Components/RotateText";

const renderEmoji = () => {
  const emojis = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
  return (
    <div>
      <div>
        {emojis.map((emo, index) => (
          <RotatableEmoji
            emoji={emo}
            size={Math.abs(index - emojis.length + 1) + 1}
            period={10}
          ></RotatableEmoji>
        ))}
      </div>
      <div>
        {emojis.map((emo, index) => (
          <RotatableEmoji
            emoji={emo}
            size={Math.abs(index) + 1}
            period={10}
          ></RotatableEmoji>
        ))}
      </div>
      <div>
        {emojis.map((emo, index) => (
          <RotatableEmoji
            emoji={emo}
            size={6}
            period={index + 1}
          ></RotatableEmoji>
        ))}
      </div>
    </div>
  );
};

const EmojiRing = () => {
  return <div>{renderEmoji()}</div>;
};

export default EmojiRing;
