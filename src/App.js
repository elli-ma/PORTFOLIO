import './App.scss';
import Nav from './components/Nav';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';


function App() {
  //язык
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  //фон
  let startColor = localStorage.getItem("color") ?? '#fff6e5';
  const [view, SetView] = useState(startColor);

  function handleView() {
    if (view == '#fff6e5') {
      localStorage.setItem("color", 'rgb(54, 30, 45);')
      SetView('rgb(54, 30, 45)')
    } else {
      localStorage.setItem("color", '#fff6e5')
      SetView('#fff6e5')
    }
  }


  const textColor = view == 'rgb(54, 30, 45)' ? '#fff6e5' : 'rgb(54, 30, 45)';

  return (

    <div className='wrapper' style={{ backgroundColor: view, color: textColor }}>
      {/* <div className="App">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <hr />
        <div><h1>{t("title")}</h1></div>
        <div>{t("description.part1")}</div>
        <div>{t("description.part2")}</div>
      </div> */}
      <Nav handleView={handleView} changeLanguage={changeLanguage} view={view} />
      <Aboutme />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />

    </div>


  );
}

export default App;
