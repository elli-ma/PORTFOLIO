import './App.scss';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';


function App() {
  const { i18n } = useTranslation();
  let startLanguage = localStorage.getItem("language") ?? 'en';
  const [language, setLanguage] = useState(startLanguage);

  const changeLanguage = (language) => {
    if (language === 'en') {
      i18n.changeLanguage(language);
      localStorage.setItem("language", 'ru')
      setLanguage('ru')

    } else {
      i18n.changeLanguage(language);
      localStorage.setItem("language", 'en')
      setLanguage('en')
    }
  }

  let startColor = localStorage.getItem("color") ?? '#fff6e5';
  const [view, setView] = useState(startColor);
  function handleView() {
    if (view === '#fff6e5') {
      localStorage.setItem("color", 'rgb(54, 30, 45)')
      setView('rgb(54, 30, 45)')
    } else {
      localStorage.setItem("color", '#fff6e5')
      setView('#fff6e5')
    }
  }
  const textColor = view == 'rgb(54, 30, 45)' ? '#fff6e5' : 'rgb(54, 30, 45)';

  return (

    <div className='wrapper' style={{ backgroundColor: view, color: textColor }}>
      <Nav handleView={handleView} changeLanguage={changeLanguage} view={view} language={language} />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>


  );
}

export default App;
