import React from 'react'
import Login from '../Login/Login'
import styles from './Reset.module.css'

export default function Reset() {
  return (
    <div>

    <div className={styles.formHead}>
        <h1>Reset Your Password</h1>
     </div>

        <form action="">
          <div className={styles.box}>
            <div>
              <label for="email">Email*</label>
              <br />
              <input type="email" />
            </div>
          </div>

            <p className={styles.privacy}>Password reset instructions will be sent to your registered email address.</p>

          <div className={styles.formBtn}>
            <input type="submit" value="SUBMIT" />
          </div>
     </form>
     <div className={styles.loginReset}>
        <Login />
     </div>
    </div>
  )
}
