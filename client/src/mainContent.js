import React from "react";
import ImageUpload from "./ImageUpload";
import "./mainContent.css";

function MainContent() {
  return (
    <div className="card-div">
      <div className="background-image" >
      </div>
      <h1 className="image-header">IDENTIFY FLOWERS WITH AI</h1>
      <ImageUpload />
    </div>
  );
}

export default MainContent;
