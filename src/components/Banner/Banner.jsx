import React from "react";
import "./Banner.css";
import backgroundImage from "../../assets/imageBanner.jpg";

const Banner = () => {
  return (
    <div className="image-container">
      <img src={backgroundImage}  alt="Overlay" className="background-image" />
      <div className="gradient-overlay" />
      <div className="text-overlay">
        <h2>Soluções sustentáveis <br/>para o seu negócio</h2>
        <p>
        A TerraForte Plantar traz serviços <br/>no ambito ambiental que abrangem todas <br/>as suas necessidades
        </p>
      </div>
    </div>
  );
};

export default Banner;
