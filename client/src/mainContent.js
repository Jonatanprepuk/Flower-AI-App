import React from "react";
import ImageUpload from "./ImageUpload";
import image from "./content/background-image.png";
import "./mainContent.css";

function MainContent() {
  return (
    <div className="card-div">
      <div className="background-image" style={{ backgroundImage: `url(${image})` }}>
        
        {/*<img src={image} alt="Flower-image" className='flower-image' />*/}
      </div>
      <h1 className="image-header">IDENTIFY FLOWERS WITH AI</h1>
      <ImageUpload />
    </div>
  );
}

export default MainContent;
