import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sephoranow from "../../Assets/Projects/sephoranow.png";
import crud from "../../Assets/Projects/crud.png";
import tatacliq from "../../Assets/Projects/tatacliq.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="MERN Stack CRUD Application"
              description="This Application is built using Reactjs, Nodejs, Expressjs and MongoDB which includes all the operations such as Creating, Deleting, Updating and Displaying the User."
              link="https://github.com/arpitchaudhary03/app/tree/master"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tatacliq}
              isBlog={false}
              title="Inspired From Tata Cliq"
              description="The website is built using Reactjs, HTML, CSS, JavaScript
               Tata Cliq (stylised as Tata CLiQ) is an Indian e-commerce company based in Mumbai, India.It is owned by Tata Digital Limited, of Tata Group. TataCLiQ operates in categories such as Electronics, Fashion, Footwear and Accessories. Tata Group's E-commerce platform Tata CLiQ also launched a premium and luxury fashion and lifestyle destination, Tata CLiQ Luxury and It have house a wide range of apparel and accessories for men and women by luxury and bridge-to-luxury brands."
              link="https://github.com/arpitchaudhary03/Tata-Cliq"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sephoranow}
              isBlog={false}
              title="Inspired from Sephora NNNOW"
              description="The website is built using Reactjs, HTML, CSS, JavaScript
              Sephora is a French multinational retailer of personal care and beauty products. Featuring nearly 340 brands, along with its own private label, Sephora Collection, Sephora offers beauty products including cosmetics, skincare, body, fragrance, nail color, beauty tools, body lotions and haircare."
              link="https://github.com/arpitchaudhary03/Sephora-nnnow.com-clone"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
