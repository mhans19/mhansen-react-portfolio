import React from 'react';
import coverImage from "../../assets/cover/trees.jpg";
import { Jumbotron, Image } from 'react-bootstrap';

function Hero() {
  return (
    <Jumbotron id = "home" style = {{ background: 'white' }}>
        <Image src={coverImage} fluid rounded />
    </Jumbotron>
  );
}

export default Hero;