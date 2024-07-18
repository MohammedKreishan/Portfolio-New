import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useInView } from "react-intersection-observer";

function Intersted_Fields() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      title: "Web Development",
      url:"/WebDevelopment",
      text: "Bcs Degree in Electrical Engineering. I studied various aspects of electrical systems, circuits, and power distribution.",
      institution: "Al-Hussein Bin Talal University",
      image: {
        src: "https://www.ahu.edu.jo/images/AHUlogo.png",
        alt: "AHU Logo",
      },
      link: "https://www.ahu.edu.jo/HomeEn.aspx",
      linkText: "Go to website",
    },
    {
      title: "Digital Markiting",
      text: "Master Degree in Power and Control Engineering. Focused on advanced power systems, control theory, and renewable energy technologies.",
      institution: "Jordan University of Science and Technology",
      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjsjgqOie-dQ4vphiWHBKm-bziyul8sFrLg&s",
        alt: "JUST Logo",
      },
      link: "https://www.just.edu.jo/Pages/Default.aspx",
      linkText: "Go to website",
    },
    {
      title: "Cypher Security",
      text: "Full-Stack Project for an Elearning Platform. Developed a comprehensive online learning platform using modern web technologies.",
      institution: "Elearning Platform",
      image: {
        src: "https://media.licdn.com/dms/image/D4E2DAQEtd_w3on2vfQ/profile-treasury-image-shrink_800_800/0/1719924042489?e=1721350800&v=beta&t=PkZGPr-uWBobTKn5Si3Te8liuYG3G-oBCS6z65B9TBk",
        alt: "K-E-Learning Image",
      },
      link: "https://e-k-learning.netlify.app/",
      linkText: "Go to website",
    },
    {
      title: "Optimizations",
      text: "Full-Stack Project for a Social Media Platform. Built a social media platform to enhance online communication and networking.",
      institution: "Social Media Platform",
      image: {
        src: "https://media.licdn.com/dms/image/D4E2DAQF-LneAB16aUA/profile-treasury-image-shrink_800_800/0/1719582762285?e=1721354400&v=beta&t=lBZkNbOquvqx2Ie-n0k_0Z2xx-FftcY7ApHYwBJ_JPI",
        alt: "TALAQI Image",
      },
      link: "https://talaqi.netlify.app/",
      linkText: "Go to website",
    },
    {
      title: "Electrical Engineering",
      text: "Full-Stack Project for a Social Media Platform. Built a social media platform to enhance online communication and networking.",
      institution: "Social Media Platform",
      image: {
        src: "https://media.licdn.com/dms/image/D4E2DAQF-LneAB16aUA/profile-treasury-image-shrink_800_800/0/1719582762285?e=1721354400&v=beta&t=lBZkNbOquvqx2Ie-n0k_0Z2xx-FftcY7ApHYwBJ_JPI",
        alt: "TALAQI Image",
      },
      link: "https://talaqi.netlify.app/",
      linkText: "Go to website",
    },
  ];

  return (
    <div className="Education">
      <Container className="px-4 py-5 border-bottom" id="education-section">
        <h2
          className="pb-2 border-bottom text-center"
          style={{ fontFamily: "cursive" }}
        >
          Intersted Fields{" "}
        </h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-2" ref={ref}>
          {educationData.map((item, index) => (
            <Col key={index}>
              <Card
                className={`feature d-flex flex-column h-100 ${
                  inView ? "zoom-in" : ""
                }`}
              >
                <Card.Body className="d-flex flex-column align-items-start">
                  <Card.Title
                    className="w-100 text-left"
                    style={{ borderBottom: "1px solid", padding: "6px" }}
                  >
                    <a href={item.url}>{item.title}</a>
                  </Card.Title>
                  <Row className="w-100">
                    <Col md={8}>
                      <Card.Text
                        className="text-left"
                        style={{
                          marginTop: "20px",
                          fontSize: "18px",
                          fontFamily: "Times New Roman",
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        {item.text}
                      </Card.Text>
                    </Col>
                    <Col
                      md={4}
                      className="d-flex flex-column align-items-center justify-content-center"
                    >
                      {item.image && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Card.Img
                            src={item.image.src}
                            alt={item.image.alt}
                            style={{ maxHeight: "100px", maxWidth: "100%" }}
                          />
                        </a>
                      )}
                      <Card.Subtitle className="mt-2 text-center text-muted">
                        {item.institution}
                      </Card.Subtitle>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Intersted_Fields;
