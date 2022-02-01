import React from "react";
import "./Footer.scss";

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h4 className="logo-text">Creative Agency</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea
              ex culpa possimus quos iusto.
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </Col>
          <Col md={2}>
            <h5 className="title-sm">Navigation</h5>
            <div className="footer-links">
              <a href="#">Services</a>
              <a href="#">Our Work</a>
              <a href="#">Team</a>
              <a href="#">Blog</a>
            </div>
          </Col>
          <Col md={3}>
            <h5 className="title-sm">More</h5>
            <div className="footer-links">
              <a href="#">FAQ</a>
              <a href="#">Privacy & Policy</a>
              <a href="#">Licenses</a>
            </div>
          </Col>
          <Col md={3}>
            <h5 className="title-sm">Contact</h5>
            <div className="footer-links">
              <div className="d-flex flex-column gap-1">
                <div>1649 Norman Street, Los Angeles, 9001</div>
                <div>+1 (800) 316 0642</div>
                <div>hello@yourdomain.com</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
