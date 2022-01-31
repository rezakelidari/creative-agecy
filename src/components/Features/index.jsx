import React from "react";
import "./Features.scss";

import { Col, Container, Row } from "react-bootstrap";

export default function Features() {
  const features = [
    {
      name: "Feature 1",
      icon: "check",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, obcaecati!",
    },
    {
      name: "Feature 2",
      icon: "check",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, obcaecati!",
    },
    {
      name: "Feature 3",
      icon: "check",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, obcaecati!",
    },
    {
      name: "Feature 4",
      icon: "check",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, obcaecati!",
    },
    {
      name: "Feature 5",
      icon: "check",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, obcaecati!",
    },
    {
      name: "Feature 6",
      icon: "check",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, obcaecati!",
    },
  ];
  return (
    <section id="features">
      <Container>
        <div className="section-intro">
          <h1>Our Features</h1>
          <div className="hline"></div>
        </div>
        <Row>
          {features.map((item) => (
            <Col lg={4} sm={6} xs={12} className="feature d-flex gap-3">
              <div className="icon-box">
                <i className={`bi bi-${item.icon}`}></i>
              </div>
              <div>
                <h5 className="title-sm">{item.name}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
