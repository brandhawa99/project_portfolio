import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}><a href="#">BR</a></li>
        <li className={styles.navbar__item}><a href="#about">About</a></li>
        <li className={styles.navbar__item}><a href="#tools">Tools</a></li>
        <li className={styles.navbar__item}><a href="#projects">Projects</a></li>
        <li className={styles.navbar__item}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;