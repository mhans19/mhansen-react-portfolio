import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  return (
  <div class = "wrapper">
      <Nav></Nav>
      <div class="main_content">
        <Hero></Hero>
        <About></About>
        <ContactForm></ContactForm>
      </div>
  </div>
  );
}

export default App;