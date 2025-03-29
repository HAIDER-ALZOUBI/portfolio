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
  {
    title: "Consultation & Project Planning",
    emoji: "🤝",
    desc: "Helping you plan your site structure, tech stack, and roadmap from the ground up.",
  },
];


const Services = () => (
  <div id="services" className="bg-light py-5">
    <Container>
      <h2 className="text-center mb-5">Services</h2>
      <Row>
        {services.map((service, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <div className="card-tile card-hover text-center h-100 p-4">
              <div style={{ fontSize: '2.5rem' }}>{service.emoji}</div>
              <h5 className="mt-3">{service.title}</h5>
              <p>{service.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Services;
