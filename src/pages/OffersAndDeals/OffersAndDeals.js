import React from "react";
import styles from "./OffersAndDeals.module.css";
import Group25 from "../../images/Group 4125.png";
import arrowGreenPackages from "../../assets/arrow-green-packages.png";
import gridImgPackages from "../../assets/grid-img-packages.png";
import OffersAndDealsBnr from "../../assets/offers&dealsbanner.png";
import { Link } from 'react-router-dom';
import Login from "../Login/Login";

export default function Offers_Deals() {
  return (
    <div className={styles.dealsWrapper}>
      <div className={styles.dealsBanner}>
        <img
          src={OffersAndDealsBnr}
          className={styles.offersTopImg}
          alt="offers banner"
          // style={{width: '1720px'}}
        />
        <div className={styles.lightGreenBannerDeals}>
          <h1>Offers & Deals</h1>
          <p>Flash Offers, Gift Vouchers, Golf Getaways and more!</p>
        </div>
      </div>

      <div className={styles.exclusive}>
        <div>
          <img src={Group25} alt="banner" />
        </div>
        <h1>Exclusive Offers &Deals</h1>
        <p>
          “Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer posuere erat a ante blandit sapien viverra
          nunc.”
        </p>
      </div>

      <div className={styles.golfPackageNames}>
      <Link to="/package-details" style={{textDecoration: 'none'}}>
        <div className={styles.pack-1}>
        <div className={styles.overlayPrice}>
            <img src={gridImgPackages} className={styles.packImg} alt="pack-1" />
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
        </Link>

        <div className={styles.pack-1}>
        <div className={styles.overlayPrice}>
        <img src={gridImgPackages} className={styles.packImg} alt="pack-1" />
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

        <div className={styles.pack-1}>
        <div className={styles.overlayPrice}>
        <img src={gridImgPackages} className={styles.packImg} alt="pack-1" />
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

        <div className={styles.pack-1}>
        <div className={styles.overlayPrice}>
        <img src={gridImgPackages} className={styles.packImg} alt="pack-1" />
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

        <div className={styles.pack-1}>
        <div className={styles.overlayPrice}>
        <img src={gridImgPackages} className={styles.packImg} alt="pack-1" />
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

        <div className={styles.pack-1}>
        <div className={styles.overlayPrice}>
        <img src={gridImgPackages} className={styles.packImg} alt="pack-1" />
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
      
      <div className={styles.offersAndDealsLogin}>
        <Login />
      </div>
      
    </div>
  );
}
