import React from 'react';
import styles from './FirstSection.module.css';
import { ArrowDownIcon } from '@heroicons/react/solid'

const FirstSection = () =>{

  return(
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
      <div className={styles.centeredText}>
        Hey, welcome to my portfolio. I'm &nbsp;
        <span className={styles.text}>Baltej Randhawa</span> 
        &nbsp;, and I am a fullstack developer currently looking for work!
        </div>
      </div>
      <a className={styles.checkOut} href='#about'>
         <div className={styles.butText}>
            Check me out
          </div>
          <ArrowDownIcon width={20}  className={styles.arrow} />
      </a>
    </div>
  );
};

export default FirstSection;