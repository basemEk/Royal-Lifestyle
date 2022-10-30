import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import womenImage from '../../images/womenImage.jpg'
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
                    marginTop: '10px',
                    height: "20px",
                    background: '#7d6e3e',
                    color: "#7d6e3e",
                    borderRadius: "100px"
                }}
            >
            </div>
        )

    }
    return (
        <body className='body'>
            <Slider className="WelcomeSlider" {...settings}>
                <div className='WelcomeSliderDiv'>
                    <div>
                        {/**Image */}
                        <img src={womenImage} className='womenImage' alt='avatar' />
                        {/**Title */}
                        <section className='sectionHead'>
                            <h1>WE HAVE TITLE HERE </h1>
                        </section>
                        <section >
                            {/**Text*/}
                            <article className='sectionParagraph'>
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                            </article>
                            <article className='sectionParagraph'>
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                            </article>
                            <article className='sectionParagraph'>
                                now use Lorem Ipsum as their default
                            </article>

                        </section>
                    </div>
                </div>
                <div className='WelcomeSliderDiv'>
                    <div>
                        {/**Image*/}
                        <img src={womenImage} className='womenImage' alt='avatar' />
                        {/**Title */}
                        <section className='sectionHead'>
                            <h1> TITLE HERE </h1>
                        </section>
                        {/**Text */}
                        <section >
                            <article className='sectionParagraph'>
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                            </article>
                            <article className='sectionParagraph'>
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                            </article>
                            <article className='sectionParagraph'>
                                now use Lorem Ipsum as their default
                            </article>

                        </section>
                    </div>
                </div>

            </Slider>

        </body>
    )
}