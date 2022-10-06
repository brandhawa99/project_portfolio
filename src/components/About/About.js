import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import HeaderText from "../HeaderText/HeaderText";
import Rule from "../Rule/Rule";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  useEffect(() => {
    const el = oneRef.current;
    const el2 = twoRef.current;
    const el3 = threeRef.current;
    const el4 = fourRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      el2,
      {
        opacity: 0,
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      el3,
      {
        opacity: 0,
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.5,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      el4,
      {
        opacity: 0,
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.75,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        },
      }
    );
  }, []);

  return (
    <div id="about" className={styles.mainContainer}>
      <Rule />

      <HeaderText text="About Me" />
      <div className={styles.text}>
        <span ref={oneRef}>
          My name is Baltej Randhawa, and I am from Vancouver, BC and I have
          been programming for a few years now.&nbsp; I took a deep dive into
          web development this past year when I discovered "The Odin
          Project".&nbsp;
        </span>
        <span ref={twoRef}>
          Through the process of producing a plethora of personal projects, I
          became obsessed with the designing process of websites. &nbsp;
          Learning how to utilize CSS to manipulate the layout of a webpage and
          style it to my desire was addicting, and learning how to design
          beautiful websites evolved into a passion. &nbsp;
        </span>
        <span ref={threeRef}>
          Then with the guidance of "The Odin Project," I began to dabble in
          back-end development and building APIs. &nbsp; I have now built APIs
          that front-ends can connect to, sign in users and store their data in
          databases. &nbsp;
        </span>
        <span ref={fourRef}>
          I sense that I'm prepared to take the next step and start my journey
          as a professional full software developer.
        </span>
      </div>
    </div>
  );
};

export default About;
