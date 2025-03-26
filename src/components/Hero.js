import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pfp from '../assets/pfp.jpg';

const Hero = () => {
  return (
    <div className="bg-light py-5" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image 
              src={pfp} 
              roundedCircle 
              fluid 
              alt="Haider Alzoubi"
              style={{ maxHeight: '300px' }}
            />
          </Col>
          <Col md={8}>
            <h1><span className="text-primary">Haider Alzoubi</span></h1>
            <h5>Freelance Web Developer in Chicago</h5>
            <p>
              I'm currently an undergraduate CS student at UIC. I build responsive, 
              dynamic websites and applications using React, Bootstrap, and modern web tools.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
