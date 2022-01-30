import React from "react";
import "./Portfolio.scss";

import { Col, Container, Row } from "react-bootstrap";

import P1 from "../../assets/img/p1.jpg";
import P2 from "../../assets/img/p2.jpg";
import P3 from "../../assets/img/p3.jpg";
import P4 from "../../assets/img/p4.jpg";
import P5 from "../../assets/img/p5.jpg";
import P6 from "../../assets/img/p6.jpg";

export default function Portfolio() {
  const projects = [
    { name: "Project 1", desc: "Project 1 Description", image: P1 },
    { name: "Project 2", desc: "Project 2 Description", image: P2 },
    { name: "Project 3", desc: "Project 3 Description", image: P3 },
    { name: "Project 4", desc: "Project 4 Description", image: P4 },
    { name: "Project 5", desc: "Project 5 Description", image: P5 },
    { name: "Project 6", desc: "Project 6 Description", image: P6 },
  ];

  return (
    <section id="portfolio">
      <Container>
        <div className="section-intro">
          <h1>Our Portfoio</h1>
          <div className="hline"></div>
        </div>
        <Row className="justify-content-center mt-5">
          {projects.map((item) => (
            <Col lg={3} md={4} sm={6} xs={12} className="portfolio px-0">
              <img
                src={item.image}
                alt="Project image"
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="text-white">{item.name}</h3>
                <p className="text-white">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
