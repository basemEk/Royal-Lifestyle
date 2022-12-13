import React from "react";
import styles from "./PackagesDetails.module.css";
import arrowGreenPackages from "../../assets/arrow-green-packages.png";
import gridImgPackages from "../../assets/grid-img-packages.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

export default function PackageDetails() {
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
                <div className={styles.threeRadios}>
                  <div className={styles.radio}>
                    <div>
                      <input type="radio" name="choice" />
                    </div>
                    <div className={styles.dateDiscountContainer}>
                      <p>
                        2 Green Fees & Buggy for two:{" "}
                        {new Date().toLocaleString().split(",")[0]} -{" "}
                        {new Date().toLocaleString().split(",")[0]}
                      </p>
                      <div className={styles.discountPrices}>
                        <div style={{ fontWeight: "bolder" }}>$93</div>
                        <div className={styles.middleLine}>$103</div>
                        <div className={styles.discountCircle}>-10%</div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.radio}>
                    <div>
                      <input type="radio" name="choice" />
                    </div>
                    <div className={styles.dateDiscountContainer}>
                      <p>
                        2 Green Fees & Buggy for two:{" "}
                        {new Date().toLocaleString().split(",")[0]} -{" "}
                        {new Date().toLocaleString().split(",")[0]}
                      </p>
                      <div className={styles.discountPrices}>
                        <div style={{ fontWeight: "bolder" }}>$93</div>
                        <div className={styles.middleLine}>$103</div>
                        <div className={styles.discountCircle}>-10%</div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.radio}>
                    <div>
                      <input type="radio" name="choice" />
                    </div>
                    <div className={styles.dateDiscountContainer}>
                      <p>
                        2 Green Fees & Buggy for two:{" "}
                        {new Date().toLocaleString().split(",")[0]} -{" "}
                        {new Date().toLocaleString().split(",")[0]}
                      </p>
                      <div className={styles.discountPrices}>
                        <div style={{ fontWeight: "bolder" }}>$93</div>
                        <div className={styles.middleLine}>$103</div>
                        <div className={styles.discountCircle}>-10%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.included}>
                  <h5>INCLUDED</h5>
                  <ul>
                    <li>2 Green Fees 9 Holes at Pula Golf .</li>
                    <li>Buggy</li>
                  </ul>
                  <p>
                    <b>Terms and Conditions:</b>
                  </p>
                  <p>
                    Subject to availability. Booking required in advance by
                    phone or email
                    <br /> after the purchase of this voucher. <br />
                    Contact details will be provided in the confirmation email.
                    This voucher has to be presented upon arrival at the golf
                    course.
                  </p>

                  <div className={styles.PackagesIcons}>
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
            <div className={styles.viewInMap}>
              <h5>VIEW IN MAP</h5>
            </div>
          </div>
        </div>

        <div className={styles.similarOffers}>
          <h4>Similar Offers</h4>
        </div>

        <div className={styles.golfPackageNames}>
          <div className={styles.pack - 1}>
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
              <p className={styles.enjoy}>2 Green Fees 18 Holes & Buggy</p>
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

          <div className={styles.pack - 1}>
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
              <p className={styles.enjoy}>2 Green Fees 18 Holes & Buggy</p>
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

          <div className={styles.pack - 1}>
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
              <p className={styles.enjoy}>2 Green Fees 18 Holes & Buggy</p>
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
      </div>

      <div className={styles.packageDetailsLogin}>
          <Login />
      </div>
    </>
  );
}
