import React from "react"
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
    return (
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <Col md={4} className="mb-0 text-muted">
            © 2022 Company, Inc
          </Col>
  
          <Col md={4} className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto">
            <a href="/" className="link-dark text-decoration-none">
            </a>
          </Col>
  
          <Col md={4}>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="#" className="px-2 text-muted">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="px-2 text-muted">Features</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="px-2 text-muted">Pricing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="px-2 text-muted">FAQs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="px-2 text-muted">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </footer>
      </Container>
    );
  }

export default Footer