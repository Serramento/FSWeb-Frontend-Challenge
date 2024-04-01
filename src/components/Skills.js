import React from "react";
import "./components.css";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import node from "../images/node.png";
import vsCode from "../images/vsCode.png";
import figma from "../images/figma.png";
import { ReactComponent as Ellipse12 } from "../svg/Ellipse 12.svg";
import { ReactComponent as Rectangle22 } from "../svg/Rectangle 22.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="programlar">
        <div>
          <img
            className="javascript rounded-lg"
            src={javascript}
            alt="javascript"
          />
          <h3>JAVASCRIPT</h3>
        </div>
        <div>
          <img className="react rounded-lg" src={react} alt="react" />
          <h3>REACT</h3>
        </div>
        <div>
          <img className="redux" src={redux} alt="redux" />
          <h3>REDUX</h3>
        </div>
        <div>
          <img className="node rounded-lg" src={node} alt="node" />
          <h3>NODE</h3>
        </div>
        <div>
          <img className="vsCode" src={vsCode} alt="vsCode" />
          <h3>VS CODE</h3>
        </div>
        <div>
          <img className="figma rounded-lg" src={figma} alt="figma" />
          <h3>FIGMA</h3>
        </div>
      </div>
      <div className="ellipse12">
        <Ellipse12 />
      </div>
      <div className="rectangle22">
        <Rectangle22 />
      </div>
    </div>
  );
};

export default Skills;
