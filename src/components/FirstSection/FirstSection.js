import React, { useEffect, useRef } from "react";
import styles from "./FirstSection.module.css";
import { ArrowDownIcon } from "@heroicons/react/solid";
import { gsap } from "gsap/dist/gsap";
import { Power3 } from "gsap";
const FirstSection = () => {
  let textContainer = useRef(null);
  let name = useRef(null);
  let button = useRef(null);
  useEffect(() => {
    gsap.from(button, {
      duration: 3,
      opacity: 0,
      delay: 1.75,
      y: 50,
      ease: Power3.easeIn,
    });
    gsap.from(name, {
      duration: 1,
      opacity: 0,
      delay: 1,
      y: -80,
      ease: Power3.easeInOut,
    });

    gsap.from(textContainer, {
      duration: 1,
      opacity: 0,
      delay: 0.5,
      y: +50,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div ref={(el) => (textContainer = el)} className={styles.textContainer}>
        <div className={styles.centeredText}>
          Hey, welcome to my portfolio. I'm &nbsp;
          <span ref={(el) => (name = el)} className={styles.text}>
            Baltej Randhawa
          </span>
          &nbsp;, and I am a fullstack developer currently looking for work!
        </div>
      </div>
      <a ref={(el) => (button = el)} className={styles.checkOut} href="#about">
        <div className={styles.butText}>Check me out</div>
        <ArrowDownIcon width={20} className={styles.arrow} />
      </a>
    </div>
  );
};

export default FirstSection;
