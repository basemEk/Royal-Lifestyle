import React from 'react'
import './Style.css'
import premiumHouse from '../../assets/landscape-houses.png'
import royal from '../../assets/crown.png'
import hands from '../../assets/clap.png'
import pleyers from '../../assets/golf-players.png'

export default function Premium() {
    return (
        <body className='PremiumBody'>
            <section className='leftSection'>
                <img src={royal} alt='royal' className='royal'/>
                <h1>A Truly Premium<br />Golf Experience</h1>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium aenean pharetra magna ac. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Consectetur a erat nam at lectus urna. Turpis massa sed elementum tempus egestas sed. Donec pretium vulputate sapien nec sagittis aliquam. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Tellus id interdum velit laoreet id donec ultrices tincidunt. Donec pretium vulputate sapien nec.
                </p>
            </section>

        </body>
    )
}
