import React from 'react';
import { Card } from 'react-bootstrap';

function Resume(props) {
    return (
        <div id="resume">
            <h1 className = "header text-center">Resume</h1>
            <button type="submit" href="https://github.com/mhans19/mhansen-react-portfolio/src/assets/Resume2020.pdf">Download My Resume</button>
            <div className="container">
                {props.experiences.map(item => (
                    <div className="row">
                        <div className="col-2">
                        <img style = {{ width: '175px', height: 'auto' }} className="rounded-circle mx-auto d-block" src={require(`../../assets/images/${item.logo}`)}/>
                        </div>
                        <div className="col-10">
                            <Card className="border-0 my-1">
                                <Card.Body>    
                                    <Card.Title><b>{item.where}</b></Card.Title>                       
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

export default Resume;