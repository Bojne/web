import React from "react";
import { toPng } from "html-to-image";
import { Button } from "@mantine/core";
const ScreenshotBtn = ({ refDiv }) => {
  var node = document.getElementById("root");
  const doScreenshot = () => {
    toPng(node)
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
