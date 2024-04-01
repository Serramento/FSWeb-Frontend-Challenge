import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import HeaderTurkce from "./components/HeaderTurkce";
import SkillsTurkce from "./components/SkillsTurkce";
import ProfileTurkce from "./components/ProfileTurkce";
import ProjectsTurkce from "./components/ProjectsTurkce";
import FooterTurkce from "./components/FooterTurkce";
import { ReactComponent as Ellipse10 } from "./svg/Ellipse 10.svg";

const App = () => {
  const [language, setLanguage] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const history = useHistory();

  const handleLanguageChange = () => {
    if (language === false) {
      history.push("/turkce");
      setLanguage(true);
    } else {
      history.push("/");
      setLanguage(false);
    }
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={darkMode ? "dark" : null}>
      <div className="container ">
        <div className="ellipse10">
          <Ellipse10 />
        </div>
        <nav className="navigate">
          <label class="switch">
            <input type="checkbox" onClick={handleDarkMode} />
            <span class="slider"></span>
          </label>
          {darkMode === true ? (
            <p>
              <span>LIGHT MODE</span>
            </p>
          ) : (
            <p>
              <span>DARK MODE</span>
            </p>
          )}
          <span>|</span>
          <button onClick={handleLanguageChange}>
            {language === false ? (
              <p>
                <span className="text-[#E92577]">TÜRKÇE</span>'YE GEÇ
              </p>
            ) : (
              <p>
                ENABLE<span className="text-[#E92577]">ENGLISH</span>
              </p>
            )}
          </button>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </Route>

        <Route path="/turkce">
          <HeaderTurkce />
          <SkillsTurkce />
          <ProfileTurkce />
          <ProjectsTurkce />
          <FooterTurkce />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
