import React from "react";
import styles from "./Login.module.css";
import LoginLogo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {
  const [message, setMessage] = useState("");
  const [passwrd, setPasswrd] = useState(null);

  function handleChange(event) {
    console.log("handle function 1")
    setMessage(event.target.value);
  };

  function handleChangePassword(e) {
    console.log("handle function 2")
    setPasswrd(e.target.value);
  };

  return (
      <div className={styles.loginWrapper} id="loginForm">
        <div className={styles.loginLogo}>
          <img src={LoginLogo} className={styles.loginLogo} alt="login logo" />
        </div>

        <div className={styles.LoginTitle}>
          <p>Login to your Account</p>
        </div>

        <form className={styles.LoginForm}>
          <label>Email</label>
          <input
            type="email"
            className={styles.em}
            placeholder="Login with your email"
            onChange={handleChange}
            value={message}
          />
          <label>Password</label>
          <input
            type="password"
            className={styles.pass}
            placeholder="Password"
            onChange={handleChangePassword}
            value={passwrd}
          />

          <div className={styles.forgetPw}>
            <Link to="/reset-password"><p className={styles.forgetPwP}>Forget Password?</p></Link>
          </div>

          <div className={styles.LoginBtn}>
            <input type="submit" value="LOGIN" className={styles.LoginBtn} />
          </div>

          <p className={styles.signUpCheck}>Don’t have an account? <Link to="/sign-up"><p className={styles.signUp}>Sign Up</p></Link></p>

        </form>
      </div>
  );
}
