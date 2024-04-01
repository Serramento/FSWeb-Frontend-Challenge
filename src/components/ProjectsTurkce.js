import React from "react";
import "./components.css";
import bilgisayar1 from "../images/bilgisayar1.png";
import bilgisayar2 from "../images/bilgisayar2.png";

const ProjectsTurkce = () => {
  return (
    <div className="projeler">
      <h2>Projeler</h2>
      <div className="projelerBölümleri">
        <div className="sol">
          <h3>Pizza Projesi</h3>
          <p>
            Bir pizza sipariş etmek ister misiniz? Bu proje üç sayfadan
            oluşuyor. Ana sayfa, sipariş sayfası ve siparişiniz alındı sayfası!
          </p>
          <div className="kutular">
            <span className="kutu">react</span>
            <span className="kutu">vercel</span>
            <span className="kutu">axios</span>
            <br />
            <span className="kutu">router</span>
          </div>
          <div className="tıkla">
            <a href="https://github.com/Serramento/fsweb-s7-challenge-pizza">
              GitHub'da İnceleyin
            </a>
            <a href="https://fsweb-s7-challenge-pizza-peach-omega.vercel.app/">
              Uygulamaya Gidin →
            </a>
          </div>
          <br />
          <br />
          <img className="bilgisayar1" src={bilgisayar1} alt="bilgisayar1" />
        </div>
        <div className="sağ">
          <h3>DressForDay Projesi</h3>
          <p>
            Bu proje bir kıyafet firması için e-ticaret sitesi. Hala üzerinde
            çalışmaya devam ediyorum ancak mevcut halini aşağıdaki linklerden
            inceleyebilirsiniz!
          </p>
          <div className="kutular2">
            <span className="kutu">react</span>
            <span className="kutu">redux</span>
            <span className="kutu">axios</span>
            <br />
            <span className="kutu">router</span>
            <span className="kutu">vercel</span>
          </div>
          <div className="tıkla2 mb-6">
            <a href="https://github.com/users/Serramento/projects/4">
              GitHub'da İnceleyin
            </a>
            <a href="dress-for-day-ecommerce-repository.vercel.app">
              Uygulamaya Gidin →
            </a>
          </div>
          <br />
          <img className="bilgisayar2" src={bilgisayar2} alt="bilgisayar2" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsTurkce;
