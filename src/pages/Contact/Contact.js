import React from 'react'
import Login from '../Login/Login'
import styles from './Contact.module.css'


export default function Contact() {
  return (
    <>
     <div className={styles.wrapper}>

     <div className={styles.formHead}>
        <h1>Contact Us</h1>
        <p>Few lines about why they should contact us</p>
     </div>

     <form action="">
          <div className={styles.box}>
            <div>
              <label for="text">Name</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label for="email">Email</label>
              <br />
              <input type="email" />
            </div>
        
            <div>
              <label for="number">Phone Number</label>
              <br />
              <input type="number" />
            </div>
            <div>
              <label for="text">Subject</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label for="textarea">Message</label>
              <br />
              <textarea placeholder="type your message here..."></textarea>
            </div>
          </div>

          <div className={styles.formBtn}>
            <input type="submit" value="SEND" />
          </div>
     </form>
     <Login />
     </div>
    </>
  )
}
