import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <div className="about-section text-center bg-light py-5">
        <Container>
          <h1 className="display-4 mb-4" style={{ fontFamily: "Montserrat, sans-serif", color: "#293241" }}>
            Welcome to Our E-Learning Journey
          </h1>
          <p className="lead" style={{ fontFamily: "Open Sans, sans-serif", color: "#455a64", padding: "20px", textAlign: "left" }}>
            Embark on a transformative experience as we unveil the narrative of our unwavering commitment to excellence and innovation in e-learning. At E-Learning, we are dedicated to setting new standards and crafting profound learning experiences that resonate with our vibrant community.
          </p>
          <p className="lead" style={{ fontFamily: "Open Sans, sans-serif", color: "#455a64", padding: "20px", textAlign: "left" }}>
            We invite you to join us in shaping a future where collaboration and passion seamlessly converge in the dynamic realm of online education. Let's embark together on a journey of knowledge, growth, and limitless possibilities.
          </p>
        </Container>
      </div>



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
                src="https://res.cloudinary.com/dalwd5c23/image/upload/v1720747765/ojwfdmh7sbli6g0zjcfi.jpg"
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
                HI, I AM Mohammad Kreishan
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                A Full-Stack Developer & Design Enthusiast with a background in electrical engineering. I have completed a 5-month Bootcamp and possess experience in MongoDB, React, Bootstrap, Redux, CSS, HTML, JavaScript, Node.js, and Express.
              </Card.Text>
              <a
                href="https://k-book.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                Download My Resume
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

        <Col lg={8}>
          <Card className="feature d-flex flex-column h-100">
            <Card.Body>
              <h3>My Journey</h3>
              <p>
                I started my career as an electrical engineer, but my passion for coding led me to transition into full-stack development. Over the past few years, I have honed my skills through a rigorous 5-month Bootcamp and various personal and professional projects.
              </p>
              <h3>Skills & Technologies</h3>
              <ul>
                <li>Front-End: React, Redux, Bootstrap, CSS, HTML, JavaScript</li>
                <li>Back-End: Node.js, Express, MongoDB</li>
                <li>Other Tools: Git, Netlify, Cloudinary</li>
              </ul>
              <h3>Career Goals</h3>
              <p>
                I aim to leverage my full-stack development skills to build robust and scalable web applications. I am particularly interested in roles that allow me to continue learning and growing as a developer, while also contributing to impactful projects.
              </p>
              <h3>Notable Achievements</h3>
              <ul>
                <li>Successfully deployed multiple projects on Netlify</li>
                <li>Completed a comprehensive full-stack development Bootcamp</li>
                <li>Designed and developed a portfolio of web applications using modern technologies</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

      <Container className="px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom" style={{ textAlign: "left" }}>Discover Our Featured Courses</h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <use xlinkHref="#collection" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>Elevate Your Skills in Digital Marketing</Card.Title>
                <Card.Text>Embark on a transformative journey in Marketing and Business with our dynamic courses designed to enhance your digital marketing skills and strategic thinking.</Card.Text>
                <a href="#" className="icon-link">
                  Explore Courses
                  <svg className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <use xlinkHref="#people-circle" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>Master Personal Finance and Economics</Card.Title>
                <Card.Text>Take control of your financial future with our engaging courses in Personal Finance and Economics, providing essential knowledge for financial independence.</Card.Text>
                <a href="#" className="icon-link">
                  Discover Courses
                  <svg className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <use xlinkHref="#toggles2" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>Unleash Your Creativity with Arts and Photography</Card.Title>
                <Card.Text>Dive into a world of creativity with our Arts and Photography courses, where every brushstroke, click of the camera, or digital creation becomes a unique masterpiece.</Card.Text>
                <a href="#" className="icon-link">
                  Start Learning
                  <svg className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="px-4 py-5" style={{ textAlign: "left" }}>
        <h2 className="pb-2 border-bottom">Unleash Your Learning Experience</h2>
        <Row className="row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <Col className="d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-primary" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem" }}>
              Unlocking Limitless Potential
            </h2>
            <p className="text-secondary" style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.1rem" }}>
              Embark on a learning journey with features designed to elevate your experience. Our commitment to excellence ensures a seamless exploration of knowledge and skills.
            </p>
            <Button href="#" variant="primary" size="lg">
              Start Your Journey
            </Button>
          </Col>
          <Col>
            <Row className="row-cols-1 row-cols-sm-2 g-4">
              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#collection"></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0">Dynamic Learning</h4>
                <p className="text-secondary">Experience the power of dynamic learning environments tailored to your needs and aspirations.</p>
              </Col>
              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#people-circle"></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0">Community Engagement</h4>
                <p className="text-secondary">Join a vibrant community where collaboration and growth are at the forefront of your learning journey.</p>
              </Col>
              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#toggles2"></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0">Innovative Tools</h4>
                <p className="text-secondary">Harness the power of innovative tools designed to enhance your learning experience and unlock your potential.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
