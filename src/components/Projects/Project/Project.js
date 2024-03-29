import React, { useRef } from "react";
import Link from "../Link/Link"
import styles from "./Project.module.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
const Project = (props) => {
  let { title, blog, tools, link, github, imgLink } = props;
  const textRef = useRef(null);

  return (
    <div className={styles.mainContainer}>
      <img className={styles.image} src={imgLink} alt="project" />
      <div ref={textRef} className={styles.textContainer}>
        <div className={styles.headContainer}>
          <h1 className={styles.header}>{title}</h1>
        </div>
        <p>{blog}</p>
        <hr className={styles.break}></hr>
        <p className={styles.tools}>{tools}</p>
        <div className={styles.links}>
          <Link link={github} text="Repository" />
          <Link link={link} text="Live App" />
        </div>
      </div>
    </div>
  );
};

export default Project;
