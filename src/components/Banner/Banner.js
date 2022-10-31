import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Style.css';


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

      dotsClass: "slick-dots slick-thumb",
        //---------------------------------Indicators
        appendDots: dots => (
            <div
                style={{ marginBottom: '70px' }}
            >
                <ul style={{}}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "20px",
                    marginTop: '30px',
                    height: "20px",
                    background: '#7d6e3e',
                    color: "#7d6e3e",
                    borderRadius: "100px"
                }}
            >
            </div>
        )

    };

    return (
        <div className='bannerBody'>

            <div className="bannerSlider">
                <Slider className="sliderTag" {...settings}>
                   <div
                        className=" backgroundImageSlider"
                    >
                        <section className='backgroundImageSliderContent'>
                            <h1>Get a Unique Golf Experience</h1>
                            <button>BOOK TEE TIME</button>
                        </section>
                    </div>

                    <div
                        className=" backgroundImageSlider"
                    >
                        <section className='backgroundImageSliderContent'>
                            <h1>Get a Unique Golf Experience</h1>
                            <button>BOOK TEE TIME</button>
                        </section>
                    </div>

                    <div
                        className=" backgroundImageSlider"
                    >
                        <section className='backgroundImageSliderContent'>
                            <h1>Get a Unique Golf Experience</h1>
                            <button>BOOK TEE TIME</button>
                        </section>
                    </div>

                </Slider>
            </div>
        </div>
    )
}
