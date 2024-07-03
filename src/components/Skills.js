import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Skills() {
  return (
    <div className='Skills'>
      <Container className="px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom" style={{textAlign:"left"}}>Discover Our Featured Courses</h2>
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

      <Container className="px-4 py-5" style={{textAlign:"left"}}>
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

      <Container>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem', margin:"50px", className:"Skills-Card-1" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </Container>
        </div>
  );
}

export default Skills;