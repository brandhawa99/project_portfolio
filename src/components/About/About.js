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
  const fiveRef = useRef(null);
  const sixRef = useRef(null);
  useEffect(() => {
    const el = oneRef.current;
    const el2 = twoRef.current;
    const el3 = threeRef.current;
    const el4 = fourRef.current;
    const el5 = fiveRef.current;
    const el6 = sixRef.current;
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
    gsap.fromTo(
      el5,
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
    gsap.fromTo(
      el6,
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
        <div ref={oneRef}>
          &nbsp; Hi there, my name is Baltej Randhawa and I am a full stack developer.&nbsp;
          With over a year of experience, I have developed a strong foundation in both front-end
          and back-end technologies.&nbsp;
        </div>
        <div ref={twoRef}>
          &nbsp;As a full stack developer, I have experience working with a range of programming languages, including HTML, CSS, JavaScript, TypeScript, Java, and more. I am also proficient in working with popular frameworks like React and ExpressJS.&nbsp;
        </div>
        <div ref={threeRef}>
          &nbsp;I am passionate about building scalable, efficient, and secure web applications that meet the needs of my clients. I have a strong focus on user experience and I always strive to create intuitive and responsive designs that are both functional and visually appealing.

        </div>
        <div ref={fourRef}>
          &nbsp;I have a keen eye for detail and a problem-solving mindset, which enables me to identify and resolve issues quickly and efficiently. Whether it's building a custom web application from scratch or optimizing an existing one, I am confident in my ability to deliver quality results that exceed expectations.
        </div>
        <div ref={fiveRef}>
          &nbsp;In addition to my technical skills, I am also a great communicator and collaborator. I understand the importance of clear and open communication with clients and team members, and I always strive to maintain a collaborative and positive working environment.
        </div>
        <div ref={sixRef}>
          &nbsp;When I'm not coding, you can find me exploring new technologies, and collaborating with other developers to stay on the cutting edge of the industry. I am excited to use my skills and experience to help you bring your ideas to life and create web applications that you will be proud of.
        </div>
      </div>
    </div>
  );
};

export default About;
