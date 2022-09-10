import React from "react";
import styles from "./Link.module.css";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Link = (props) => {
  let { link, text } = props;
  return (
    <a target="_blank" href={link} className={styles.mainContainer}>
      {text}
      <ArrowRightIcon width={20} className={styles.arrow} />
    </a>
  );
};

export default Link;
