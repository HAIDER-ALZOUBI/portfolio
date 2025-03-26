import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => (
  <div id="about" className="py-5 bg-white">
    <Container>
      <h2 className="text-center mb-4">About Me</h2>
      <p className="lead text-center mx-auto" style={{ maxWidth: '700px' }}>
        I'm Haider Alzoubi — a computer science undergrad at UIC and a freelance web developer based in Chicago. I specialize in building responsive, user-friendly websites and web apps using React and Bootstrap. Whether it's a personal project or a client job, I aim to build clean, modern, and functional designs.
      </p>
    </Container>
  </div>
);

export default About;
