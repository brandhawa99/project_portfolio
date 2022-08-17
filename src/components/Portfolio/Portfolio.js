import React from 'react';
import styles from './Portfolio.module.css';
import HeaderText from '../HeaderText/HeaderText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faNode, faGitAlt, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () =>{

  return(
    <div className={styles.mainContainer}>
      <HeaderText text="Portfolio"/>
      <div className={styles.skillsContainer}>

        <h2 className={styles.smallHeader}>Skills</h2>
          <div>
            <h3>Front-End</h3>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.tooltip} icon={faReact}/>
                <FontAwesomeIcon className={styles.tooltip}icon={faJs}/>
                <FontAwesomeIcon  className={styles.tooltip}icon={faHtml5}/>
                <FontAwesomeIcon  className={styles.tooltip} icon={faCss3}/>
                <div className={styles.iconText}>Material UI</div>
                <div className={styles.iconText}>Tailwind</div>
                <div className={styles.iconText}>Jest</div>
                <div className={styles.iconText}>Webpack</div>
              </div>
          </div>
          <div>
            <h3>Back-End</h3>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.tooltip}  icon={faNode}/>
                <div className={styles.iconText}>Express js</div>
                <div className={styles.iconText}>MongoDB</div>
                <div className={styles.iconText}>Mongoose</div>
                <div className={styles.iconText}>Restful API's</div>
                <div className={styles.iconText}>Heroku</div>
                <div className={styles.iconText}>Firebase</div>
              </div>
          </div>
          <div>
            <h3>Other Tools</h3>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.tooltip} icon={faGitAlt}/>
                <FontAwesomeIcon className={styles.tooltip} icon={faGithub}/>
                <FontAwesomeIcon className={styles.tooltip} icon={faNpm}/>
                <div className={styles.iconText}>Github Actions</div>
              </div>
          </div>

      </div>

      <div>
        <h2>Projects</h2>
        <div>
            
        </div>

      </div>
    </div>
  );
};

export default Portfolio;