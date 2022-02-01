import React from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Member1 from "../../assets/img/team-1.jpg";
import Member2 from "../../assets/img/team-2.jpg";
import Member3 from "../../assets/img/team-3.jpg";
import Member4 from "../../assets/img/team-4.jpg";

export default function Team() {
  const team = [
    {
      name: "John Doe",
      picture: Member1,
      job: "Programmer",
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "John Doe",
      picture: Member2,
      job: "Web designer",
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "John Doe",
      picture: Member3,
      job: "Programmer",
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "John Doe",
      picture: Member4,
      job: "Programmer",
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section id="team">
      <div className="section-intro">
        <h1>Our Team</h1>
        <div className="hline"></div>
      </div>
      <Container>
        <Row className="g-sm-2 g-3">
          {team.map((item) => (
            <Col
              lg={3}
              sm={6}
              xs={12}
              className="team-member d-flex justify-content-center"
            >
              <Card bg="dark" className="text-light">
                <div className="img">
                  <Card.Img src={item.picture} className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle>{item.job}</Card.Subtitle>
                  <hr />
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, tenetur.
                  </Card.Text>
                  <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                      <Button variant="outline-secondary" href={item.instagram}>
                        <i className="bi bi-instagram"></i>
                      </Button>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      <Button variant="outline-secondary" href={item.facebook}>
                        <i className="bi bi-facebook"></i>
                      </Button>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      <Button variant="outline-secondary" href={item.linkedin}>
                        <i className="bi bi-linkedin"></i>
                      </Button>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                      <Button variant="outline-secondary" href={item.twitter}>
                        <i className="bi bi-twitter"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
