import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import LogIn from '../login/login';
import styles from './styles.module.scss';

const NavSideBarContainer = ({ children }) => {
  const [loginVisible, toggleLoginVisible] = useState(false);

  const locale = useSelector((state) => state.language.locale);

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
      <LogIn
        onCloseLogin={closeLogin}
        isVisible={loginVisible}
        locale={locale}
      />
    </>
  );
};

export default NavSideBarContainer;
