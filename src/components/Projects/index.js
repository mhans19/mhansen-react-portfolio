import React from 'react';
import Card from '../ProjectCard'

function Projects(props) {
  return (
    <div id="projects">
        <h1 class = "header">Projects</h1>
        <div class="container my-4">
            <div class="row">
                {props.proj.map(item => (
                    <Card key={item.id} 
                            name={item.name} 
                            img={item.img} 
                            url={item.url}/>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Projects;