import React from 'react'
import styles from './Subscribe.module.css'
import subscribeBanner from '../../assets/offers&dealsbanner.png'
import VIP from '../../assets/VIPicon.png'
import Login from '../Login/Login'

export default function Subscribe() {
  return (
    <>
     <div>
        <div className={styles.banner}>
            <img src={subscribeBanner} alt="subscribe banner" className={styles.banner}/>
            <div className={styles.membership}>
                <h1>Membership</h1>
                <p>Get unlimited access</p>
            </div>
        </div>
        <div className={styles.vipSection}>
            <img src={VIP} alt="vip logo" className={styles.vipLogo}/>
            <h1>Membership Benefits</h1>
            <p>Few lines about how it works in here membership and benefits…</p>
        </div>
        <div className={styles.howItWorks}>
            <h1>How It Works</h1>
            <p>Few lines about how it works in here costs benefits…</p>
        </div>
        <div className={styles.thirdSection}>
            <div>
                <h3>Initiation Costs</h3>
                <p>Initiation Costs</p>
            </div>
            <div>
                <h3>Annual Dues</h3>
                <p>I need details to add in here explaining</p>
            </div>
            <div>
                <h3>Membership</h3>
                <p>I need details to add in here explaining <br /> about membership</p>
            </div>
        </div>
        
        <div className={styles.joinToday}>
            <h1>Join Today</h1>
            <p>Few lines about why should join to this amazing experience</p>
        </div>

        <form action="">
            <div className={styles.form}>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>          
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" id="phone" name="phone" />
                </div>
            </div>
            <div className={styles.submit}>
                <input type="submit" value="Subscribe" className={`${styles.submit} ${styles.edge}`}/>
            </div>
        </form>

        <div className={styles.subscribeLogin}>
            <Login />
        </div>

    </div>
    </>
  )
}
