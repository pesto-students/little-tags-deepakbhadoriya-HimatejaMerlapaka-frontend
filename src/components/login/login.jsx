import React from 'react';
import styles from "./styles.module.scss";
import googleLogo from "../../assets/images/sso/google.svg";
import facebookLogo from "../../assets/images/sso/facebook.svg";
import ArrowRightIcon from '../../assets/icons/arrows/arrowRight';
import { FormattedMessage, useIntl } from 'react-intl';

const LogIn = ({ isVisible, onCloseLogin: closeLogin, locale }) => {
  const intl = useIntl();

  return (
    <div className={`${styles.loginModal} ${isVisible ? styles.open : styles.close}`}>
      <div className={styles.loginContainer}>
        <div className={styles.header}>
          <div className={styles.title} lang={locale}>
            <FormattedMessage id="login" />
          </div>
          <button
            className={styles.closeLogin}
            onClick={closeLogin}
          >
            &times;
          </button>
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading} lang={locale}><FormattedMessage id="login_with_your_account" /></h2>
          <h2 className={styles.subHeading} lang={locale}><FormattedMessage id="access_recommendations" /></h2>
          <div className={styles.ssoContainer}>
            <button className={styles.LoginWithGoogleButton}>
              <div className={styles.buttonContent} lang={locale}>
                <img src={googleLogo} alt="Google Inc." />
                <FormattedMessage id="login_with_google" />
              </div>
            </button>
            <button className={styles.LoginWithFacebookButton}>
              <div className={styles.buttonContent} lang={locale}>
                <img src={facebookLogo} alt="Facebook." />
                <FormattedMessage id="login_with_fb" />
              </div>
            </button>
          </div>
          <div className={styles.legend} lang={locale}>
            <span lang={locale}><FormattedMessage id="alternate_login" /></span>
          </div>
          <div className={styles.form}>
            <div className={styles.fieldSet}>
              <label htmlFor="loginUsername" lang={locale}>
                <FormattedMessage id="email_or_username" />
              </label>
              <div className={styles.inputWrap}>
                <input id="loginUsername" type="text" autoFocus placeholder={intl.formatMessage({ id: 'username_prompt' })} />
              </div>
            </div>
            <div className={styles.fieldSet}>
              <label htmlFor="loginPassword" lang={locale}>
                <FormattedMessage id="password" />
              </label>
              <div className={styles.inputWrap}>
                <input id="loginPassword" type="password" placeholder={intl.formatMessage({ id: 'password_prompt' })} />
              </div>
            </div>
            <div className={`${styles.fieldSet} ${styles.loginActions}`} lang={locale}>
              <label className={styles.rememberMe}>
                <input type="checkbox" />
                <FormattedMessage id="remember_me" />
              </label>
              <button className={styles.logInButton}>
                <FormattedMessage id="login" />
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bottomFixed} lang={locale}>
          <a href="/forgot-password">
            <FormattedMessage id="forgot_password" />
          </a>
          <a href="/create-account">
            <FormattedMessage id="create_account" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;