import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className={styles.mainContainer}>
      <HeaderText text="Contact Me" />
      <p>
        Again, my name is Baltej Randhawa. Feel free to contact me as I am
        currently looking for work. I am a passionate fullstack developer, I
        love both front-end and back-end. Feel free to email me and checkout my
        github to look at some of my other work. Thanks for stopping by!
      </p>
      <div className={styles.iconsContainer}>
        <a className={styles.icon} href="mailto: baltej.randhawa0@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="5x" />
          Email
        </a>
        <a
          rel="noreferrer"
          className={styles.icon}
          target="_blank"
          href="https://github.com/brandhawa99"
        >
          <FontAwesomeIcon icon={faGithub} size="5x" />
          Github
        </a>
      </div>
    </div>
  );
};

export default Contact;
