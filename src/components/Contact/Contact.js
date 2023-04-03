import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {

  return (
    <div id="contact" className={styles.mainContainer}>
      <h1>Contact Me!</h1>
      <p>
        Again, my name is Baltej Randhawa. Feel free to contact me as I am currently looking for work. I am a passionate full-stack developer. I love both front-end and back-end. Feel free to
        <a href='mailto: baltej.randhawa0@gmail.com'> email </a> me and check out my <a href='https://github.com/brandhawa99' target="_blank"> Github </a> to look at some of my other work and check me out on <a href='https://www.linkedin.com/in/baltej-randhawa/' target="_blank"> LinkedIn </a>. Thanks for stopping by!
      </p>
      <div className={styles.outro}>
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
        <img src="https://media.giphy.com/media/w9xqv7uWcPe2HRZ5sX/giphy.gif"></img>
      </div>
    </div>
  );
};

export default Contact;