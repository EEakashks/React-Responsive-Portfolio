import React from 'react';
import {Navbar , Nav , Container } from 'react-bootstrap';
import '../styles/Header.css'

function Header() {
  return (
   
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#about-id">About</Nav.Link>
        <Nav.Link href="#skills-id">Skills</Nav.Link>
        <Nav.Link href="#experience-id">Experience</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}


export default Header;