import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { MenuIcon } from "@heroicons/react/solid";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const setMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.text}>
        <a className={styles.none} href="#">
          Baltej Randhawa
        </a>
      </h1>
      <div className={styles.buttonContainer}>
        <a href="#about" className={styles.navButton}>
          About
        </a>
        <a href="#portfolio" className={styles.navButton}>
          Portfolio
        </a>
        <a href="#contact" className={styles.navButton}>
          Contact
        </a>
      </div>
      <div className={styles.menuIcon}>
        <MenuIcon width={24} onClick={setMenu} />
      </div>
      {open && <Sidebar exit={setMenu} />}
    </div>
  );
};

export default Navbar;
