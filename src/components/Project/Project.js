import React from "react";
import Link from "../Link/Link";
import styles from "./Project.module.css";

const Project = (props) => {
  let { id, title, blog, tools, link, github, imgLink } = props;

  return (
    <div className={styles.mainContainer}>
      <img className={styles.image} src={imgLink} alt="project" />
      <div className={styles.textContainer}>
        <div className={styles.headContainer}>
          <h1 className={styles.header}>{title}</h1>
        </div>
        <p>{blog}</p>
        <hr className={styles.break}></hr>
        <p>{tools}</p>
        <div className={styles.links}>
          <Link link={github} text="Repository" />
          <Link link={link} text="Live App" />
        </div>
      </div>
    </div>
  );
};

export default Project;
