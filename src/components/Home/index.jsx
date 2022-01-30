import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <section id="home" className="d-flex align-items-center">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-10 text-white">
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
          </div>
        </div>
      </div>
    </section>
  );
}
