import React from 'react';
import styles from './Portfolio.module.css';
import HeaderText from '../HeaderText/HeaderText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () =>{

  return(
    <div className={styles.mainContainer}>
      <HeaderText text="Portfolio"/>
      <div className={styles.skillsContainer}>

        <h2 className={styles.smallHeader}>Skills</h2>
          <div>
            <h3>Front-End</h3>
              <div>
              <FontAwesomeIcon icon={faReact}/>
              </div>
          </div>

      </div>
    </div>
  );
};

export default Portfolio;