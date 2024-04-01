import React from "react";
import "./components.css";
import profilFoto from "../images/profilFoto.jpg";
import { ReactComponent as Rectangle18 } from "../svg/Rectangle 18.svg";
import { ReactComponent as Ellipse11 } from "../svg/Ellipse 11.svg";
import { ReactComponent as Rectangle2 } from "../svg/Rectangle 2.svg";
import { ReactComponent as Linkedin } from "../svg/LinkedIn.svg";
import { ReactComponent as Github } from "../svg/github.svg";

const HeaderTurkce = () => {
  return (
    <div className="header">
      <div className="başlık">
        <h3>Merhaba! 👋</h3>
        <div className="container">
          <div className="rectangle2">
            <Rectangle2 />
          </div>
          <h2>
            Ben Serra. Web geliştirme
            <br /> uzmanıyım. Eksiksiz ve ölçekli
            <br /> frontend ürünler üretebilirim.
            <br />
            Gelin tanışalım!
          </h2>
        </div>
        <br />
        <div className="linkedinGithub">
          <Linkedin />
          <Github />
        </div>
        <p>
          Şu anda <span className="text-[#AF0C48]">e-ticaret </span> sitesi
          üzerinde çalışıyorum. <br /> Ekibinize katılmam için iletişime
          geçebiliriz →{" "}
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

export default HeaderTurkce;
