import React from 'react';
import profilepic from "../../assets/images/profilepic.jpg";
import { Card } from 'react-bootstrap';

function About() {
  return (
  <div id="about">
    <h1 className = "header text-center">About Me</h1>
    <div className="container">
      <div className="row">
          <img style = {{ width: '200px', height: 'auto' }} className="rounded-circle mx-auto d-block" src={profilepic}/>
          <div>
              <Card className="my-1 border-0">
                  <Card.Body>    
                      <Card.Title className = "text-center header">Hi. I'm Morgan Hansen.</Card.Title>                       
                      <Card.Subtitle className = "text-center mb-1">I'm a Utah based Data Scientist and Full Stack Web Developer.</Card.Subtitle>
                      <Card.Subtitle className = "text-center mb-2">I have strong skills and interests in statistics, research, and web development.</Card.Subtitle>
                      <Card.Text>
                        I am a 27 year old Idaho native, Utah implant. I am a newlywed and dog-mom to my mini wiener dog, Romy. 
                        I am a complete homebody and introvert that loves reading, creating, and occasionally binge-watching the latest and greatest TV shows.
                        In 2015, I graduated from Boise State University with dual Bachelor of Science degrees in Psychology and Criminal Justice. In 2016, I 
                        moved to Utah and in 2018, earned my Master of Science degree in Quantitative Psychology from Utah State University. Shortly after graduating,
                        I began working for the Utah Department Department of Human Services as a Research Consultant for the Division of Juvenile Justice Services. 
                        In 2020, I chose to develop my deep passion for data science and programming further by becaming a full-stack web developer.
                      </Card.Text>
                  </Card.Body>
              </Card>
          </div>
      </div>
    </div>
  </div>
  );
}

export default About;