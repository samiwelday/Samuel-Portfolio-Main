import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Samuel.png";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Samuel Weldemichael</strong>
              </h1>

              <p className="heading-description blockquote">
              Skilled and experienced Full Stack Engineer, excelled in building enterprise-level web
and desktop applications. Utilizing Java/J2EE, Spring boot, Hibernate, Restful, React, Microservices,
MySQL, MongoDB, and Jenkins. Throughout the Software Development Life Cycle, I actively collaborate
with diverse cross-functional teams. My history includes conducting in-depth project analysis, swiftly
resolving software issues, and implementing projects with advanced frameworks, web services, and design
patterns. I believe in a lifelong learning process and always keeping an open mind
when facing challenges.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Lets connect and move to the next level</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
