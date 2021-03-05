import React, { useState, useEffect } from 'react';
import LogIn from '../login/login';

import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import styles from './styles.module.scss';

const NavSideBarContainer = ({ children }) => {
  const [loginVisible, toggleLoginVisible] = useState(false);

  const openLogin = (event) => {
    toggleLoginVisible(true);
  };

  const closeLogin = (event) => {
    toggleLoginVisible(false);
  };

  return (
    <>
      <Navigation />
      <Sidebar openLogin={openLogin} />
      <div className={styles.appContent}>{children}</div>
      <LogIn closeLogin={closeLogin} isVisible={loginVisible} />
    </>
  );
};

export default NavSideBarContainer;
