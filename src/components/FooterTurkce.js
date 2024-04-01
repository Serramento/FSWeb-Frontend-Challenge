import React from "react";
import { ReactComponent as Rectangle40 } from "../svg/Rectangle 40.svg";

const FooterTurkce = () => {
  return (
    <div className="footer">
      <div className="rectangle40">
        <Rectangle40 />
      </div>
      <h2>
        Bir sonraki projenizde
        <br /> birlikte çalışalım.
      </h2>
      <div className="footerLink">
        <p className="text-[#1769FF]">Github</p>
        <p>Kişisel Blog</p>
        <p className="text-[#0077B5]">Linkedin</p>
        <p className="text-[#AF0C48]">Eposta</p>
      </div>
    </div>
  );
};

export default FooterTurkce;
