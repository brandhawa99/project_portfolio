import React from 'react';
import styles from './Tool.module.css';

const Tool = ({ title, img }) => {

  return (
    <div className={styles.mainContainer}>
      <div>{title}</div>
      <img src={img}></img>
    </div>
  );
};

export default Tool;