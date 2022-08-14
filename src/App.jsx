import React from 'react';
import styles from  './App.css';
import Odin from './images/odin.png'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.WholeContainer}>
      <div className={styles.App}>
        <section id="about" className={styles.introSection}>
          <Navbar /> 
          <h1>Hi, I'm Baltej</h1>
          <h3>
            My name is Baltej Randhawa, and I am a full stack web developer from Vancouver BC.
          </h3>
          <img className={styles.odinImg} src={Odin} alt="The odin project"></img>
        </section>        
        <section id="portfolio" className={styles.introSection}>
          <h1>Hi, I'm portfolio</h1>
          <h1>I'm a full stack devloper </h1>
          <h3>I learned my these skills through The Odin Project. The projects started out small
          </h3>
          <img className={styles.odinImg} src={Odin} alt="The odin project"></img>
        </section>        
      </div>
    </div>
  );
}

export default App;
