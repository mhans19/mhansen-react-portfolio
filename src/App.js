import React, { useState } from 'react';
import NavigationBar from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
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

const schools = [
  {
      schoolid: 1,
      school: 'University of Utah',
      degree : 'Full-Stack Web Development',
      graduated: 'October 2020',
      logo: 'uofulogo.png'
  },
  {
      schoolid: 2,
      school: 'Utah State University',
      degree : 'Master of Science - Quantitative Psychology',
      graduated: 'December 2018',
      logo: 'ususeal.png'
  },
  {
      schoolid: 3,
      school: 'Boise State University',
      degree : 'Bachelor of Science - Psychology & Criminal Justice',
      graduated: 'May 2015',
      logo: 'bsulogo.png'
  }
]

const jobs = [
  {
    jobid: 1,
    logo: 'utahseal.png',
    employer: 'Utah Department of Human Services',
    position: 'Research Consultant',
    start: 'October 2018',
    end: 'Present',
    description: 'Consulting on all research or data related projects for the division. Conducting statistical analyses and developing reports. Working closely with allied agencies, including the Governor’s Office of Budget and Design and Utah Juvenile Court to manage data systems and input, collaborate on joint research projects, and measure performance outcomes across the State. Supporting division grants through research and statistical analysis. Modeling and performing predictive analyses for juvenile risk assessments. Advancing the data collecting, analyzing, and reporting methodologies of the division to include interactive reports.'
  },
  {
    jobid: 2,
    logo: 'ususeal.png',
    employer: 'Utah State University',
    position: 'Graduate Research & Teaching Assistant',
    start: 'Auguest 2016',
    end: 'December 2018',
    description: 'Research Assistantships: Prevention Science Laboratory (Fall 2016 – December 2018) and Statistical Consulting Studio (Summer 2018 – December 2018). Teaching Assistantships: Psychological Statistics (Instructor - Spring 2018),  General Psychology (Developed - Summer 2017), Health Psychology (Developed - Summer 2017), Research Methods (Assisted - Fall 2017), and General Psychology (Fall 2016 & Spring 2017).'
  },
  {
    jobid: 3,
    logo: 'dojseal.png',
    employer: 'U.S. Department of Justice',
    position: "U.S. Attorney's Office - Clerk",
    start: 'July 2012',
    end: 'August 2016',
    description: 'Coordinated the Central Violations Bureau citations for the District of Idaho and was responsible for filing motions and proposed orders with the Courts, worked closely with federal agencies, and maintained arrest warrants, payment agreements, and delinquent cases. Assisted the First Assistant U.S. Attorney with his legal work that included filing motions with the courts in both civil and criminal divisions. Assisted attorneys, legal assistants, and paralegals with projects including scanning, organizing, and redacting discovery and case materials. Assisted with administrative duties including arranging travel, paying invoices, and upholding security procedures for confidential material including Grand Jury and high-profile cases. Performed receptionist-related duties for the last year where I answered and routed incoming calls, acted as the face of the office for guests arriving, and upheld all security procedures related to incoming materials for the Department of Justice, all while upholding my regular duties stated above.'
  },
  {
    jobid: 4,
    logo: 'binghamseal.jpg',
    employer: 'Bingham County Courthouse',
    position: "Intern - Magistrate & District Courts",
    start: 'August 2010',
    end: 'May 2011',
    description: 'Performed office deliveries, sorted and distributed mail, and worked with the county computer system to docket case pleadings. Filed and maintained criminal, civil, juvenile, and specialty case files including drug court, mental health court, and family adoption files. Imputed information into the iStars system for mental, misdemeanor, felony and juvenile drug courts. Assisted Magistrate and District Court clerks and judges with various duties and miscellaneous requests.'
  }
]

function App() {

  const [currentPage, handlePageChange] = useState('Hero');

    const PopulatePage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Education':
          return <Education schools = {schools} />;
        case 'Experience':
          return <Experience jobs = {jobs} />;
        case 'Projects':
          return <Projects proj={proj} />;
        case 'ContactForm':
          return <ContactForm />;
        default:
          return <Hero />;
      }
    };


  return (
    <main>
        <div>
            <NavigationBar currentPage={currentPage} handlePageChange={handlePageChange}></NavigationBar>
            <div>{PopulatePage(currentPage)}</div>
        </div>
        <div>
        <Footer></Footer>
      </div>
    </main>
  );
}

export default App;