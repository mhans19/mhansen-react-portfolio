import React from 'react';
import { Card } from 'react-bootstrap';

function Education(props) {
    return (
        <div id="education">
            <h1 className = "header text-center">Education</h1>
            <div className="container">
                {props.schools.map(item => (
                    <div className="row">
                        <div className="col-2">
                        <img style = {{ width: '175px', height: 'auto' }} className="rounded mx-auto d-block" src={require(`../../assets/images/${item.logo}`)}/>
                        </div>
                        <div className="col-10">
                            <div className="card my-1">
                                <Card.Body>    
                                    <Card.Title><b>{item.school}</b></Card.Title>                       
                                    <h6 className="card-subtitle text-muted">{item.degree}</h6>
                                    <h7 className="card-subtitle mb-2 text-muted">{item.graduated}</h7>
                                </Card.Body>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
