import React from "react";
import styles from "./Tip.module.css";

const Tip = (props) => {
  const { link } = props;
  let name;
  function getName() {
    let arr = link.split("/");
    name = arr[7];
    if (name === "amazonwebservices") {
      name = "AWS"
    }
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
