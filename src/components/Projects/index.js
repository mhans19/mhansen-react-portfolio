import React from 'react';
import { Card } from 'react-bootstrap';

function Projects(props) {
  return (
    <div id="projects">
        <div class="container my-4">
            <div class="row">
                {props.proj.map(item => (
                    <Card style={{ width: '22rem', margin: '10px', padding:'10px' }}>
                      <Card.Img variant="top" src={require(`../../assets/images/${item.img}`)}/>
                      <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                      </Card.Body>
                      <Card.Body>
                          <Card.Link href={item.url}>GitHub Repository </Card.Link>
                          <Card.Link href={item.url}>Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Projects;