import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiReplit,
  SiCodesandbox,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3 style={{ paddingBottom: "10px" }}>VS Code</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h3 style={{ paddingBottom: "10px" }}>Linux</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h3 style={{ paddingBottom: "10px" }}>Postman</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h3 style={{ paddingBottom: "10px" }}>Netlify</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h3 style={{ paddingBottom: "10px" }}>Heroku</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit />
        <h3 style={{ paddingBottom: "10px" }}>Replit</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodesandbox />
        <h3 style={{ paddingBottom: "10px" }}>CodeSandbox</h3>
      </Col>
    </Row>
  );
}

export default Toolstack;
