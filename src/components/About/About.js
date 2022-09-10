import React from "react";
import styles from "./About.module.css";
import HeaderText from "../HeaderText/HeaderText";
const About = () => {
  return (
    <div id="about" className={styles.mainContainer}>
      <HeaderText text="About Me" />
      <div className={styles.text}>
        My name is Baltej Randhawa, and I am from Vancouver, BC and I have been
        programming for a few years now. I took a deep dive into web development
        this past year when I discovered The Odin Project. Through the process
        of producing a plethora of personal projects, I became obsessed with the
        designing process of websites. Learning how to utilize CSS to manipulate
        the layout of a webpage and style it to my desire was addicting, and
        learning how to design beautiful websites evolved into a passion. Then
        with the guidance of "The Odin Project," I began to dabble in back-end
        development and building APIs. I have now built APIs that front-ends can
        connect to, sign in users and store their data in databases. I sense
        that I'm prepared to take the next step and start my journey as a
        professional full stack developer.
      </div>
    </div>
  );
};

export default About;
