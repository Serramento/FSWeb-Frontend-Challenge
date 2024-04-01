import React from "react";
import { ReactComponent as Rectangle40 } from "../svg/Rectangle 40.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="rectangle40">
        <Rectangle40 />
      </div>
      <h2>
        Let's work together on
        <br /> your next product.
      </h2>
      <div className="footerLink">
        <p className="text-[#1769FF]">Github</p>
        <p>Personal Blog</p>
        <p className="text-[#0077B5]">Linkedin</p>
        <p className="text-[#AF0C48]">Email</p>
      </div>
    </div>
  );
};

export default Footer;
