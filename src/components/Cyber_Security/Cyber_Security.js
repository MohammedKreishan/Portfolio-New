import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useInView } from "react-intersection-observer";
import Image from "react-bootstrap/Image";
import Projects from "../Projects/Projects";
function Cypher_Security() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      title: "Learn Python & Ethical Hacking From Scratch",
      text: "Write 20+ hacking programs to learn hacking and programming at the same time | No prior knowledge required",
      institution: "Learn Python & Ethical Hacking",
      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVp1FVZudzb16GQZXFnN7v28uN0uwAZYH7NQ&s",
        alt: "AHU Logo",
      },
      link: "https://www.udemy.com/course/learn-python-and-ethical-hacking-from-scratch/?utm_source=aff-campaign&utm_medium=udemyads&LSNPUBID=a1LgFw09t88&ranMID=47907&ranEAID=a1LgFw09t88&ranSiteID=a1LgFw09t88-hocbndVbznkJHlMDzsue2g&couponCode=KEEPLEARNING",
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
          Cyber Security{" "}
        </h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-2">
          <Col lg={4} className="d-flex align-items-end">
            <Card className="feature d-flex flex-column h-100 justify-content-end">
              <Card.Body className="d-flex flex-column align-items-center">
                <Image
                  src="https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721174400&semt=ais_user"
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
                  Cyber Security{" "}
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
                <h3>My Journey in Cyber Security</h3>
                <p>
                  My journey into Cyber Security began with a deep interest in
                  understanding and protecting digital systems. Transitioning
                  from electrical engineering, I developed a strong passion for
                  ethical hacking and cybersecurity. Through hands-on projects
                  and practical experience, I have built a solid foundation in
                  this field.
                </p>

                <h3>Skills & Technologies</h3>
                <ul>
                  <li>Programming: Python</li>
                  <li>
                    Ethical Hacking: Penetration Testing, Vulnerability
                    Assessment
                  </li>
                  <li>Social Engineering: Techniques and Countermeasures</li>
                  <li>Tools: Kali Linux, Metasploit, Nmap, Wireshark</li>
                </ul>

                <h3>Career Goals</h3>
                <p>
                  In the field of Cyber Security, I aim to leverage my skills to
                  protect and secure digital infrastructures. I am particularly
                  interested in roles that allow me to continue learning and
                  growing as a cybersecurity professional while contributing to
                  impactful projects that safeguard sensitive information and
                  systems.
                </p>

                <h3>Notable Achievements</h3>
                <ul>
                  <li>
                    Successfully applied ethical hacking techniques to secure
                    web applications
                  </li>
                  <li>
                    Conducted vulnerability assessments to identify and mitigate
                    potential threats
                  </li>
                  <li>
                    Developed a portfolio of cybersecurity projects showcasing
                    practical skills
                  </li>
                </ul>
              </Card.Body>
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

export default Cypher_Security;
