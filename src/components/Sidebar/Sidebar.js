import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div onClick={props.exit} className={styles.exitButton}>
        {" "}
        &#x2715;{" "}
      </div>
      <ul className={styles.list}>
        <li onClick={props.exit}>
          <a href="#"> Baltej Randhawa </a>
        </li>
        <li onClick={props.exit}>
          <a href="#about"> About </a>
        </li>
        <li onClick={props.exit}>
          <a href="#portfolio"> Portfolio </a>
        </li>
        <li onClick={props.exit}>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
