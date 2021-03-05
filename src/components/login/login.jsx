import React from 'react';
import styles from "./styles.module.scss";
import googleLogo from "../../assets/images/sso/google.svg";
import facebookLogo from "../../assets/images/sso/facebook.svg";

const LogIn = ({ isVisible, closeLogin }) => {
  console.log(isVisible);
  return (
    <div className={`${styles.loginModal} ${isVisible ? styles.open : styles.close}`}>
      <div className={styles.loginContainer}>
        <div className={styles.header}>
          <div className={styles.title}>Login</div>
          <button
            className={styles.closeLogin}
            onClick={closeLogin}
          >
            &times;
          </button>
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>Login</h2>
          <h2 className={styles.subHeading}>Get access to your Orders, Wishlist and Recommendations</h2>
          <div className={styles.ssoContainer}>
            <button className={styles.LoginWithGoogleButton}>
              <img src={googleLogo} alt="Google Inc." />
              <span className={styles.text}>Login with Google</span>
            </button>
            <button className={styles.LoginWithFacebookButton}>
              <img src={facebookLogo} alt="Facebook." />
              <span className={styles.text}>Login with Facebook</span>
            </button>
          </div>
          <div className={styles.form}>
            <div className={styles.fieldSet}>
              <label htmlFor="loginUsername">Username / Email address</label>
              <div className={styles.inputWrap}>
                {/* icon */}
                <input id="loginUsername" type="text" autoFocus placeholder="Enter email address or username" />
              </div>
            </div>
            <div className={styles.fieldSet}>
              <label htmlFor="loginPassword">Password</label>
              <div className={styles.inputWrap}>
                {/* icon */}
                <input id="loginPassword" type="password" autoFocus placeholder="Enter your password" />
              </div>
            </div>
            <div className={`${styles.fieldSet} ${styles.loginActions}`}>
              <label className={styles.rememberMe}>
                <input type="checkbox" />
                Remember me
              </label>
              <button className={styles.logInButton}>
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bottomFixed}>
          <a href="/forgot-password">Forgot password?</a>
          <a href="/create-account">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;