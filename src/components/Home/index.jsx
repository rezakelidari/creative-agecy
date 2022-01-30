import React from "react";
import "./Home.scss";

import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <section id="home" className="d-flex align-items-center">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md="10" className="text-white">
            <h1 className="display-4">
              WE ARE CREATIVE AGENCY, CREATIVE PEOPLE
            </h1>
            <p className="lead">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-les
            </p>
            <a href="#contact" className="btn btn-brand">
              Contact
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
