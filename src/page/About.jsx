import React from "react";
import "../style/style.css";
import cv from "../asset/images/resume_of_somon.pdf";
const About = () => {
  return (
    <div style={{ minWidth: "650px", height: "400px" }} className="common-bg">
      <div className=" p-3">
        <h3>
          <span>I</span>M
          <br />
          MOHAMMAD<span> SOMON SIKDER</span>
        </h3>
        <p>
          I'm a <span>Full Stack Web Developer</span> with a focus on the
          <span>MERN</span> stack, but still exploring other technologies and
          frameworks that catch my interest! if you're looking for a developer
          to add to your team, I'd love to hear from you!
        </p>
        <div>
          <a href={cv} download>
            <button className="rounded-full common-btn  p-2 my-3">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
