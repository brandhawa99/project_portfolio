import React from 'react';
import styles from './Navbar.module.css';
import { MenuIcon } from '@heroicons/react/solid';

const Navbar = () =>{

  return(
    <div className={styles.mainContainer}>
      <h1>Baltej Randhawa</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.navButton}>About</button>
        <button className={styles.navButton}>Portfolio</button>
        <button className={styles.navButton}>Contact</button>
      </div>
      <div className={styles.menuIcon}>
        <MenuIcon width={24} />
      </div>
    </div>
  );
};

export default Navbar;