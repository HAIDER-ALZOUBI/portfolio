import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pfp from '../assets/pfp.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {
  return (
    <div id="about" className="hero-section d-flex align-items-center text-center text-md-start">
      <Container>
        <Row className="align-items-center gx-3 gy-3">
          {/* Left: pfp + socials */}
          <Col md={4} className="text-center">
            <div className="d-flex flex-column align-items-center">
              <Image
                src={pfp}
                roundedCircle
                fluid
                alt="Haider Alzoubi"
                className="hero-img mb-3"
              />

              {/* Social Icons */}
              <div className="hero-socials d-flex justify-content-center gap-3">
                <a href="https://www.linkedin.com/in/haiderzoubi/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
                <a href="https://github.com/HAIDER-ALZOUBI" target="_blank" rel="noreferrer">
                  <i className="bi bi-github fs-4"></i>
                </a>
                <a href="https://instagram.com/haiderzoubi" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </div>
            </div>
          </Col>


          {/* Right: name, title, description */}
          <Col md={8}>
            <div className="hero-text">
              <h1 className="fw-bold text-primary mb-1">Haider Alzoubi</h1>
              <h5 className="mb-3">Freelance Web Developer in Chicago</h5>
              <p className="lead hero-description">
                I'm currently an undergraduate CS student at UIC. I build responsive,
                dynamic websites and applications using React, Bootstrap, and modern web tools.
              </p>
            </div>
          </Col>
        </Row>

        {/* Scroll Down Section */}
        <div className="scroll-down mt-5 text-center">
          <a href="#services" className="scroll-down-link text-decoration-none">
            <div className="see-more-text mb-2">See More</div>
            <div className="scroll-arrows">
              <i className="bi bi-chevron-down arrow-icon delay-1"></i>
              <i className="bi bi-chevron-down arrow-icon delay-2"></i>
              <i className="bi bi-chevron-down arrow-icon delay-3"></i>
            </div>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
