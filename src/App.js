import './App.scss';
import Nav from './components/Nav';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useState } from "react";



function App() {

  let startColor = localStorage.getItem("color") ?? '#fff6e5';
  const [view, SetView] = useState(startColor);
  function handleView() {
    if (view == '#fff6e5') {
      localStorage.setItem("color", 'rgb(54 30 45);')
      SetView('rgb(54 30 45)')
    } else {
      localStorage.setItem("color", '#fff6e5')
      SetView('#fff6e5')
    }
  }

  const textColor = view == 'rgb(54 30 45)' ? '#fff6e5' : 'rgb(54 30 45)';

  return (
    <div style={{ backgroundColor: view, color: textColor }}>
      <Nav handleView={handleView} view={view} />
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
