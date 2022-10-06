import React from "react";
import styles from "./Tip.module.css";
import Tippy from "@tippyjs/react";

const Tip = (props) => {
  const { link } = props;
  let name;
  function getName() {
    let arr = link.split("/");
    name = arr[7];
  }
  getName();
  return (
    <div className={styles.mainContainer}>
      <img src={link} alt={name}></img>
      <span className={styles.tip}>{name}</span>
    </div>
  );
};

export default Tip;
