import React from 'react';
import styles from  './App.module.css';

function App() {
  return (
    <div className={styles.WholeContainer}>
      <div className={styles.App}>
        <header className={styles.header}>
          <a href='#about'>
            About
          </a>        
          <h1>
            Baltej Randhawa
          </h1>
          <a href='#portfolio'>
            portfolio
          </a>
        </header>
        <section className={styles.section}>
          <h1>Hi, I'm Baltej</h1>
        </section>
        
      </div>
    </div>
  );
}

export default App;
