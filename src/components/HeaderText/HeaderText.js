import React, { useEffect, useRef } from "react";
import styles from "./HeaderText.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeaderText = (props) => {
  const textRef = useRef(null);
  useEffect(() => {
    let el = textRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        },
      }
    );
  }, []);
  return (
    <h1 ref={textRef} className={styles.mainContainer}>
      {props.text}
    </h1>
  );
};

export default HeaderText;
