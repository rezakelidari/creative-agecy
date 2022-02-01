import React from "react";
import "./Contact.scss";

import { Container, Form, Row, Col, Button } from "react-bootstrap";

import Banner from "../../assets/img/contact.jpg";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-intro">
        <h1>Contact us</h1>
        <div className="hline"></div>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={4} md={5} sm={5}>
            <img src={Banner} alt="Contact" />
          </Col>
          <Col
            md={{ span: 5, offset: 1 }}
            sm={{ span: 6, offset: 1 }}
            className="d-flex flex-column justify-content-lg-center"
          >
            <Form onSubmit={(event) => event.preventDefault()}>
              <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="e.g., John Doe" />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="e.g., info@example.com"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Phone number:</Form.Label>
                <Form.Control type="tel" placeholder="e.g., +0 123 456 7890" />
              </Form.Group>
              <br />
              <Button variant="brand" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
