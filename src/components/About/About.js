import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle.js";
// import Github from "./Github.js";
// import Techstack from "./Techstack.js";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack.js";
import Home2 from "../Home/Home2";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Home2 />
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Let me tell you <strong className="purple"> who I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row> */}
        {/* <h1 className="project-heading">
          <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

        <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
