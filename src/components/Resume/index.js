import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Resume(props) {
    return (
        <section id="resume">
            <h1 className = "header text-center text-info">Resume</h1>
            <div className = "text-center">
                <Button className = "mx-1" href='https://drive.google.com/file/d/1-qGXj4XT_lxswNiSimgvjou8XgvxBTxx/view?usp=sharing' variant="secondary" target='_blank'> Download Resume</Button>
            </div>
            <div className="container">
                {props.experiences.map(item => (
                    <div className="row">
                        <div className="col-lg-2">
                            <img style = {{ width: '175px', height: 'auto' }} className="rounded-circle mx-auto d-block" src={require(`../../assets/images/${item.logo}`)}/>
                        </div>
                        <div className="col-lg-10">
                            <Card className="border-0 my-1">
                                <Card.Body>    
                                    <Card.Title className = "text-info"><b>{item.where}</b></Card.Title>                       
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
                <ul className = "row">
                    <ul className = "col-4">
                        <ul>
                            <h3 className = "text-info">Statistical Software</h3>
                            <li>R</li>
                            <li>SPSS</li>
                            <li>Hyperion</li>
                            <li>Mplus</li>
                        </ul>
                    </ul>
                    <ul className = "col-4">
                        <ul>
                            <h3 className = "text-info">Front-End Web-Development</h3>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>React.js</li>
                            <li>IndexedDB</li>
                            <li>Foundation by Zurb</li>
                        </ul>
                    </ul>
                    <ul className = "col-4">
                        <ul>
                            <h3 className = "text-info">Back-End Web-Development</h3>
                            <li>Node.js</li>
                            <li>SQL - mySQL, sqlite</li>
                            <li>Sequelize</li>
                            <li>NoSQL - MongoDB, Mongoose</li>
                        </ul>
                    </ul>
                </ul>
            </div>
        </section>
    );
}

export default Resume;


