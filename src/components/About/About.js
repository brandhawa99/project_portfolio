import React from 'react';
import styles from './About.module.css';

const About = () =>{

  return(
    <>
    <div id="about" className={styles.mainContainer}>
      <h1 className={styles.backgroundText}>
        About
      </h1>
    </div>
    <div className={styles.content}>

    </div>
    </>
  );
};

export default About;