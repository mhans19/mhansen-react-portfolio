import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  
  return (
  <div class = "wrapper">
      <Nav></Nav>
      <div class="main_content">
        <About></About>
        <ContactForm></ContactForm>
      </div>
  </div>
  );
}

export default App;
