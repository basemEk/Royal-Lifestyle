import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './Style.css'
import Group25 from '../../images/Group 4125.png'
// import Group19 from '../../images/Group 4119.png'
// import Group20 from '../../images/Group 4120.png'
import Group18 from '../../images/Group 4118.png'
import Group16 from '../../images/Group 4116.png'
import Group89 from '../../images/Group 4089.png'


export default function Courses() {
    //---------------------------------Slider
    // const next = () => {
    //     Slider.slickNext();
    // }
    // const prev = () => {
    //     Slider.slickPrev();
    // }

    
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    var settingsSlidertwo = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'dotsStyleCourses',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
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
    }

    return (
        <div className='courseContainer'>
            {/**Header */}
            <div className='courseHeading'>
                <div>
                    <img alt='courseHeading' src={Group25} />
                </div>
                <h1>Our Top Pick courses</h1>
                <p>
                    making it look like readable English. Many desktop publishing packages and web page editors now u
                    <br />
                    making it look like readable English. Many desktop publishing packages and web page editors now u
                </p>
            </div>
            {/**Slider One */}
            <div className='sliderOneContainer'>
                <div>
                    {/* <button className='btnControllPrev' onClick={prev}>
                        <img src={Group20} className='controllArrows' alt='controllArrow' />
                    </button> */}
                </div>
                <Slider className="sliderOne" {...settings}
                    ref={c => (Slider = c)}>
                
                    <div className='sliderOne'>
                        <div className='sliderOneContent'>
                            {/**Title */}
                            <section className='we-have'>
                                <h2>WE HAVE TITLE HERE </h2>
                            </section>
                            {/**Text */}
                            <section className='courses-paragraph'>
                                <p>
                                    making it look like readable English. Many desktop publishing packages and web page editors now u
                                    <br />
                                    making it look like readable English. Many desktop publishing packages and web page editors now u
                                </p>
                            </section>
                            {/**Button */}
                            <section className='sliderOneBodyBtn'>
                                <button>BOOK NOW</button>
                            </section>
                        </div>
                    </div>

                    <div className='sliderOne'>
                        <div className='sliderOneContent'>
                            {/**Title */}
                            <section className='we-have'>
                                <h2>WE HAVE TITLE HERE </h2>
                            </section>
                            {/**Text */}
                            <section className='courses-paragraph'>
                                <p>
                                    making it look like readable English. Many desktop publishing packages and web page editors now u
                                    <br />
                                    making it look like readable English. Many desktop publishing packages and web page editors now u
                                </p>
                            </section>
                            {/**Button */}
                            <section className='sliderOneBodyBtn'>
                                <button>BOOK NOW</button>
                            </section>
                        </div>
                    </div>
                    <div className='sliderOne'>
                        <div className='sliderOneContent'>
                            {/**Title */}
                            <section className='we-have'>
                                <h2>WE HAVE TITLE HERE </h2>
                            </section>
                            {/**Text */}
                            <section className='courses-paragraph'>
                                <p>
                                    making it look like readable English. Many desktop publishing packages and web page editors now u
                                    <br />
                                    making it look like readable English. Many desktop publishing packages and web page editors now u
                                </p>
                            </section>
                            {/**Button */}
                            <section className='sliderOneBodyBtn'>
                                <button>BOOK NOW</button>
                            </section>
                        </div>
                    </div>
                </Slider>
                <div>
                    {/* <button className='btnControllNext' onClick={next}>
                        <img src={Group19} className='controllArrows' alt='controllArrow' />
                    </button> */}
                </div>
            </div>

            {/**Slider Two */}

            <Slider className='sliderTwo' ref={c => (Slider = c)} {...settingsSlidertwo}>
                
                <div className='singleSlideTwo'>
                    <img src={Group18} alt='Two' className='Two' />
                </div>

                <div className='singleSlideTwo'>
                    <img src={Group16} alt='Two' className='Two' />
                </div>

                <div className='singleSlideTwo'>
                    <img src={Group18} alt='Two' className='Two' />
                </div>

                <div className='singleSlideTwo'>
                    <img src={Group18} alt='Two' className='Two' />
                </div>

                <div className='singleSlideTwo'>
                    <img src={Group16} alt='Two' className='Two' />
                </div>
            </Slider>

            <section className='footerBannerImage'>
                <img src={Group89} alt='Group89' />
            </section>
        </div>
    )
}
