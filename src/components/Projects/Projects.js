import React from 'react';
import styles from './Projects.module.css';
import Project from './Project/Project'
import projects from '../../projects-data'
const Projects = () => {

  return (
    <div id="projects" className={styles.mainContainer}>
      <h1>Projects</h1>
      <div className={styles.proj}>
        {projects.map(proj => {
          return <Project title={proj.title} blog={proj.blog} tools={proj.tools} link={proj.link} github={proj.github} imgLink={proj.imgLink} />
        })}
      </div>

    </div>
  );
};

export default Projects;