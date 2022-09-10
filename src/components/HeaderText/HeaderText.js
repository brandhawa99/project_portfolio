import React from "react";
import styles from "./HeaderText.module.css";

const HeaderText = (props) => {
  return (
    <h1 ref={props.ref} className={styles.mainContainer}>
      {props.text}
    </h1>
  );
};

export default HeaderText;
