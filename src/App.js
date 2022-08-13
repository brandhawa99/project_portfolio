import React from 'react';
import styles from  './App.module.css';
import Odin from './images/odin.png'

function App() {
  return (
    <div className={styles.WholeContainer}>
      <div className={styles.App}>
        <header className={styles.header}>
          <h1>
            Baltej Randhawa
          </h1>
          <div className={styles.ButtonContainer}>
            <a href='#about'>
              About
            </a>        
            <a href='#portfolio'>
              portfolio
            </a>
          </div>
        </header>
        <section className={styles.introSection}>
          <h1>Hi, I'm Baltej</h1>
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
