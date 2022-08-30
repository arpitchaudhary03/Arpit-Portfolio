import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sephoranow from "../../Assets/Projects/sephoranow.png";
import crud from "../../Assets/Projects/crud.png";
import tatacliq from "../../Assets/Projects/tatacliq.png";
import kfc from "../../Assets/Projects/kfc.png"
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
              imgPath={kfc}
              isBlog={false}
              title="Kentucky Fried Chicken Clone"
              description="Tech Stack Used: ●HTML5 ●CSS3 ●Javascropt ●ReactJS ●Redux ●NodeJS ●ExpressJS ●React Icons ●React Slick ●MongoDB 
              ●Authentication
              ●Landing Page & Food Gallery
              ●Payment Gateway
              ●Menu Page
              ●User Cart
              ●Checkout Page"

              link="https://clone-kfc.netlify.app/"
              codeLink="https://github.com/arpitchaudhary03/Kentucky-Fried-Chicken-Clone"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="MERN Stack CRUD Application"
              description="Tech Stack Used: ●Reactjs ●Nodejs ●Expressjs ●MongoDB 
              ●Includes all the operations such as Creating, Deleting, Updating and Displaying the User
              ●Built the whole application from scratch
              ●The frontend is built using React and  Material-UI and Axios is used for the frontend API calling."

              link="https://mernarpit.herokuapp.com/"
              codeLink="https://github.com/arpitchaudhary03/app/tree/master"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tatacliq}
              isBlog={false}
              title="Inspired From Tata Cliq"
              description="Tech Stack Used: ●Reactjs ●HTML ●CSS ●JavaScript
              ●Developed the Landing page integrating various animations and sliders
              ●Integrated the headers, footers and other components to the application
              ●Worked collaboratively on various functionalities such as payment and
login/signup auth."
              codeLink="https://github.com/arpitchaudhary03/Tata-Cliq"
              link="https://tata-cliq.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sephoranow}
              isBlog={false}
              title="Inspired from Sephora NNNOW"
              description="Tech Stack Used: ●HTML ●CSS ●JavaScript
              ●Developed the Landing page integrating various animations and sliders
              ●Integrated the headers, footers and other components to the application
              ●Worked collaboratively on various functionalities such as payment and
login/signup auth."
              link="https://suspicious-mccarthy-90cb20.netlify.app/"
              codeLink="https://github.com/arpitchaudhary03/SephoraProject"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
