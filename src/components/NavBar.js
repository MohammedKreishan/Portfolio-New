import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Navbar collapseOnSelect expand="lg" className={darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-body-tertiary'}>
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">About Me</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
      <Nav className="me-auto">
      <Button variant="primary" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
