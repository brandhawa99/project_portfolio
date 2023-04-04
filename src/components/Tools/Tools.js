import React from 'react';
import styles from './Tools.module.css';
import Tool from './Tool/Tool'
import { frontEnd, backEnd, tools } from '../../tools-data'
import { v4 } from 'uuid'

const Tools = () => {

  return (
    <div id='tools' className={styles.mainContainer}>
      <h1>Tools</h1>
      <h3>Front-End</h3>
      <div className={styles.items}>
        {frontEnd.map(item => {
          return <Tool key={v4()} title={item.title} img={item.img} />
        })}
      </div>
      <h3>Back-End</h3>
      <div className={styles.items}>
        {backEnd.map(item => {
          return <Tool key={v4()} title={item.title} img={item.img} />
        })}
      </div>
      <h3>Other Tools</h3>
      <div className={styles.items}>
        {tools.map(item => {
          return <Tool key={v4()} title={item.title} img={item.img} />
        })}
      </div>


    </div>
  );
};

export default Tools;