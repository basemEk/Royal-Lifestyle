import React from 'react'
import Login from '../Login/Login'
import styles from "./SignUp.module.css"


export default function SignUp() {
  return (
    <div>

    <div className={styles.formHead}>
        <h1>Create New Account</h1>
     </div>

        <form action="">
          <div className={styles.box}>
            <div>
              <label for="email">Email</label>
              <br />
              <input type="email" />
            </div>
        
            <div>
              <label for="password">Password</label>
              <br />
              <input type="password" />
            </div>

            <div>
              <label>Confirm Password</label>
              <br />
              <input type="password" />
            </div>
          </div>

            <p className={styles.privacy}>By proceeding, you confirm that you accept our Privacy Policy and Terms of Use</p>

          <div className={styles.formBtn}>
            <input type="submit" value="Sign Up" />
          </div>
     </form>

    <div className={styles.signUpLogin}>
      <Login />
    </div>

    </div>
  )
}