import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FirstSection from './components/FirstSection/FirstSection';
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  return (
    <div className='WholeContainer'>
      <div className='App'>
        <Navbar />
        <FirstSection />
        <About />
        <Portfolio />
      </div>
    </div>
  );
};

export default App;
