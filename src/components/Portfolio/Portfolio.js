import React from "react";
import styles from "./Portfolio.module.css";
import HeaderText from "../HeaderText/HeaderText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import {
  faNode,
  faGitAlt,
  faGithub,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import Project from "../Project/Project";
import projects from "../../projects-data";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.mainContainer}>
      <HeaderText text="Portfolio" />
      <div className={styles.sectionContainer}>
        <h1>Skills</h1>
        <div className={styles.skillsContainer}>
          <div>
            <h3 className={styles.skillsHeader}>Front-End</h3>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.tooltip} icon={faReact} />
              <FontAwesomeIcon className={styles.tooltip} icon={faJs} />
              <FontAwesomeIcon className={styles.tooltip} icon={faHtml5} />
              <FontAwesomeIcon className={styles.tooltip} icon={faCss3} />
              <div className={styles.iconText}>Material UI</div>
              <div className={styles.iconText}>Tailwind</div>
              <div className={styles.iconText}>Jest</div>
              <div className={styles.iconText}>Webpack</div>
            </div>
          </div>
          <div>
            <h3 className={styles.skillsHeader}>Back-End</h3>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.tooltip} icon={faNode} />
              <div className={styles.iconText}>Express js</div>
              <div className={styles.iconText}>MongoDB</div>
              <div className={styles.iconText}>Mongoose</div>
              <div className={styles.iconText}>Restful API's</div>
              <div className={styles.iconText}>Heroku</div>
              <div className={styles.iconText}>Firebase</div>
              <div className={styles.iconText}>Jest</div>
              <div className={styles.iconText}>Supertest</div>
            </div>
          </div>
          <div>
            <h3 className={styles.skillsHeader}>Other Tools</h3>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.tooltip} icon={faGitAlt} />
              <FontAwesomeIcon className={styles.tooltip} icon={faGithub} />
              <FontAwesomeIcon className={styles.tooltip} icon={faNpm} />
              <div className={styles.iconText}>Github Actions</div>
            </div>
          </div>
        </div>
      </div>

      <h1>Projects</h1>
      <div className={styles.projectContainer}>
        {projects.map((project) => {
          let { id, title, blog, tools, link, github, imgLink } = project;
          return (
            <Project
              key={id}
              id={id}
              title={title}
              blog={blog}
              tools={tools}
              link={link}
              github={github}
              imgLink={imgLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
