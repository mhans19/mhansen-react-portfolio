import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
  <div class = "wrapper">
      <Nav></Nav>
      <div class="main_content">
        <Hero></Hero>
        <About></About>
      </div>
  </div>
  );
}

export default App;
