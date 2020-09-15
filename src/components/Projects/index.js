import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Projects(props) {
  return (
    <div id="projects">
      <h1 className = "header text-center">Projects</h1>
        <div class="container my-4">
            <div class="row">
                {props.proj.map(item => (
                    <Card style={{ width: '22rem', margin: '10px', padding:'10px' }}>
                      <Card.Img variant="top" src={require(`../../assets/images/${item.img}`)}/>
                      <Card.Body className = "text-center">
                          <Card.Title>{item.name}</Card.Title>
                          <Button className = "mx-1" href={item.url} variant="secondary">Repository</Button>
                          <Button href={item.url} variant="secondary">Application</Button>
                      </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Projects;
