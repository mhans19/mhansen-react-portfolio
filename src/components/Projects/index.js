import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Projects(props) {
  return (
    <div id="portfolio">
      <h1 className = "header text-center text-info">Portfolio</h1>
        <div class="container my-4">
            <div class="row">
                {props.proj.map(item => (
                    <Card style={{ width: '18rem', margin: '10px', padding:'10px' }} className = "border-info">
                      <Card.Img variant="top" src={require(`../../assets/images/${item.img}`)}/>
                      <Card.Body className = "text-center">
                          <Card.Title>{item.name}</Card.Title>
                          <Button className = "mx-1" href={item.repo} variant="info" target='_blank'>Repository</Button>
                          <Button href={item.url} variant="info" target='_blank'>Application</Button>
                      </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Projects;
