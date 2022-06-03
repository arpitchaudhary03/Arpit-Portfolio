import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiCypress,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3 style={{ paddingBottom: "10px" }}>ReactJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h3 style={{ paddingBottom: "10px" }}>ExpressJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3 style={{ paddingBottom: "10px" }}>NodeJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3 style={{ paddingBottom: "10px" }}>MongoDB</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3 style={{ paddingBottom: "10px" }}>JavaScript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h3 style={{ paddingBottom: "10px" }}>TypeScript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3 style={{ paddingBottom: "10px" }}>GitHub</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
        <h3 style={{ paddingBottom: "10px" }}>Cypress.io</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h3 style={{ paddingBottom: "10px" }}>Redux</h3>
      </Col>

    </Row>
  );
}

export default Techstack;
