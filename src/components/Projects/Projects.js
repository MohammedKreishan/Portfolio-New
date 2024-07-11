import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div className="Projects">
      <Container className="px-4 py-5" id="featured-3">
        <h2
          className="pb-2 border-bottom"
          style={{ textAlign: "center", fontFamily: "cursive" }}
        >
          Projects
        </h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-2" ref={ref}>
          {[
            {
              title: "Book Store",
              text:
                "Developed a dynamic Book Store website using jQuery, CSS, HTML, and JavaScript. Users can browse, search, and purchase books seamlessly. Enhanced user experience with interactive features and a clean, responsive design.",
              link: "https://k-book.netlify.app/",
              linkText: "Demo",
            },
            {
              title: "Elevate Your Skills in Digital Marketing",
              text:
                "Embark on a transformative journey in Marketing and Business with our dynamic courses designed to enhance your digital marketing skills and strategic thinking.",
              link: "#",
              linkText: "Explore Courses",
            },
            {
              title: "Elevate Your Skills in Digital Marketing",
              text:
                "Embark on a transformative journey in Marketing and Business with our dynamic courses designed to enhance your digital marketing skills and strategic thinking.",
              link: "#",
              linkText: "Explore Courses",
            },
            {
              title: "Elevate Your Skills in Digital Marketing",
              text:
                "Embark on a transformative journey in Marketing and Business with our dynamic courses designed to enhance your digital marketing skills and strategic thinking.",
              link: "#",
              linkText: "Explore Courses",
            },
          ].map((project, index) => (
            <Col key={index}>
              <Card className={`feature d-flex flex-column h-100 ${inView ? 'zoom-in' : ''}`}>
                <div className="feature-icon bg-primary bg-gradient">
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <use xlinkHref="#collection" />
                  </svg>
                </div>
                <Card.Body className="flex-grow-1">
                  <Card.Title
                    style={{ borderBottom: "solid 3px", padding: "2px" }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      padding: "2px",
                    }}
                  >
                    {project.text}
                  </Card.Text>
                  <a href={project.link} target="_blank" className="icon-link" rel="noopener noreferrer">
                    {project.linkText}
                    <svg
                      className="bi"
                      width="1em"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <use xlinkHref="#chevron-right" />
                    </svg>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
