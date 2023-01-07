import React from "react";
import styles from "./SubmitQuote.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowGreenPackages from "../../assets/arrow-green-packages.png";
import gridImgPackages from "../../assets/grid-img-packages.png";
import airplane from "../../assets/package-details-icons/aireplane.png";
import dumbles from "../../assets/package-details-icons/dumbles.png";
import fastFood from "../../assets/package-details-icons/fast-food.png";
import free from "../../assets/package-details-icons/free.png";
import golfFlag from "../../assets/package-details-icons/golf-flag.png";
import golfBall from "../../assets/package-details-icons/golfball.png";
import laptop from "../../assets/package-details-icons/laptop.png";
import restaurant from "../../assets/package-details-icons/restaurant.png";
import shoe from "../../assets/package-details-icons/shoe.png";
import swimingPool from "../../assets/package-details-icons/swimingpool.png";
import tShirt from "../../assets/package-details-icons/t-shirt.png";
import wifi from "../../assets/package-details-icons/wifi.png";
import Login from "../Login/Login";
import golfBallBook from '../../assets/golf-ball-with-dents.png'
import bookingArrow from '../../assets/arrow-green-packages.png'
import BookTeaTime from '../../components/BookTeaTime/BookTeaTime'


export default function SubmitQuote() {
  const settingsNoModules = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "button__bar",
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 801,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.detailsWrapper}>

      <BookTeaTime
          imgBooking = {golfBallBook}
          book = "BOOK TEA-TIME"
          bookArr = {bookingArrow}
         />

        <div className={styles.golfOffer}>
          <div className={styles.similarOffers}>
            <h4 className={styles.similarh4}>GOLF OFFER NAME</h4>
          </div>
          <div className={styles.packageSlider}>
            <div className={styles.packageSliderContainer}>
              <Slider
                className={styles.sliderWrapper}
                ref={(c) => (Slider = c)}
                {...settingsNoModules}
              >
                <div className={styles.pack}>
                  <img
                    src={gridImgPackages}
                    className={styles.packImgSlide}
                    alt="pack-1"
                  />
                  <div>
                    <img
                      src={arrowGreenPackages}
                      className={styles.arrow}
                      alt="arrow"
                    />
                  </div>
                </div>

                <div className={styles.pack}>
                  <img
                    src={gridImgPackages}
                    className={styles.packImgSlide}
                    alt="pack-1"
                  />
                  <div>
                    <img
                      src={arrowGreenPackages}
                      className={styles.arrow}
                      alt="arrow"
                    />
                  </div>
                </div>

                <div className={styles.pack}>
                  <img
                    src={gridImgPackages}
                    className={styles.packImgSlide}
                    alt="pack-1"
                  />
                  <div>
                    <img
                      src={arrowGreenPackages}
                      className={styles.arrow}
                      alt="arrow"
                    />
                  </div>
                </div>
              </Slider>
              <div className={styles.threeDotsIncludedWrapper}>
                <div className={styles.included}>
                  <h5>
                    Starting: $239 <br /> 2 Nights, 2 Rounds
                  </h5>{" "}
                  <br />
                  <p>
                    Enjoy one of the top destination cities in the United
                    States. Nashville offers you great food, entertainment and
                    great golf. Enjoy the beauty of the Hermitage President or
                    the toughness of Gaylord Springs during the day and take in
                    the sights and sounds of Downtown Nashville at night.
                    <br />
                    <br />
                    It doesn’t get much better than that Stay within minutes of
                    the airport at the Holiday Inn Express and choose to play 2
                    rounds of golf at your choice of 10 great local courses.
                    <br />
                    <br />
                    The Holiday Inn Express - Airport is just 15 minutes from
                    downtown as well. Airport Shuttle Information: <br />
                    <br />
                    Complimentary Shuttle to and from the airport 24/7
                  </p>
                  <div className={styles.packagesIcons}>
                    <div>
                      <img src={airplane} alt="airplane" />
                    </div>
                    <div>
                      <img src={dumbles} alt="dumbles" />
                    </div>
                    <div>
                      <img src={fastFood} alt="fast food" />
                    </div>
                    <div>
                      <img src={free} alt="free access" />
                    </div>
                    <div>
                      <img src={golfFlag} alt="golf flag" />
                    </div>
                    <div>
                      <img src={golfBall} alt="golf ball" />
                    </div>
                    <div>
                      <img src={laptop} alt="laptop" />
                    </div>
                    <div>
                      <img src={restaurant} alt="restaurant" />
                    </div>
                    <div>
                      <img src={shoe} alt="shoe" />
                    </div>
                    <div>
                      <img src={swimingPool} alt="swiming pool" />
                    </div>
                    <div>
                      <img src={tShirt} alt="t shirt" />
                    </div>
                    <div>
                      <img src={wifi} alt="wifi" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formHead}>
        <h1>SUBMIT A QUOTE</h1>
      </div>

      <form action="">
        <div className={styles.boxQuote}>
          <div>
            <label for="text">Full Name</label>
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
            <label for="number"># of Golfers</label>
            <br />
            <input type="number" />
          </div>
          <div>
            <label for="date">Arrival Date</label>
            <br />
            <input type="date" required/>
          </div>
          <div>
            <label for="date">Departure Date</label>
            <br />
            <input type="date" required />
          </div>
          <div>
            <label for="textarea">Special Notes</label>
            <br />
            <textarea placeholder="type your message here..."></textarea>
          </div>
        </div>

        <br />
        <div className={styles.formBtn}>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>

      <div className={styles.similarOffers}>
        <h4>Similar Offers</h4>
      </div>

      <div className={styles.golfPackageNames}>
        <div className={styles.pack-1}>
          <div className={styles.overlayPrice}>
            <img
              src={gridImgPackages}
              className={styles.packImg}
              alt="pack-1"
            />
            <div className={styles.textBlock}>
              <p>From $150</p>
            </div>
          </div>
          <div className={styles.contentsNoImg}>
            <h4>GOLF PACKAGE NAME</h4>
            <p className={styles.enjoy}>
              Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and
              1 round of golf at Sonoma Golf Club.
            </p>
            <p className={styles.explore}>Explore</p>
            <div>
              <img
                src={arrowGreenPackages}
                className={styles.arrow}
                alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className={styles.pack-1}>
          <div className={styles.overlayPrice}>
            <img
              src={gridImgPackages}
              className={styles.packImg}
              alt="pack-1"
            />
            <div className={styles.textBlock}>
              <p>From $150</p>
            </div>
          </div>
          <div className={styles.contentsNoImg}>
            <h4>GOLF PACKAGE NAME</h4>
            <p className={styles.enjoy}>
              Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and
              1 round of golf at Sonoma Golf Club.
            </p>
            <p className={styles.explore}>Explore</p>
            <div>
              <img
                src={arrowGreenPackages}
                className={styles.arrow}
                alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className={styles.pack-1}>
          <div className={styles.overlayPrice}>
            <img
              src={gridImgPackages}
              className={styles.packImg}
              alt="pack-1"
            />
            <div className={styles.textBlock}>
              <p>From $150</p>
            </div>
          </div>
          <div className={styles.contentsNoImg}>
            <h4>GOLF PACKAGE NAME</h4>
            <p className={styles.enjoy}>
              Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and
              1 round of golf at Sonoma Golf Club.
            </p>
            <p className={styles.explore}>Explore</p>
            <div>
              <img
                src={arrowGreenPackages}
                className={styles.arrow}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.submitQuoteLogin}>
        <Login />
      </div>
    </>
  );
}
