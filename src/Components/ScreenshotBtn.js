import React from "react";
import * as htmlToImage from "html-to-image";
import { Button } from "@mantine/core";
const ScreenshotBtn = ({ ref }) => {
  var node = document.getElementById("root");
  const doScreenshot = () => {
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "collage.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <Button onClick={doScreenshot}>
      <p>screenshot </p>
    </Button>
  );
};

export default ScreenshotBtn;
