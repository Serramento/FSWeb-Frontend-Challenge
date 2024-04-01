import React from "react";
import "./components.css";
import { ReactComponent as Rectangle39 } from "../svg/Rectangle 39.svg";

const Profile = () => {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="açıklama">
        <div className="açıklama1">
          <h3 className="text-[#EA2678]">Basic Information</h3>
          <div className="column">
            <div className="column1">
              <p>Date of Birth</p>
              <p>Place of Residence</p>
              <p>Educational Background</p>
              <p>Preferred Role</p>
            </div>
            <div className="column2">
              <p>24.11.1990</p>
              <p>Istanbul</p>
              <p>
                Yildiz Technical Uni. Architecture
                <br /> Bachelor Degree, 2012
              </p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="açıklama2">
          <div className="rectangle39">
            <Rectangle39 />
          </div>

          <h3>About me</h3>
          <p>
            After approximately 12 years of experience in architecture, I
            changed sectors because I was interested in software. <br />
            <br />I aim to increase productivity for human-machine interaction
            by combining the hierarchical design principles of coding with my
            background in architecture!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
