import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BannerProp() {
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
    <Slider className="sliderTag" {...settings}>
                {/* <div className="backgroundImageSlider">
                <section className="backgroundImageSliderContent">
                    <h1>{bannerHead}</h1>
                    <button>{cta}</button>
                </section>
                </div> */}
    </Slider>
  )
}
