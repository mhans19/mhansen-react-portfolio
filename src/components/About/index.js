import React from 'react';

function About() {
  return (
    <div id="about">
      <h1 className = "header">About</h1>
      <div className ="card">
          <div className ="card-body">
              <blockquote className ="blockquote px-5">
                  <h2>Hello.</h2>
                  <p>
                      My name is Morgan Hansen and I am a 27 year old Idaho native, Utah implant. I am a data scientist, wife, and dog-mom to my mini wiener dog, Romy. 
                      I am 10,000% a homebody and introvert that loves reading, creating, and occasionally binge-watching the latest and greatest TV shows. In 2018, I 
                      obtained my Master of Science degree in Quantitative Psychology from Utah State University and quickly after, began working for the Utah Department 
                      Department of Human Services as a Research Consultant for the Division of Juvenile Justice Services. To pursue my data science and developent passion 
                      further, I began a Full Stack Development program in April 2020, at the University of Utah, and am expected to finish by October 2020.
                  </p>
              </blockquote>
          </div>
      </div>
    </div>
  );
}

export default About;