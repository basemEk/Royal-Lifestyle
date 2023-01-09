import React from 'react'
import styles from './ViewAllFeatures.module.css'
import ViewAllFeaturesBanner from "../../assets/view-all-features.png";
import golfBallBook from '../../assets/golf-ball-with-dents.png'
import bookingArrow from '../../assets/arrow-green-packages.png'
import BookTeaTime from '../../components/BookTeaTime/BookTeaTime'
import Dera from '../../assets/uae-dera.png'
import Trump from '../../assets/trump-miami.png'
import Mariot from '../../assets/mariot-hotel.png'
import arrow from '../../images/arrow.png'
import Login from '../Login/Login'


export default function ViewAllFeatures() {
    const featuresCards = [];

  return (
    <>

      <BookTeaTime
          imgBooking = {golfBallBook}
          book = "BOOK TEA-TIME"
          bookArr = {bookingArrow}
      />

        <div className={styles.joumanoBanner}>
          <img src={ViewAllFeaturesBanner} className={styles.bJoumanoTopImg} alt="banner" />
          <div className={styles.lightGreenBanner}>
            <h1>Feature Packages</h1>
            <p>Get unlimited access</p>
          </div>
        </div>

        {/* Apply this map function to loop through the available cards after the client finish their presentation */}
        <ul>
            {featuresCards.map(card => (
                <li key={card}>
                    {card}
                </li>
            ))}
        </ul>


        <div className={styles.featuresContainer}>
            <div className={styles.singleFeature}>
              <div className={styles.singleCard}>
                <div className={styles.singleCardIMage}>
                    <img src={Dera} placeholder='Image' alt='single Card' />
                    <div className={styles.singleCardIMagePrice}>
                      <p>45$</p>
                      <p className={styles.starting}>Starting</p> 
                    </div>
                </div>
                <p className={styles.cardTitle}>The Lagoon Park Hyatt Dubai Deira</p>
                <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                <div className={styles.singleCardarrow}>
                  <a href="/feature-package-details">
                    <img src={arrow} alt='arrow' className={styles.featuresArrow} />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.singleFeature}>
              <div className={styles.singleCard}>
                <div className={styles.singleCardIMage}>
                    <img src={Mariot} placeholder='Image' alt='single Card' />
                    <div className={styles.singleCardIMagePrice}>
                      <p>45$</p>
                      <p className={styles.starting}>Starting</p> 
                    </div>
                </div>
                <p className={styles.cardTitle}>JW Marriott Miami Turnberry <br/> Resort & Spa</p>
                <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                <div className={styles.singleCardarrow}>
                    <img src={arrow} alt='arrow' className={styles.featuresArrow} />
                </div>
              </div>
            </div>

            <div className={styles.singleFeature}>
              <div className={styles.singleCard}>
                <div className={styles.singleCardIMage}>
                    <img src={Trump} placeholder='Image' alt='single Card' />
                    <div className={styles.singleCardIMagePrice}>
                      <p>45$</p>
                      <p className={styles.starting}>Starting</p> 
                    </div>
                </div>
                <p className={styles.cardTitle}>Trump National Miami</p>
                <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                <div className={styles.singleCardarrow}>
                    <img src={arrow} alt='arrow' className={styles.featuresArrow} />
                </div>
              </div>
            </div>

            <div className={styles.singleFeature}>
              <div className={styles.singleCard}>
                <div className={styles.singleCardIMage}>
                    <img src={Trump} placeholder='Image' alt='single Card' />
                    <div className={styles.singleCardIMagePrice}>
                      <p>45$</p>
                      <p className={styles.starting}>Starting</p> 
                    </div>
                </div>
                <p className={styles.cardTitle}>Trump National Miami</p>
                <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                <div className={styles.singleCardarrow}>
                    <img src={arrow} alt='arrow' className={styles.featuresArrow} />
                </div>
              </div>
            </div>

            <div className={styles.singleFeature}>
              <div className={styles.singleCard}>
                <div className={styles.singleCardIMage}>
                    <img src={Mariot} placeholder='Image' alt='single Card' />
                    <div className={styles.singleCardIMagePrice}>
                      <p>45$</p>
                      <p className={styles.starting}>Starting</p> 
                    </div>
                </div>
                <p className={styles.cardTitle}>JW Marriott Miami Turnberry <br /> Resort & Spa</p>
                <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                <div className={styles.singleCardarrow}>
                    <img src={arrow} alt='arrow' className={styles.featuresArrow} />
                </div>
              </div>
            </div>

            <div className={styles.singleFeature}>
              <div className={styles.singleCard}>
                <div className={styles.singleCardIMage}>
                    <img src={Dera} placeholder='Image' alt='single Card' />
                    <div className={styles.singleCardIMagePrice}>
                      <p>45$</p>
                      <p className={styles.starting}>Starting</p> 
                    </div>
                </div>
                <p className={styles.cardTitle}>The Lagoon Park Hyatt Dubai Deira</p>
                <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                <div className={styles.singleCardarrow}>
                    <img src={arrow} alt='arrow' className={styles.featuresArrow} />
                </div>
              </div>
            </div>

            <div className={styles.singleFeature}>
              <div className={styles.singleCard}>
                <div className={styles.singleCardIMage}>
                    <img src={Mariot} placeholder='Image' alt='single Card' />
                    <div className={styles.singleCardIMagePrice}>
                      <p>45$</p>
                      <p className={styles.starting}>Starting</p> 
                    </div>
                </div>
                <p className={styles.cardTitle}>JW Marriott Miami Turnberry <br /> Resort & Spa</p>
                <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                <div className={styles.singleCardarrow}>
                    <img src={arrow} alt='arrow' className={styles.featuresArrow} />
                </div>
              </div>
            </div>

            <div className={styles.allFeaturesLogin}>
                <Login />
            </div>

        </div>

    </>
  )
}
