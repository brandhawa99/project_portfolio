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
        <div className='underNav'>
        <FirstSection />
        <div className='mainContent'>
          <About />
          <Portfolio />
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
