import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arpit Chaudhary </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />I am an Aspiring Full Stack Web Developer at Masai School
            <br />
            <br />
            Leaving aside coding, some things on which I try my hands are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you start off your day by making up your bed, you have started the day by completing a task"{" "}
          </p>
          <footer className="blockquote-footer">Arpit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
