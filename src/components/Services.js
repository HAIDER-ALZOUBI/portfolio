import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const services = [
  {
    title: "Web Development",
    emoji: "🌐",
    desc: "Custom websites using React, Bootstrap, and modern tools.",
  },
  {
    title: "Responsive Design",
    emoji: "📱",
    desc: "Sites that look great on phones, tablets, and desktops.",
  },
  {
    title: "Frontend Integration",
    emoji: "⚙️",
    desc: "Connecting APIs, forms, and dynamic features to your site.",
  },
  {
    title: "Portfolio & Resume Sites",
    emoji: "🎯",
    desc: "Personal branding through custom portfolio websites.",
  },
  {
    title: "Fixes & Edits",
    emoji: "🛠",
    desc: "Need a bug fixed or UI improved? I got you.",
  },
];

const Services = () => (
  <div id="services" className="bg-light py-5">
    <Container>
      <h2 className="text-center mb-5">Services</h2>
      <Row>
        {services.map((service, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card className="h-100 text-center card-hover">
              <Card.Body>
                <div style={{ fontSize: '2.5rem' }}>{service.emoji}</div>
                <Card.Title className="mt-3">{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Services;
