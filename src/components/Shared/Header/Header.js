import React from 'react';
import styles from './header.scss';
import logo from './images/logo.png';

export const Header = () => (
  <header className={styles.Container}>
    <a
      title="realestate.com.au homepage"
      href="/"
      className={styles.LogoWrapper}>
      <img
        src={logo}
        className={styles.Logo}
        alt="realestate.com.au" />
    </a>
  </header>
);

export default Header;
