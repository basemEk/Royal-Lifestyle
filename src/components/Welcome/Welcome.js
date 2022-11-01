import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import womenImage from '../../assets/person-1.png'
import './Style.css'

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
        dotsClass: 'dotsStyle',
        //---------------------------------Indicators
        appendDots: dots => (
            <div>
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: i => (<div></div>)

    }
    return (
        <body className='body'>
            <Slider className="WelcomeSlider" {...settings}>
                <div className='WelcomeSliderDiv'>
                    <div>
                        <img src={womenImage} className='personImage' alt='avatar' />
                        <section className='sectionHead'>
                            <h1>WELCOME TO ROYAL LIFESTYLE</h1>
                        </section>
                        <section >
                            <article className='sectionParagraph'>
                                <p>using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                            </article>
                            <article className='sectionParagraph'>
                                <h4>JACK CHARLES</h4>
                            </article>
                        </section>
                    </div>
                </div>
                <div className='WelcomeSliderDiv'>
                    <div className="welcome-container">
                        <img src={womenImage} className='womenImage' alt='avatar' />
                        <section className='sectionHead'>
                            <h1>WELCOME TO ROYAL LIFESTYLE</h1>
                        </section>
                        <section>
                            <article className='sectionParagraph'>
                                <p>using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                            </article>
                            <article className='sectionParagraph'>
                                <h4>JACK CHARLES</h4>
                            </article>
                        </section>
                    </div>
                </div>

            </Slider>

        </body>
    )
}
