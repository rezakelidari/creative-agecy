import React from "react";
import "./TopNavbar.scss";

import { Nav, Navbar } from "react-bootstrap";

export default function TopNavbar() {
  return (
    <Navbar bg="light" expand="md" className="px-3">
      <Navbar.Brand href="#">Creative Agency</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
