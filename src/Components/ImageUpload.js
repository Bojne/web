import React, { useState } from "react";
import {
  FileInput,
  FileButton,
  Button,
  Group,
  Text,
  Container,
} from "@mantine/core";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ width: "50rem" }}>
      {/* File input */}
      <FileInput
        placeholder="Pick image"
        label="Your image"
        radius="md"
        withAsterisk
        style={{ width: "25rem" }}
        value={selectedImage}
        onChange={setSelectedImage}
      ></FileInput>
      {/* Image preview or other UI elements */}
      <div style={{ maxWidth: "50rem", flex: 1, marginTop: "2rem" }}>
        {selectedImage && (
          <img
            style={{ width: "100%", height: "auto" }}
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
          />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
