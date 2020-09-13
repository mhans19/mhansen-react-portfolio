import React from 'react';
import profilepic from "../../assets/images/profilepic.jpg";

function About() {
  return (
  <section>
    <div id="about">
      <div className ="card" style = {{ border: 'none' }}>
          <div className ="card-body">
              <div>
                <img style = {{ width: '200px', height: 'auto' }} className="rounded-circle mx-auto d-block" src={profilepic}/>
              </div><br></br>
              <blockquote className ="blockquote px-5">
                  <h1 className = "text-center">Hi. I'm Morgan Hansen.</h1>
                  <h4 className = "text-center">
                    I'm a Utah based Data Scientist and Full Stack Web Developer.<br></br>
                    I have strong skills and interests in statistics, research, and web development.<br></br><br></br>
                  </h4>
                  <p className = "text-center">
                    I am a 27 year old Idaho native, Utah implant. I am a newlywed and dog-mom to my mini wiener dog, Romy. 
                    I am a complete homebody and introvert that loves reading, creating, and occasionally binge-watching the latest and greatest TV shows. <br></br><br></br>
                    In 2015, I graduated from Boise State University with dual Bachelor of Science degrees in Psychology and Criminal Justice. In 2016, I 
                    moved to Utah and in 2018, earned my Master of Science degree in Quantitative Psychology from Utah State University. Shortly after graduating,
                    I began working for the Utah Department Department of Human Services as a Research Consultant for the Division of Juvenile Justice Services. 
                    In 2020, I chose to develop my deep passion for data science and programming further by becaming a full-stack web developer.
                  </p>
              </blockquote>
          </div>
      </div>
    </div>
  </section>
  );
}

export default About;