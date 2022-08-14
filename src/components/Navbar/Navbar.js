import React from 'react';
import styles from './Navbar.module.css';
import Menu from '@mui/icons-material/MenuOutlined'
const Navbar = () =>{

  return(
    <div className={styles.mainContainer}>
      <h1 className={styles.name}>
        Baltej <span>Randhawa</span>
      </h1>
      <button>
        <Menu className={styles.icon} />
      </button>
    </div>
  );
};

export default Navbar;