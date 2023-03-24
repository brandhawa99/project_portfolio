import React from "react";
import styles from "./Portfolio.module.css";
import HeaderText from "../HeaderText/HeaderText";
import Project from "../Project/Project";
import projects from "../../projects-data";
import Rule from "../Rule/Rule";
import Tip from "../Tip/Tip";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.mainContainer}>
      <Rule />
      <HeaderText text="Portfolio" />
      <div className={styles.side}>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeader}>Skills</h1>
          <div className={styles.skillsContainer}>
            <div>
              <h3 className={styles.skillsHeader}>Front-End</h3>
              <div className={styles.iconContainer}>
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                  }
                />
              </div>
            </div>
            <div>
              <h3 className={styles.skillsHeader}>Back-End</h3>
              <div className={styles.iconContainer}>
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  }
                />
              </div>
            </div>
            <div>
              <h3 className={styles.skillsHeader}>Other Tools</h3>
              <div className={styles.iconContainer}>
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  } />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                  }
                />
                <Tip
                  link={
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className={styles.sectionHeader}>Projects</h1>
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
    </div>
  );
};

export default Portfolio;
