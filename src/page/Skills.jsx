import React from "react";
import "../style/style.css";

import html from "../asset/icon/html.png";
import css from "../asset/icon/css.png";
import bootstrap from "../asset/icon/bootstrap.png";
import tailwind from "../asset/icon/tailwind.png";
import js from "../asset/icon/js.png";
import react from "../asset/icon/react.png";
import nodejs from "../asset/icon/node.png";
import mongodb from "../asset/icon/mongodb-icon.svg";

const Skills = () => {
  return (
    <div
      style={{ minWidth: "650px", height: "400px" }}
      className="progress-section common-bg"
    >
      <h2>Skills</h2>
      <div className="progress-item">
        <div className="progress-info">
          <img className="icon" src={html} alt="img-some" />
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="progress-item">
        <div className="progress-info">
          <img className="icon" src={css} alt="img-some" />
          <div className="progress-bar-css"></div>
        </div>
      </div>
      <div className="progress-item">
        <div className="progress-info">
          <img className="icon" src={bootstrap} alt="img-some" />
          <div className="progress-bar-css"></div>
        </div>
      </div>
      <div className="progress-item">
        <div className="progress-info">
          <img className="icon" src={tailwind} alt="img-some" />
          <div className="progress-bar-css"></div>
        </div>
      </div>
      <div className="progress-item">
        <div className="progress-info">
          <img className="icon" src={js} alt="img-some" />
          <div className="progress-bar-js"></div>
        </div>
      </div>
      <div className="progress-item">
        <div className="progress-info">
          <img className="icon" src={react} alt="img-some" />
          <div className="progress-bar-other"></div>
        </div>
      </div>
      <div className="progress-item">
        <div className="progress-info">
          <img className="icon" src={nodejs} alt="img-some" />
          <div className="progress-bar-other"></div>
        </div>
      </div>
      <div className="progress-item">
        <div className="progress-info">
          <img className="icon" src={mongodb} alt="img-some" />
          <div className="progress-bar-other"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
