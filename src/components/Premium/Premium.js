import React from 'react'
import './Style.css'
import premiumHouse from '../../images/premiumHouse.jpg'
import royal from '../../images/royal.jpg'
import hands from '../../images/hands.jpg'
import pleyers from '../../images/pleyers.jpg'
export default function Premium() {
    return (
        <body className='PremiumBody'>
            <section className='leftSection'>
                <img src={royal} alt='royal' className='royal' />
                <h1> using Lorem Ipsum ispsum  </h1>
                <p> using Lorem Ipsum is that it has a more-or-less
                    using Lorem Ipsum is that it has a more-or-less
                </p>
                <div className='premiumHouse' >
                    <img src={premiumHouse} alt='premiumHouse' />
                </div>
            </section>
            <section className='rightSection'>
                <div className='pleyers'>
                    <img src={pleyers} alt='pleyers' />
                </div>
                <img src={hands} alt='hands' className='hands' />
                <p>
                    using Lorem Ipsum is that it has a more-or-less
                    using Lorem Ipsum is that it has a more-or-less
                    using Lorem Ipsum is that it has a more-or-less
                    using Lorem Ipsum is that it has a more-or-less
                    using Lorem Ipsum is that it has a more-or-less
                </p>
            </section>

        </body>
    )
}
