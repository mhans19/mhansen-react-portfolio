import React from 'react';
import { Card } from 'react-bootstrap';

function Experience(props) {
    return (
        <div id="experience">
            <h1 className = "header text-center">Experience</h1>
            <div className="container">
                {props.jobs.map(item => (
                    <div className="row">
                        <div className="col-2">
                        <img style = {{ width: '175px', height: 'auto' }} className="rounded-circle mx-auto d-block" src={require(`../../assets/images/${item.logo}`)}/>
                        </div>
                        <div className="col-10">
                            <Card className="border-0 my-1">
                                <Card.Body>    
                                    <Card.Title><b>{item.employer}</b></Card.Title>                       
                                    <h6 className="card-subtitle text-muted">{item.position}</h6>
                                    <h7 className="card-subtitle mb-2 text-muted">{item.start} - {item.end}</h7>
                                    <Card.Text>
                                        <ul>
                                            {item.description}
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;