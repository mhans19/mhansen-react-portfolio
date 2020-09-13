import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

const proj = [
  {
    id: 1,
    name: 'Budget Tracker',
    img: 'budgettracker.PNG',
    url: 'https://ancient-dawn-71078.herokuapp.com/'
  },
  {
    id: 2,
    name: 'codeBloggers',
    img: 'codebloggers.PNG',
    url: 'https://infinite-springs-68982.herokuapp.com/'
  },
  {
    id: 3,
    name: 'Coding Quiz',
    img: 'codingquiz.PNG',
    url: 'https://mhans19.github.io/coding-quiz//'
  },
  {
    id: 4,
    name: 'eCommerce',
    img: 'ecommerce.PNG',
    url: 'https://github.com/mhans19/e-commerce'
  },
  {
    id: 5,
    name: 'Employee Tracker',
    img: 'employeetracker.PNG',
    url: 'https://github.com/mhans19/employee-tracker'
  },
  {
    id: 6,
    name: 'Horiseon',
    img: 'horiseon.jpg',
    url: 'https://mhans19.github.io/challenge1-accessibility/'
  },
  {
    id: 7,
    name: 'Note Taker',
    img: 'notetaker.PNG',
    url: 'http://hidden-badlands-64622.herokuapp.com/'
  },
  {
    id: 8,
    name: 'Password Generator',
    img: 'passwordgenerator.PNG',
    url: 'https://mhans19.github.io/password-generator/'
  },
  {
    id: 9,
    name: 'README Generator',
    img: 'readmegenerator.PNG',
    url: 'https://github.com/mhans19/readme-generator'
  },
  {
    id: 10,
    name: 'Run Buddy',
    img: 'runbuddy.jpg',
    url: 'https://lernantino.github.io/run-buddy/'
  },
  {
    id: 11,
    name: 'Social Network API',
    img: 'socialnetworkapi.PNG',
    url: 'https://github.com/mhans19/social-network-api'
  },
  {
    id: 12,
    name: 'Team Builder',
    img: 'teambuilder.PNG',
    url: 'https://github.com/mhans19/team-profile'
  },
  {
    id: 13,
    name: 'Timed Out',
    img: 'timedout.PNG',
    url: 'https://protected-caverns-67219.herokuapp.com/'
  },
  {
    id: 14,
    name: 'Weather Dashboard',
    img: 'weatherdashboard.PNG',
    url: 'https://github.com/mhans19/weather-dashboard'
  },
  {
    id: 15,
    name: 'Workday Scheduler',
    img: 'workdayscheduler.PNG',
    url: 'https://mhans19.github.io/workday-scheduler/'
  }
];

function App() {
  return (
  <div class = "wrapper">
      <Nav></Nav>
      <div class="main_content">
        <Hero></Hero>
        <About></About>
        <Projects proj={proj} />
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
  </div>
  );
}

export default App;