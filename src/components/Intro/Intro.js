import React from 'react';
import styles from './Intro.module.css';
import bg from '../../images/tim-navis-Flxl7OUuO1M-unsplash.jpg'

const Intro = () => {

  return (
    <div className={styles.mainContainer}>
      <h1>Hello,</h1>
      <h3>My name is Baltej Randhawa.</h3>
      <p>
        I am a software developer from Vancouver, BC. I have almost 2 years of experience building full-stack applications. I am currently looking for a job, so thank you for checking out my portfolio!
      </p>
      <a className={styles.button} href="#about">Learn About Me</a>
      <img className={styles.img} src={bg} alt='bg'></img>
    </div>
  );
};

export default Intro;