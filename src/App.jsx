import React from 'react';
import './App.css';
import Odin from './images/odin.png'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='WholeContainer'>
      <div className='App'>
        <Navbar /> 
        <section id="about" className='introSection'>
          <h1>Hi, I'm Baltej</h1>
          <h3>
            My name is Baltej Randhawa, and I am a full stack web developer from Vancouver BC.
          </h3>
          <img className='odinImg' src={Odin} alt="The odin project"></img>
        </section>              
      </div>
    </div>
  );
}

export default App;
