import React, { useState } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import "./ImageUpload.css";

function ImageUpload() {
  const fileTypes = ["JPG", "PNG"];
  const [file, setFile] = useState(null);
  const [predictionm, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");

  const handleFileChange = (file) => {
    setFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data.prediction);
      setConfidence(response.data.confidence);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="uploader-container">
      <form onSubmit={handleSubmit}>
        <FileUploader
          handleChange={handleFileChange}
          name="file"
          types={fileTypes}
        >
          <div className="file-uploader">
            <p>Drag and drop your image here</p>
          </div>
        </FileUploader>
        <button type="submit">Ladda upp</button>
        <div className="prediction">
          <h3>{predictionm}</h3>
          <h3>{confidence}%</h3>
        </div>
      </form>
    </div>
  );
}

export default ImageUpload;
