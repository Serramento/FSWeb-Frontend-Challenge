import React from "react";
import "./components.css";
import bilgisayar1 from "../images/bilgisayar1.png";
import bilgisayar2 from "../images/bilgisayar2.png";

const Projects = () => {
  return (
    <div className="projeler">
      <h2>Projects</h2>
      <div className="projelerBölümleri">
        <div className="sol">
          <h3>Pizza Project</h3>
          <p>
            Would you like to order a pizza? This project is based on three
            pages. Home page, order page and success page.
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
              View on GitHub
            </a>
            <a href="https://fsweb-s7-challenge-pizza-peach-omega.vercel.app/">
              Go to app →
            </a>
          </div>
          <br />
          <br />
          <img className="bilgisayar1" src={bilgisayar1} alt="bilgisayar1" />
        </div>
        <div className="sağ">
          <h3>DressForDay Project</h3>
          <p>
            This is a clothing e-commerce website project. Still working on it,
            but you can check the progress on links!
          </p>
          <div className="kutular2 mt-2">
            <span className="kutu">react</span>
            <span className="kutu">redux</span>
            <span className="kutu">axios</span>
            <br />
            <span className="kutu">router</span>
            <span className="kutu">vercel</span>
          </div>
          <div className="tıkla2 mt-5 mb-5">
            <a href="https://github.com/users/Serramento/projects/4">
              View on GitHub
            </a>
            <a href="dress-for-day-ecommerce-repository.vercel.app">
              Go to app →
            </a>
          </div>
          <br />
          <img className="bilgisayar2" src={bilgisayar2} alt="bilgisayar2" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
