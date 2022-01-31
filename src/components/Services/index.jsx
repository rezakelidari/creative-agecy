import React from "react";

import { Col, Container, Row } from "react-bootstrap";

export default function Services() {
  return (
    <section id="services">
      <Container>
        <div className="section-intro">
          <h1>Our Services</h1>
          <div className="hline"></div>
        </div>
        <Row className="gap-3 justify-content-center">
          <Col lg={3} sm={5} xs={12} className="shadow p-2 pb-0 border rounded">
            <div className="icon-box">
              <i class="bi bi-file-earmark-image"></i>
            </div>

            <h4 className="title-sm mt-4">Graphic Designing</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              quod hic dolores?
            </p>
          </Col>
          <Col lg={3} sm={5} xs={12} className="shadow p-2 pb-0 border rounded">
            <div className="icon-box">
              <i class="bi bi-cup"></i>
            </div>

            <h4 className="title-sm mt-4">Codding</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              quod hic dolores?
            </p>
          </Col>
          <Col lg={3} sm={5} xs={12} className="shadow p-2 pb-0 border rounded">
            <div className="icon-box">
              <i class="bi bi-camera"></i>
            </div>

            <h4 className="title-sm mt-4">Photography</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              quod hic dolores?
            </p>
          </Col>
          <Col lg={3} sm={5} xs={12} className="shadow p-2 pb-0 border rounded">
            <div className="icon-box">
              <i class="bi bi-shield"></i>
            </div>

            <h4 className="title-sm mt-4">Hacking</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              quod hic dolores?
            </p>
          </Col>
          <Col lg={3} sm={5} xs={12} className="shadow p-2 pb-0 border rounded">
            <div className="icon-box">
              <i class="bi bi-laptop"></i>
            </div>

            <h4 className="title-sm mt-4">Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              quod hic dolores?
            </p>
          </Col>
          <Col lg={3} sm={5} xs={12} className="shadow p-2 pb-0 border rounded">
            <div className="icon-box">
              <i class="bi bi-emoji-laughing"></i>
            </div>

            <h4 className="title-sm mt-4">UI Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              quod hic dolores?
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
