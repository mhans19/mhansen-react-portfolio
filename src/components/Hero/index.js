import React from 'react';
import coverImage from "../../assets/cover/trees.jpg";

function Hero() {
  return (
    <div className="hero">
        <img src={coverImage} className="img-fluid" alt="Trees image" />
        <h3 className="bottom-right">
            If opportunity doesn’t knock, build a door.<br></br>
            - Milton Berle
        </h3>
    </div>
  );
}

export default Hero;