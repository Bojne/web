import React from "react";
// import styled, { keyframes } from "styled-components";

const renderEmoji = () => {
  const emojis = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
  return (
    <ul>
      {emojis.map((emo) => (
        <li>{emo}</li>
      ))}
    </ul>
  );
};

const EmojiRing = () => {
  return (
    <div>
      <div class="block wrapper">
        <p>this will be an emoji ring</p>
      </div>
      {renderEmoji()}
    </div>
  );
};

export default EmojiRing;
