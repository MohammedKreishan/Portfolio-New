import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useInView } from "react-intersection-observer";
import "./Education.css"
function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const projects = [
    // First Project
    {
      title: "Electrical Engineering",
      text: "Al-Hussein Bin Talal University\n Bcs Degree",
      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiczFPbaxyPdnAZvvUd_1rCFPTWYN7UINX8Q&s",
        alt: "Digital Marketing Course Image",
      },
      link: "https://k-hangman.netlify.app/",
      linkText: "Go to website",
    },
    // Second Project

    {
      title: "Power and Control Engineering",
      text: "Jordan University of Science and Technology\n Master Degree",

      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjsjgqOie-dQ4vphiWHBKm-bziyul8sFrLg&s",
        alt: "Digital Marketing Course Image",
      },
      link: "https://k-book.netlify.app/",
      linkText: "Go to website",
    },

    // Third Project

    {
      title: "K-E-Learning",
      text: "Elearning Platform \n Full-Stack Project ",
      image: {
        src: "https://media.licdn.com/dms/image/D4E2DAQEtd_w3on2vfQ/profile-treasury-image-shrink_800_800/0/1719924042489?e=1721350800&v=beta&t=PkZGPr-uWBobTKn5Si3Te8liuYG3G-oBCS6z65B9TBk",
        alt: "Digital Marketing Course Image",
      },
      link: "https://e-k-learning.netlify.app/",
      linkText: "Go to website",
    },
    // Fourth Project

    {
      title: "TALAQI",
      text: "Social Media Platform \n Full-Stack Project ",

      image: {
        src: "https://media.licdn.com/dms/image/D4E2DAQF-LneAB16aUA/profile-treasury-image-shrink_800_800/0/1719582762285?e=1721354400&v=beta&t=lBZkNbOquvqx2Ie-n0k_0Z2xx-FftcY7ApHYwBJ_JPI",
        alt: "Digital Marketing Course Image",
      },
      link: "https://talaqi.netlify.app/",
      linkText: "Go to website",
    },
  ];

  return (
    <div className="Projects">
      <Container className="px-4 py-5 border-bottom" id="featured-3">
        <h2
          className="pb-2 border-bottom"
          style={{ textAlign: "center", fontFamily: "cursive" }}
        >
          Education
        </h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-3" ref={ref}>
          {projects.map((project, index) => (
            <Col key={index}>
              <Card
                className={`feature d-flex flex-column h-100 ${
                  inView ? "zoom-in" : ""
                }`}
              >
                <Card.Title
                  style={{
                    padding: "6px",
                    textAlign: "center",
                    borderBottom: "solid",
                  }}
                >
                  {project.title}
                </Card.Title>
                <Card.Body className="flex-grow-1">
                  {project.image && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Img
                        variant="top"
                        src={project.image.src}
                        alt={project.image.alt}
                      />
                    </a>
                  )}

                  <Card.Text
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      padding: "4px",
                      textAlign: "center",
                      fontSize: "20px",
                      fontFamily: "timesNewRoman",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {project.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Education;
