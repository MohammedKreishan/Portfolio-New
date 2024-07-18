import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useInView } from "react-intersection-observer";
import Image from "react-bootstrap/Image";

function WebDevelopment() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      title: "The Complete 2024 Web Development Bootcamp",
      text: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
      institution: " Web Development Bootcamp",
      image: {
        src: "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
        alt: "AHU Logo",
      },
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=KEEPLEARNING",
      linkText: "Go to website",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      text: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      institution: "The Complete Python Pro Bootcamp",
      image: {
        src: "https://img-c.udemycdn.com/course/750x422/2776760_f176_10.jpg",
        alt: "JUST Logo",
      },
      link: "https://www.udemy.com/course/100-days-of-code/?couponCode=KEEPLEARNING",
      linkText: "Go to website",
    },
  ];

  return (
    <div className="Education">
      <Container className="px-5 py-5" id="about-me">
        <h2
          className="pb-2 border-bottom"
          style={{ textAlign: "center", fontFamily: "cursive" }}
        >
          About Me
        </h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-2">
          <Col lg={4} className="d-flex align-items-end">
            <Card className="feature d-flex flex-column h-100 justify-content-end">
              <Card.Body className="d-flex flex-column align-items-center">
                <Image
                  src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"
                  roundedCircle
                  style={{ height: "50%", width: "70%" }}
                />
                <Card.Title
                  style={{
                    borderBottom: "solid 3px",
                    padding: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  Web Development
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  A Full-Stack Developer
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className="feature d-flex flex-column h-100">
              <Card.Body>
                <h3>My Journey</h3>
                <p>
                  I started my career as an electrical engineer, but my passion
                  for coding led me to transition into full-stack development.
                  Over the past few years, I have honed my skills through a
                  rigorous 5-month Bootcamp and various personal and
                  professional projects.
                </p>
                <h3>Skills & Technologies</h3>
                <ul>
                  <li>
                    Front-End: React, Redux, Bootstrap, CSS, HTML, JavaScript
                  </li>
                  <li>Back-End: Node.js, Express, MongoDB</li>
                  <li>Other Tools: Git, Netlify, Cloudinary</li>
                </ul>
                <h3>Career Goals</h3>
                <p>
                  I aim to leverage my full-stack development skills to build
                  robust and scalable web applications. I am particularly
                  interested in roles that allow me to continue learning and
                  growing as a developer, while also contributing to impactful
                  projects.
                </p>
                <h3>Notable Achievements</h3>
                <ul>
                  <li>Successfully deployed multiple projects on Netlify</li>
                  <li>
                    Completed a comprehensive full-stack development Bootcamp
                  </li>
                  <li>
                    Designed and developed a portfolio of web applications using
                    modern technologies
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2
          className="pb-2 border-bottom"
          style={{ textAlign: "center", fontFamily: "cursive" }}
        >
          {/* Add any heading text here */}
        </h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-2">
          <Col lg={4} className="d-flex align-items-end">
            <Card className="feature d-flex flex-column h-100 justify-content-end">
              <Card.Body className="d-flex flex-column align-items-center">
                <Image
                  src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"
                  roundedCircle
                  style={{
                    height: "50%",
                    width: "70%",
                  }}
                />

                <Card.Title
                  style={{
                    borderBottom: "solid 3px",
                    padding: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  Web Development
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  A Full-Stack Developer & Design Enthusiast
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <img
                  src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705177932/samples/cup-on-a-table.jpg"
                  alt="First slide"
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*Courses */}
      <Container className="px-4 py-5 border-bottom" id="education-section">
        <h2
          className="pb-2 border-bottom text-center"
          style={{ fontFamily: "cursive" }}
        >
          Courses{" "}
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
                    {item.title}
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

export default WebDevelopment;
