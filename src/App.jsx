import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';

function App() {

  return (
    <div className='WholeContainer'>
      <div className='App'>
        <Navbar /> 
        <Homepage />
      </div>
    </div>
  );
};

export default App;
