import React from "react";
import "./components.css";
import profilFoto from "../images/profilFoto.jpg";
import { ReactComponent as Rectangle18 } from "../svg/Rectangle 18.svg";
import { ReactComponent as Ellipse11 } from "../svg/Ellipse 11.svg";
import { ReactComponent as Rectangle2 } from "../svg/Rectangle 2.svg";
import { ReactComponent as Linkedin } from "../svg/LinkedIn.svg";
import { ReactComponent as Github } from "../svg/github.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="başlık">
        <h3>Hi! 👋</h3>
        <div className="container">
          <div className="rectangle2">
            <Rectangle2 />
          </div>
          <h2>
            I'm Serra. I'm a full-stack
            <br /> developer. I can craft solid and
            <br /> scalable frontend products.
            <br />
            Let's meet!
          </h2>
        </div>
        <br />
        <div className="linkedinGithub">
          <Linkedin />
          <Github />
        </div>
        <p>
          Currently working for an{" "}
          <span className="text-[#AF0C48]">e-commerce </span> project. <br />{" "}
          Invite me to join your team →{" "}
          <span className="text-[#AF0C48] underline underline-offset-4">
            serra_sarihasan@hotmail.com
          </span>
        </p>
      </div>
      <div className="w-[341px] h-[341px]">
        <img
          className="profilFoto w-full h-full object-cover object-top"
          src={profilFoto}
          alt="profilFoto"
        />
      </div>

      <div className="rectangle18">
        <Rectangle18 />
      </div>
      <div className="ellipse11">
        <Ellipse11 />
      </div>
    </div>
  );
};

export default Header;
