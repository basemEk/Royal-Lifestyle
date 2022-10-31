import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import trophy from '../../images/trophy.jpg'
import dpworld from '../../images/dpworld.jpg'
import trophyLogo from '../../images/trophyLogo.jpg'
import './Style.css'


export default function Upcoming() {

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
        //---------------------------------Indicators
        appendDots: dots => (
            <div
                style={{}}
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
        <div className='UpcomingBody'>
            <section className='imageTextSection'>
                <img src={trophy} alt='trophy' className='trophyImage' />
            </section>
            <section className='imageTextSection'>
                <h1 className='trophyTitle'>Upcoming Tournaments</h1>
            </section>
            <section className='imageTextSection'>
                <p>
                    using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                </p>
            </section>
            <div className="upcomingSlider">
                <Slider className="sliderTag" {...settings}>
                    <div
                        className=" backgroundImageSlider"
                    >
                        <section className='upcomingImage'>
                            <img src={dpworld} alt='upcomingImage' />
                        </section>

                        <section className='upcomingTitle'>
                            <h1>Dp World Tour Championship</h1>
                        </section>

                        <section>
                            <p className='upcomingText'>
                                Many desktop publishing packages and web
                                <br /> <br />
                                <strong>17 - 20 NOV, 2022</strong>
                            </p>
                        </section>

                        <section className='trophyLogo'>
                            <img src={trophyLogo} alt='trophyLogo' />
                        </section>

                        <section className='tropthBodyButton'>
                            <button>BOOK NOW</button>
                        </section>
                    </div>

                    <div
                        className=" backgroundImageSlider"
                    >
                        <section className='upcomingImage'>
                            <img src={dpworld} alt='upcomingImage' />
                        </section>

                        <section className='upcomingTitle'>
                            <h1>Dp World Tour Championship</h1>
                        </section>

                        <section>
                            <p className='upcomingText'>
                                Many desktop publishing packages and web
                                <br /> <br />
                                <strong>17 - 20 NOV, 2022</strong>
                            </p>
                        </section>

                        <section className='trophyLogo'>
                            <img src={trophyLogo} alt='trophyLogo' />
                        </section>

                        <section className='tropthBodyButton'>
                            <button>BOOK NOW</button>
                        </section>
                    </div>

                    <div
                        className=" backgroundImageSlider"
                    >
                        <section className='upcomingImage'>
                            <img src={dpworld} alt='upcomingImage' />
                        </section>

                        <section className='upcomingTitle'>
                            <h1>Dp World Tour Championship</h1>
                        </section>

                        <section>
                            <p className='upcomingText'>
                                Many desktop publishing packages and web
                                <br />
                                <br />
                                <strong>17 - 20 NOV, 2022</strong>
                            </p>
                        </section>

                        <section className='trophyLogo'>
                            <img src={trophyLogo} alt='trophyLogo' />
                        </section>

                        <section className='tropthBodyButton'>
                            <button>BOOK NOW</button>
                        </section>
                    </div>

                </Slider>
            </div>
        </div>
    )
}
