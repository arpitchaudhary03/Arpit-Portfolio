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
              description="This Application is built using Reactjs, Nodejs, Expressjs and MongoDB which includes all the operations such as Creating, Deleting, Updating and Displaying the User.
              ●Built the whole application from scratch.
              ●The frontend is built using React and  Material-UI and Axios is used for the frontend API calling."

              link="https://mernarpit.herokuapp.com/"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tatacliq}
              isBlog={false}
              title="Inspired From Tata Cliq"
              description="The website is built using Reactjs, HTML, CSS, JavaScript.
              ●Developed the Landing page integrating various animations and sliders.
              ●Integrated the headers, footers and other components to the application.
              ●Worked collaboratively on various functionalities such as payment and
login/signup auth."
              // link="https://github.com/arpitchaudhary03/Tata-Cliq"
              link="https://zesty-baklava-77a6db.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sephoranow}
              isBlog={false}
              title="Inspired from Sephora NNNOW"
              description="The website is built using Reactjs, HTML, CSS, JavaScript
              ●Developed the Landing page integrating various animations and sliders.
              ●Integrated the headers, footers and other components to the application.
              ●Worked collaboratively on various functionalities such as payment and
login/signup auth."
              link="https://fascinating-lily-608479.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
