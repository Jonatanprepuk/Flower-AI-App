import React, { useState } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import LoadingSymbol from "./LoadingSymbol";
import "./ImageUpload.css";
import imageSymbol from "./content/add-image.png";

function ImageUpload() {
  const fileTypes = ["JPG", "PNG"];
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (file) => {
    removeOldPrediction();
    setFile(file);
  };

  const removeOldPrediction = () => {
    setPrediction("");
    setConfidence("");
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const showImage = () => {
    if (file) {
      return (
        <>
          <img
            src={URL.createObjectURL(file)}
            alt="uploaded"
            className="uploaded-image"
          />
        </>
      );
    } else {
      return (
        <img src={imageSymbol} alt="uploaded" className="uploaded-image" />
      );
    }
  };
  const showPrediction = () => {
    if (prediction) {
      return (
        <>
          <h3 className="prediction-text">
            {prediction} ({confidence}%)
          </h3>
        </>
      );
    } else if (isLoading) {
      return <LoadingSymbol className="loading-symbol" />
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
          <div>
            <p className="dropbox-text">
              <b>Choose a file</b>&#160;or drag it here. {showImage()}
            </p>
          </div>
        </FileUploader>
        <button className="submit-button" type="submit">
          Identify
        </button>
        <div className="prediction">{showPrediction()}</div>
      </form>
    </div>
  );
}

export default ImageUpload;
