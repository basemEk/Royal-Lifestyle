import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import './Style.css';
import arrow from '../../images/arrow.png'
// import Group19 from '../../assets/Group 4119.png'
// import Group20 from '../../images/Group 4120.png'
import Group26 from '../../images/Group 4126.png'
import Dera from '../../assets/uae-dera.png'
import Trump from '../../assets/trump-miami.png'
import Mariot from '../../assets/mariot-hotel.png'


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
        beforeChange: 'beforeChange',
        dotsClass: 'dotsFStyle',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
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
        //---------------------------------Indicators
        appendDots: dots => (
            <div>
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: i => (<div></div>)

    };

    // const next = () => {
    //     Slider.slickNext();
    // }
    // const prev = () => {
    //     Slider.slickPrev();
    // }


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
                    
                    making it look like readable English. Many desktop publishing packages and web page editors now u
                </p>
            </div>

            {/**Slider */}
            <div className='divFeature'>
                {/* <button onClick={prev} className='btnControllPrev'>
                    <img src={Group20} className='controllArrows' alt='controllArrow' />
                </button> */}

                <Slider className='SliderFeature'
                    ref={c => (Slider = c)}
                    {...settingsService}>
                    <div className='singleSlidecontainer'>
                        <div className='singleSlide'  >
                            <div className='singleSlideIMage'>
                                <img src={Trump} placeholder='Image' alt='singleSlideIMage' />
                                <div className='singleSlideIMagePrice'>
                                    <p>45$</p>
                                    <p className="starting">Starting</p>
                                </div>
                            </div>
                            <p>Trump National Miami</p>
                            <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                            <div className='singleSlidearrow'>
                                <img src={arrow} alt='arrow' className='features-arrow' />
                            </div>
                        </div>
                    </div>

                    <div className='singleSlidecontainer'>
                        <div className='singleSlide'  >
                            <div className='singleSlideIMage'>
                                <img src={Mariot} placeholder='Image' alt='singleSlideIMage' />
                                <div className='singleSlideIMagePrice'>
                                    <p>45$</p>
                                    <p className="starting">Starting</p>
                                </div>
                            </div>
                            <p>Trump National Miami</p>
                            <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                            <div className='singleSlidearrow'>
                                <img src={arrow} alt='arrow' className='features-arrow' />
                            </div>
                        </div>
                    </div>

                    <div className='singleSlidecontainer'>
                        <div className='singleSlide'  >
                            <div className='singleSlideIMage'>
                                <img src={Dera} placeholder='Image' alt='singleSlideIMage' />
                                <div className='singleSlideIMagePrice'>
                                    <p>45$</p>
                                    <p className="starting">Starting</p>
                                </div>
                            </div>
                            <p>Trump National Miami</p>
                            <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                            <div className='singleSlidearrow'>
                                <img src={arrow} alt='arrow' className='features-arrow' />
                            </div>
                        </div>
                    </div>

                    <div className='singleSlidecontainer'>
                        <div className='singleSlide'  >
                            <div className='singleSlideIMage'>
                                <img src={Mariot} placeholder='Image' alt='singleSlideIMage' />
                                <div className='singleSlideIMagePrice'>
                                    <p>45$</p>
                                    <p className="starting">Starting</p> 
                                </div>
                            </div>
                            <p>Trump National Miami</p>
                            <h3>4.0-star <strong>HOTEL CLASS</strong></h3>
                            <div className='singleSlidearrow'>
                                <img src={arrow} alt='arrow' className='features-arrow' />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div>
                    {/* <button className='btnControllNext' onClick={next}>
                        <img src={Group19} className='controllArrows' alt='controllArrow' />
                    </button> */}
                </div>
            </div>
        </div>

    )
}
