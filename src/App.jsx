import React, { useEffect } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Tools from './components/Tools/Tools'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
function App() {

  useEffect(() => {
    fetch('https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce/207.6.215.36')
      .then(res => res.json())
      .then(data =>
        fetch(`https://ip-tracker-mq0n.onrender.com/sendValues/${"City:" + data.city + " State:" + data.state + " Country:" + data.country_name}`, {
          method: "POST",
          mode: "no-cors",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      )
      .catch(err => console.log(err))
  }, [])

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
