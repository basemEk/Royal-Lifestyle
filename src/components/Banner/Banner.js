import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Login from "../../pages/Login/Login";


export default function Banner() {
  //---------------------------------Slider
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "dotsStyleBanner",
    //---------------------------------Indicators
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div></div>,
  };


  return (
    <div className="bannerContainer">
      <div className="bannerBody">
        <div className="bannerSlider">
          <Slider className="sliderTag" {...settings}>
            <div className="backgroundImageSlider">
              <section className="backgroundImageSliderContent">
                <h1>Get a Unique Golf Experience</h1>
                <button>BOOK TEE TIME</button>
              </section>
            </div>

            <div className=" backgroundImageSlider">
              <section className="backgroundImageSliderContent">
                <h1>Get a Unique Golf Experience</h1>
                <button>BOOK TEE TIME</button>
              </section>
            </div>

            <div className=" backgroundImageSlider">
              <section className="backgroundImageSliderContent">
                <h1>Get a Unique Golf Experience</h1>
                <button>BOOK TEE TIME</button>
              </section>
            </div>
          </Slider>
        </div>
      </div>
        <Login />
    </div>
  );
}
