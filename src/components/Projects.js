import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: "Blackjack Game",
    desc: "A browser-based Blackjack game built with JavaScript and React.",
    link: "https://github.com/HAIDER-ALZOUBI/BlackJackJavaGame",
  },
  {
    title: "URHealth",
    desc: "A health tracker app that monitors symptoms, medications, and appointments.",
    link: "https://github.com/cs-440-at-uic/440-Group-4-Spring-2025",
  },
  {
    title: "Messaging App",
    desc: "A real-time chat app built with Firebase and React.",
    link: "https://github.com/HAIDER-ALZOUBI/MessagingAppJava",
  },
];

const Projects = () => (
  <div id="projects" className="py-5">
    <Container>
      <h2 className="text-center mb-5">Projects</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card className="h-100 text-center card-hover">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.desc}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  View on GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* More Projects card */}
        <Col md={4} className="mb-4">
        <Card className="h-100 text-center card-hover">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <h4>See More Projects</h4>
              <p>Visit my GitHub to explore more of my work.</p>
              <Button variant="dark" href="https://github.com/HAIDER-ALZOUBI" target="_blank">
                GitHub Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Projects;
