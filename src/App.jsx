import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Tools from './components/Tools/Tools'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
function App() {

  return (
    <>
      <Menu />
      <div className='App'>
        <Intro />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
