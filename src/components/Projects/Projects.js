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

  const projects = [
    // First Project
    {
      title: "Hangman Game",
      text: "Built an engaging Hangman Game using HTML, CSS, and JavaScript. Select letters to reveal the mystery word before the hangman completes. Test your linguistic skills and enjoy this interactive word-guessing",
      image: {
        src: "https://media.licdn.com/dms/image/D4E2DAQHZMK_k0RrsrQ/profile-treasury-image-shrink_800_800/0/1719582247695?e=1721354400&v=beta&t=R8A0RzciUrlJg7H10WY3yBsjnx5vC_YtpDgXgnLiJZw",
        alt: "Digital Marketing Course Image",
      },
      link: "https://k-hangman.netlify.app/",
      linkText: "Go to website",
    },
    // Second Project

    {
      title: "K-book",
      text: "Developed a dynamic Book Store website using jQuery, CSS, HTML, and JavaScript. Users can browse, search, and purchase books seamlessly. Enhanced user experience with interactive features and a clean, responsive design.",
      image: {
        src: "https://media.licdn.com/dms/image/D4E2DAQEltY9kWjlTYQ/profile-treasury-image-shrink_800_800/0/1719582576021?e=1721354400&v=beta&t=yRD3hMkXXxNHdTGcpn5H-6o5U55I06IkUDuroWCG_Ss",
        alt: "Digital Marketing Course Image",
      },
      link: "https://k-book.netlify.app/",
      linkText: "Go to website",
    },

    // Third Project

    {
      title: "K-E-Learning",
      text: "Built as a full-stack application utilizing MongoDB, React, and Node.js, the E-Learning Platform gives clients an open, flexible, instructive encounter. The user-friendly plan guarantees a clear route by advertising various courses over distinctive areas. The platform's backend powered by MongoDB and Node.js,efficiently manages course information.",
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
      text: "TALAQI is a social media platform developed by our team using modern tools like Redux, Material-UI, and Node.js. With features like posts, stories, chat, and search, it offers a dynamic user experience. Our agile approach with Scrum methodology ensured efficient task distribution and timely progress. TALAQI's simple design, responsive layout, and robust backend make it easy to use and reliable.",
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
          Projects
        </h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-2" ref={ref}>
          {projects.map((project, index) => (
            <Col key={index}>
              <Card
                className={`feature d-flex flex-column h-100 ${
                  inView ? "zoom-in" : ""
                }`}
              >
                {project.image && (
                  <Card.Img
                    variant="top"
                    src={project.image.src}
                    alt={project.image.alt}
                  />
                )}
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
                  <a
                    href={project.link}
                    target="_blank"
                    className="icon-link"
                    rel="noopener noreferrer"
                  >
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
