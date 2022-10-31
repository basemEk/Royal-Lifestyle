import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Style.css'
import arrow from '../../images/arrow.png'
import golfexperience1 from '../../images/Group 4116.png'
import Group19 from '../../images/Group 4119.png'
import Group20 from '../../images/Group 4120.png'
import Group26 from '../../images/Group 4126.png'


export default function Feature() {
    var settingsService = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        //---------------------------------Indicators
        appendDots: dots => (
            <div
                style={{ marginTop: '25px' }}
            >
                <ul style={{ marginTop: '25px' }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "20px",
                    marginTop: '40px',
                    height: "20px",
                    background: '#7d6e3e',
                    color: "#7d6e3e",
                    borderRadius: "100px"
                }}
            >

            </div>
        )

    };
    const next = () => {
        Slider.slickNext();
    }
    const prev = () => {
        Slider.slickPrev();
    }
    return (

        <div className='FeatureContainer'>
            {/**Title */}
            <div className='FeatureHeading'>
                <div>
                    <img alt='FeatureHeading' src={Group26} />
                </div>
                <h1>Feature Packages</h1>
                <p>
                    making it look like readable English. Many desktop publishing packages and web page editors now u
                    <br />
                    making it look like readable English. Many desktop publishing packages and web page editors now u
                </p>
            </div>

            {/**Slider */}
            <div className='divFeature'>
                <div>
                    <button className='btnControllPrev' onClick={prev}>
                        <img src={Group20} className='controllArrows' alt='controllArrow' />
                    </button>
                </div>
                <Slider className='SliderFeature'
                    ref={c => (Slider = c)}
                    {...settingsService}>
                    <div className='singleSlidecontainer'>
                        <div className='singleSlide'  >
                            <div className='singleSlideIMage'>
                                <img placeholder='Image' alt='singleSlideIMage' />
                                <div className='singleSlideIMagePrice'>
                                    <p>45$</p>
                                    <p>Starting</p>
                                </div>
                            </div>
                            <p>Trump National Miami</p>
                            <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                            <div className='singleSlidearrow'>
                                <img src={arrow} alt='arrow' className='arrow' />

                            </div>
                        </div>
                    </div>
                    <div className='singleSlidecontainer'>
                        <div className='singleSlide'  >
                            <div className='singleSlideIMage'>
                                <img placeholder='Image' alt='singleSlideIMage' />
                                <div className='singleSlideIMagePrice'>
                                    <p>45$</p>
                                    <p>Starting</p>
                                </div>
                            </div>
                            <p>Trump National Miami</p>
                            <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                            <div className='singleSlidearrow'>
                                <img src={arrow} alt='arrow' className='arrow' />
                            </div>
                        </div>
                    </div>
                    <div className='singleSlidecontainer'>
                        <div className='singleSlide'  >
                            <div className='singleSlideIMage'>
                                <img placeholder='Image' alt='singleSlideIMage' />
                                <div className='singleSlideIMagePrice'>
                                    <p>45$</p>
                                    <p>Starting</p>
                                </div>
                            </div>
                            <p>Trump National Miami</p>
                            <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                            <div className='singleSlidearrow'>
                                <img src={arrow} alt='arrow' className='arrow' />
                            </div>
                        </div>
                    </div>
                    <div className='singleSlidecontainer'>
                        <div className='singleSlide'  >
                            <div className='singleSlideIMage'>
                                <img placeholder='Image' alt='singleSlideIMage' />
                                <div className='singleSlideIMagePrice'>
                                    <p>45$</p>
                                    <p>Starting</p>
                                </div>

                            </div>
                            <p>Trump National Miami</p>
                            <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                            <div className='singleSlidearrow'>
                                <img src={arrow} alt='arrow' className='arrow' />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div>
                    <button className='btnControllNext' onClick={next}>
                        <img src={Group19} className='controllArrows' alt='controllArrow' />
                    </button>
                </div>


            </div>
        </div>

    )
}
