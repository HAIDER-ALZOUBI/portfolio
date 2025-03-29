import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Project images (make sure these exist in your /src/assets folder)
import blackjackImg from '../assets/blackjack.png';
import urhealthImg from '../assets/urhealth.png';
import messagingImg from '../assets/messaging.png';

const projects = [
  {
    title: "Blackjack Game",
    desc: "A browser-based Blackjack game built with JavaScript and React.",
    link: "https://github.com/HAIDER-ALZOUBI/BlackJackJavaGame",
    image: blackjackImg,
  },
  {
    title: "URHealth",
    desc: "A health tracker app that monitors symptoms, medications, and appointments.",
    link: "https://github.com/cs-440-at-uic/440-Group-4-Spring-2025",
    image: urhealthImg,
  },
  {
    title: "Messaging App",
    desc: "A real-time chat app built with Firebase and React.",
    link: "https://github.com/HAIDER-ALZOUBI/MessagingAppJava",
    image: messagingImg,
  },
  {
    title: "See More Projects",
    desc: "Visit my GitHub to explore more of my work and side projects.",
    link: "https://github.com/HAIDER-ALZOUBI",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
];

const Projects = () => (
  <div id="projects" className="py-5 bg-white">
    <Container>
      <h2 className="text-center mb-5">Projects</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <div className="card-tile d-flex card-hover h-100">
              <div className="project-info flex-fill p-4">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <Button
                  variant={idx === 3 ? "dark" : "primary"}
                  href={project.link}
                  target="_blank"
                >
                  {idx === 3 ? "GitHub Profile" : "View on GitHub"}
                </Button>
              </div>
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Projects;
