import './App.css';
import Nav from './components/Nav';
import Foto from './components/Foto';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import End from './components/End'
import React, { useState } from "react";



function App() {
  let startColor = localStorage.getItem("color") ?? 'white';

  const [view, SetView] = useState(startColor);

  function handleView() {
    if (view == 'white') {
      localStorage.setItem("color", 'black')
      SetView('black')     
    } else {
      localStorage.setItem("color", 'white')
      SetView('white')   
    }
  }

  const textColor = view == 'white' ? 'black' : 'white'; 

  return (
    <div style={{ backgroundColor: view, color: textColor }}>

      <div className="container-sm fs-5 p-3">
        
        <Nav handleView={handleView} view={view} />
        <hr/>
        <Foto />
        <Aboutme />
        <hr/>
        <Projects />
        <hr/>
        <Skills />
        <hr/>
        <Education />
        <hr/>
        <End />
      </div>
    </div>


  );
}

export default App;
