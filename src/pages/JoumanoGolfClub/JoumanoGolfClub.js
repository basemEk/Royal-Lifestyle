import React from "react";
import styles from "./JoumanoGolfClub.module.css";
import bannerJoumano from "../../assets/joumano/Joumano-banner-component.png";
import JC from '../../assets/Group 4109.png'
import jcVideoImg from "../../assets/joumano/jack-charles.png";
import jcDriver from "../../assets/joumano/JC-nb2-driver-joumano.png";
import theOnlyOne from "../../assets/joumano/jc-the-only-one.png";
import theOnlyOneRed from "../../assets/joumano/jc-the-only-one-red.png";
import threeGolf from "../../assets/joumano/explosive-power.png";
import addMore from "../../assets/joumano/add-more-oomph-banner.png";
import theWedgeStick from "../../assets/joumano/the-wedge-stick.png";
import playerTwo from "../../assets/joumano/player-2.png";
import asSeenOn from "../../assets/joumano/as-seen-on.png";
import golfKit from "../../assets/joumano/golf-kit.png";
import jcInWhiteShirt from "../../assets/joumano/jack-joumano.png";
import Login from "../Login/Login";
import golfBallBook from '../../assets/golf-ball-with-dents.png'
import bookingArrow from '../../assets/arrow-green-packages.png'
import BookTeaTime from '../../components/BookTeaTime/BookTeaTime'


export default function JoumanoGolfClub() {
  return (
    <>
      <div className={styles.joumanoWrapper}>

      <BookTeaTime
          imgBooking = {golfBallBook}
          book = "BOOK TEA-TIME"
          bookArr = {bookingArrow}
      />

        <div className={styles.joumanoBanner}>
          <img src={bannerJoumano} className={styles.bJoumanoTopImg} alt="banner" />
          <div className={styles.lightGreenBanner}>
            <h1>Jack Charles Golf Clubs</h1>
            <p>Clubs made for golfers by a golfer</p>
          </div>
        </div>

        <div className={styles.greenBar}>
          <div className={styles.greenBarContent}>
             <div>Dubai: +971 56 710 6410</div>
             <div>cs@jackcharlesgolf.com</div> 
          </div>
        </div>
        
        <div className={styles.clubDesignedContainer}>
          <img className={styles.jcImg} src={JC} alt="jc" />
          <h2>Clubs Designed for Golfers by a Golfer</h2>
          <p>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante blandit sapien viverra nunc.”</p>
        </div>

        <div className={styles.jcharlesVideoDiv}>
          <img src={jcVideoImg} className={styles.jcharlesVideoDiv} alt="jack charles" />
        </div>

        <div className={styles.clubDesignedContainer}>
          <h2>Easy-To-Hit – Longer & Straighter Balls!</h2>
          <p>“Controlled ball spin and trajectory… farther, straighter shots…” These words represent a great round of golf to most golfers. This is where we come in…</p>
        </div>

        <div className={styles.jcharlesVideoDiv}>
          <img src={jcDriver} alt="jack charles" className={styles.jcharlesVideoDiv} />
        </div>

        <div className={styles.clubDesignedContainer}>
          <h2>Our Newest Sensation</h2>
          <p>“Controlled ball spin and trajectory… farther, straighter shots…” These words represent a great round of golf to most golfers. This is where we come in…</p>
        </div>

        <div className={styles.theOnlyOneFlex}>
          <div><img src={theOnlyOne} alt="the only one jc" className={styles.theOnlyOneFlexImg} /></div>
          <div><img src={theOnlyOneRed} alt="the only one jc" className={styles.theOnlyOneFlexImg} /></div>
        </div>

        <div className={styles.temporary}>
          <h4>TEMPORARY INTRODUCTORY DISCOUNT</h4>
          <button>ORDER NOW</button>
        </div>

        <div className={styles.txt}>
          <p>For any ambitious golfer seeking rapid advancement and fast improvement in his/her swing and hitting distance. Our golf club line provides these tools and will get you there fast… enhancing your accuracy, distance and consistency.</p>
        </div>

        <div>
          <img src={threeGolf} className={styles.threeImgGolf} alt="three persons playing golf" />
        </div>

          <div className={styles.brownOmph}>
            <p className={styles.brownOmphPar}>Our Irons Are Made In Combination, Easy-To-Hit 1/2, 3/4, 5/6, 7/8, 9/PW, GW/SW AND A L/W</p>
          </div>
          
          <div className={styles.brownBarOmph}>
            <img src={addMore} className={styles.omphImg} alt="three persons playing golf" />
          </div>

          <div className={styles.clubDesignedContainer}>
            <h2>Easy-To-Hit – Longer and Straighter shots!</h2>
            <p>This combo GW/SW is going to change the way the game of golf is played as the ball “stops now” no matter the lie angle, because the club face is made with both dots & score lines. The ball simply “splashes out of “bad stuff!”</p>
          </div>

          <div className={styles.theOnlyOneFlex}>
            <div><img src={theWedgeStick} className={styles.headGolfStick} alt="the wedge stick" /></div>
            <div><img src={playerTwo} className={styles.headGolfStick} alt="golf player" /></div>
          </div>

          <div className={styles.threeImG}>
            <div><img src={asSeenOn} alt=""/></div>
            <div><img src={golfKit} className={styles.gKit} alt=""/></div>
            <div><img src={jcInWhiteShirt} alt=""/></div>
          </div>

          <div className={styles.email}><h2>Shoot Us An Email</h2></div>

          <form action="">
          <div className={styles.box}>
            <div>
            <label for="text">Full Name</label><br />
              <input type="text" />
            </div>
            <div>
            <label for="email">Email</label><br />
              <input type="email" />
            </div>
            <div>
            <label for="textarea">Your Message</label><br />
              <textarea placeholder="type your message here..."></textarea>
            </div>
          </div>

          <div className={styles.formBtn}>
            <input type="submit" value="SUBMIT"/>
          </div>
          </form>
          
          <div className={styles.LoginJoumano}>
            <Login />
          </div>
          
      </div>
    </>
  );
}
