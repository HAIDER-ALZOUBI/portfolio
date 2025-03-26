import React from 'react';
import Hero from './components/Hero';
import MyNavbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <>
      <MyNavbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
