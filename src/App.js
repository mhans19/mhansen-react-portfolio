import React, { useState } from 'react';
import NavigationBar from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Projects';
import Footer from './components/Footer';

const proj = [
  {
    id: 1,
    name: 'Budget Tracker',
    img: 'budgettracker.PNG',
    url: 'https://ancient-dawn-71078.herokuapp.com/',
    repo: 'https://github.com/mhans19/budget-tracker'
  },
  {
    id: 2,
    name: 'codeBloggers',
    img: 'codebloggers.PNG',
    url: 'https://infinite-springs-68982.herokuapp.com/',
    repo: 'https://github.com/mhans19/tech-blog'
  },
  {
    id: 3,
    name: 'Note Taker',
    img: 'notetaker.PNG',
    url: 'http://hidden-badlands-64622.herokuapp.com/',
    repo: 'https://github.com/mhans19/note-taker'
  },
  {
    id: 4,
    name: 'Password Generator',
    img: 'passwordgenerator.PNG',
    url: 'https://mhans19.github.io/password-generator/',
    repo: 'https://github.com/mhans19/password-generator'
  },
  {
    id: 5,
    name: 'Timed Out',
    img: 'timedout.PNG',
    url: 'https://protected-caverns-67219.herokuapp.com/',
    repo: 'https://github.com/mhans19/timed-out'
  },
  {
    id: 6,
    name: 'Workday Scheduler',
    img: 'workdayscheduler.PNG',
    url: 'https://mhans19.github.io/workday-scheduler/',
    repo: 'https://github.com/mhans19/workday-scheduler'
  }
];

const experiences = [
  {
    id: 1,
    logo: 'utahseal.png',
    where: 'Utah Department of Human Services',
    position: 'Research Consultant',
    start: 'October 2018',
    end: 'Present',
    description: 'Consulting on all research or data related projects for the division. Conducting statistical analyses and developing reports. Working closely with allied agencies, including the Governor’s Office of Budget and Design and Utah Juvenile Court to manage data systems and input, collaborate on joint research projects, and measure performance outcomes across the State. Supporting division grants through research and statistical analysis. Modeling and performing predictive analyses for juvenile risk assessments. Advancing the data collecting, analyzing, and reporting methodologies of the division to include interactive reports.'
  },
  {
    id: 2,
    logo: 'uofulogo.png',
    where: 'University of Utah',
    position: 'Full-Stack Web Development',
    start: 'April 2020',
    end: 'October 2020',
    description: 'University of Utah Coding Bootcamp'
  },
  {
    id: 2,
    logo: 'ususeal.png',
    where: 'Utah State University',
    position: 'Graduate Research & Teaching Assistant',
    start: 'Auguest 2016',
    end: 'December 2018',
    description: 'Research Assistantships: Prevention Science Laboratory (Fall 2016 – December 2018) and Statistical Consulting Studio (Summer 2018 – December 2018). Teaching Assistantships: Psychological Statistics (Instructor - Spring 2018),  General Psychology (Developed - Summer 2017), Health Psychology (Developed - Summer 2017), Research Methods (Assisted - Fall 2017), and General Psychology (Fall 2016 & Spring 2017).'
  },
  {
    id: 2,
    logo: 'usulogo.png',
    where: 'Utah State University',
    position: 'Master of Science - Quantitative Psychology',
    start: 'Auguest 2016',
    end: 'December 2018',
    description: 'Degree Honors: Summa Cum Laude'
  },
  {
    id: 3,
    logo: 'dojseal.png',
    where: 'U.S. Department of Justice',
    position: "U.S. Attorney's Office - Clerk",
    start: 'July 2012',
    end: 'August 2016',
    description: 'Coordinated the Central Violations Bureau citations for the District of Idaho and was responsible for filing motions and proposed orders with the Courts, worked closely with federal agencies, and maintained arrest warrants, payment agreements, and delinquent cases. Assisted the First Assistant U.S. Attorney with his legal work that included filing motions with the courts in both civil and criminal divisions. Assisted attorneys, legal assistants, and paralegals with projects including scanning, organizing, and redacting discovery and case materials. Assisted with administrative duties including arranging travel, paying invoices, and upholding security procedures for confidential material including Grand Jury and high-profile cases. Performed receptionist-related duties for the last year where I answered and routed incoming calls, acted as the face of the office for guests arriving, and upheld all security procedures related to incoming materials for the Department of Justice, all while upholding my regular duties stated above.'
  },
  {
    id: 3,
    logo: 'bsulogo.png',
    where: 'Boise State University',
    position: "Bachelor of Science - Psychology & Criminal Justice",
    start: 'August 2011',
    end: 'May 2015',
    description: 'Degree Honors: Summa Cum Laude'
  },
  {
    id: 4,
    logo: 'binghamseal.jpg',
    where: 'Bingham County Courthouse',
    position: "Intern - Magistrate & District Courts",
    start: 'August 2010',
    end: 'May 2011',
    description: 'Performed office deliveries, sorted and distributed mail, and worked with the county computer system to docket case pleadings. Filed and maintained criminal, civil, juvenile, and specialty case files including drug court, mental health court, and family adoption files. Imputed information into the iStars system for mental, misdemeanor, felony and juvenile drug courts. Assisted Magistrate and District Court clerks and judges with various duties and miscellaneous requests.'
  }
]

function App() {

  const [currentPage, handlePageChange] = useState('About');

    const PopulatePage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Resume':
          return <Resume experiences = {experiences} />;
        case 'Portfolio':
          return <Portfolio proj={proj} />;
        case 'Contact':
          return <Contact />;
        default:
          return <About />;
      }
    };

  return (
  <body>  
    <main>
        <div>
            <NavigationBar currentPage={currentPage} handlePageChange={handlePageChange}></NavigationBar>
            <div>{PopulatePage(currentPage)}</div>
        </div>
    </main>
    <div>
      <Footer></Footer>
    </div>
  </body>
  );
}

export default App;