import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Rule from "../Rule/Rule";
const Contact = () => {
  return (
    <div id="contact" className={styles.mainContainer}>
      <Rule />
      <HeaderText text="Contact Me" />
      <p className={styles.text}>
        Again, my name is Baltej Randhawa. Feel free to contact me as I am
        currently looking for work. I am a passionate full-stack developer. I
        love both front-end and back-end. Feel free to email me and check out my
        GitHub to look at some of my other work. Thanks for stopping by!
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
        <a
          rel="noreferrer"
          className={styles.icon}
          target="_blank"
          href="https://www.linkedin.com/in/baltej-randhawa/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="5x" />
          Linkedin
        </a>
      </div>
      <img src="https://media.giphy.com/media/SWVvc60hK5uDKEiIGL/giphy.gif"></img>
    </div>
  );
};

export default Contact;
