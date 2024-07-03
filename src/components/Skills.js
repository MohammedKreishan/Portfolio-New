import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import ExampleCarouselImage from './ExampleCarouselImage.png';



function Skills() {
  return (
    <div className="Skills">
      
      <Container className="px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom" style={{ textAlign: "left" }}>
          Discover Our Featured Courses
        </h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
          <Col>
            <Card className="feature d-flex flex-column h-100">
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
                <Card.Title>
                  Elevate Your Skills in Digital Marketing
                </Card.Title>
                <Card.Text>
                  Embark on a transformative journey in Marketing and Business
                  with our dynamic courses designed to enhance your digital
                  marketing skills and strategic thinking.
                </Card.Text>
                <a href="#" className="icon-link">
                  Explore Courses
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

          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#people-circle" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>Master Personal Finance and Economics</Card.Title>
                <Card.Text>
                  Take control of your financial future with our engaging
                  courses in Personal Finance and Economics, providing essential
                  knowledge for financial independence.
                </Card.Text>
                <a href="#" className="icon-link">
                  Discover Courses
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

          <Col>
            <Card className="feature d-flex flex-column h-100">
              <div className="feature-icon bg-primary bg-gradient">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#toggles2" />
                </svg>
              </div>
              <Card.Body className="flex-grow-1">
                <Card.Title>
                  Unleash Your Creativity with Arts and Photography
                </Card.Title>
                <Card.Text>
                  Dive into a world of creativity with our Arts and Photography
                  courses, where every brushstroke, click of the camera, or
                  digital creation becomes a unique masterpiece.
                </Card.Text>
                <a href="#" className="icon-link">
                  Start Learning
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
        </Row>
      </Container>

      <Container className="px-4 py-5" style={{ textAlign: "left" }}>
        <h2 className="pb-2 border-bottom">Unleash Your Learning Experience</h2>

        <Row className="row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <Col className="d-flex flex-column align-items-start gap-2">
            <h2
              className="fw-bold text-primary"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem" }}
            >
              Unlocking Limitless Potential
            </h2>
            <p
              className="text-secondary"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1.1rem",
              }}
            >
              Embark on a learning journey with features designed to elevate
              your experience. Our commitment to excellence ensures a seamless
              exploration of knowledge and skills.
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
                <h4
                  className="fw-semibold mb-0 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Diverse Content
                </h4>
                <p className="text-secondary">
                  Explore a rich collection of courses covering a wide range of
                  subjects. From technology to arts, we have curated content to
                  spark your curiosity.
                </p>
              </Col>

              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#gear-fill"></use>
                  </svg>
                </div>
                <h4
                  className="fw-semibold mb-0 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Interactive Learning
                </h4>
                <p className="text-secondary">
                  Engage in interactive learning experiences that go beyond
                  traditional methods. Our platform provides hands-on activities
                  and real-world applications.
                </p>
              </Col>

              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#speedometer"></use>
                  </svg>
                </div>
                <h4
                  className="fw-semibold mb-0 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Personalized Pace
                </h4>
                <p className="text-secondary">
                  Tailor your learning journey with our personalized pace
                  feature. Whether you prefer a quick sprint or a steady
                  marathon, we cater to your unique learning style.
                </p>
              </Col>

              <Col className="d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#table"></use>
                  </svg>
                </div>
                <h4
                  className="fw-semibold mb-0 text-primary"
                  style={{ fontSize: "1.2rem" }}
                >
                  Comprehensive Resources
                </h4>
                <p className="text-secondary">
                  Access a wealth of comprehensive resources, including study
                  materials, quizzes, and discussion forums. Our platform
                  ensures you have everything you need to succeed.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="px-4 py-5" id="featured-3">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>

      <Container className="px-4 py-5" id="featured-3">
      <Carousel>
      <Carousel.Item>
            <img
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705177932/samples/cup-on-a-table.jpg"
              alt="First slide"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                
              }}
            />

            <Carousel.Caption style={{color:"black"}}>
              <h3>Welcome to Our E-Learning Platform</h3>
              <p>Explore a world of knowledge and opportunities.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705177932/samples/cup-on-a-table.jpg"
              alt="First slide"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                
              }}
            />

            <Carousel.Caption style={{color:"black"}}>
              <h3>Welcome to Our E-Learning Platform</h3>
              <p>Explore a world of knowledge and opportunities.</p>
            </Carousel.Caption>
          </Carousel.Item>


    </Carousel>
      </Container>
    </div>
  );
}

export default Skills;
