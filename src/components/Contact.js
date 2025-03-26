import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => (
  <div id="contact" className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-4">Contact Me</h2>
      <Row className="text-center">
        <Col md={12}>
          <p><strong>Email:</strong> haiderzoubi05@gmail.com</p>
          <p><strong>Phone:</strong> (708) 270-8806</p>
        </Col>
        <Col className="mt-3">
          <a href="https://www.linkedin.com/in/haiderzoubi/" target="_blank" rel="noreferrer" className="mx-3 text-dark fs-4">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/HAIDER-ALZOUBI" target="_blank" rel="noreferrer" className="mx-3 text-dark fs-4">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://instagram.com/haiderzoubi" target="_blank" rel="noreferrer" className="mx-3 text-dark fs-4">
            <i className="bi bi-instagram"></i>
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
