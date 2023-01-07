import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import manImage from "../../assets/person-1.png";
import womanImage from "../../assets/contessa.png";
import WelcomeSlide from "./WelcomeSlide";


export default function Welcome() {
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
    dotsClass: "dotsStyleWelcome",
    pauseOnDotsHover: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    //---------------------------------Indicators
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div></div>,
  };

  
  return (
    <body className="body">
      <Slider className="WelcomeSlider" {...settings}>

        <WelcomeSlide
          image={manImage}
          header="WELCOME TO ROYAL LIFESTYLE"
          body="using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default"
          footer="JACK CHARLES"
        />

        <WelcomeSlide
          image={womanImage}
          header="WELCOME TO ROYAL LIFESTYLE"
          body="using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default"
          footer="ROMAN COUNTESS DONATELLA PECCI-BLUNT      "
        />

      </Slider>
    </body>
  );
}
