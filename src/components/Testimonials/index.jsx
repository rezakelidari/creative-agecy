import React from "react";
import "./Testimonials.scss";

import Review1 from "../../assets/img/team-2.jpg";
import Review2 from "../../assets/img/team-3.jpg";
import Review3 from "../../assets/img/team-4.jpg";

import {
  Container,
  Fade,
  Nav,
  Tab,
  TabContent,
  TabPane,
} from "react-bootstrap";

export default function Testimonials() {
  return (
    <section id="testimonials" className="text-center">
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Nav variant="pills" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="first">
                <img src={Review1} alt="User" className="rounded-circle" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <img src={Review2} alt="User" className="rounded-circle" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                <img src={Review3} alt="User" className="rounded-circle" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <br />
          <TabContent>
            <TabPane eventKey="first" transition={Fade}>
              <div className="review">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  inventore modi nisi, eius ullam ut reprehenderit tenetur
                  quidem laboriosam quia totam, illo voluptatibus facere debitis
                  ipsa, fugiat soluta quos sequi.
                </p>
                <h5 className="title-sm">John Doe</h5>
              </div>
            </TabPane>
          </TabContent>
          <TabContent>
            <TabPane eventKey="second" transition={Fade}>
              <div className="review">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </div>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus tempore quasi necessitatibus praesentium iure!
                  Possimus, soluta illum aut temporibus sapiente molestias dicta
                  et ut tenetur debitis ab error, minima eveniet?
                </p>
                <h5 className="title-sm">John Doe</h5>
              </div>
            </TabPane>
          </TabContent>
          <TabContent>
            <TabPane eventKey="third" transition={Fade}>
              <div className="review">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
                <p className="lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae distinctio rerum quaerat sit eos explicabo nam doloribus
                  eveniet ullam dolorem soluta, iusto cupiditate totam? Veniam,
                  blanditiis exercitationem! Numquam, pariatur maiores.
                </p>
                <h5 className="title-sm">John Doe</h5>
              </div>
            </TabPane>
          </TabContent>
        </Tab.Container>
      </Container>
    </section>
  );
}
