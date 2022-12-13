import React from 'react'
// import './Style.css'
import premiumHouse from '../../assets/landscape-houses.png'
import royal from '../../assets/crown.png'
import hands from '../../assets/clap.png'
import players from '../../assets/golf-players.png'


export default function Premium() {
    return (
            <div className='golf-houses-wrapper'>
                <section className='crown-h1-p-players box'>
                    <div className='crown-h1-p'>
                        <img src={royal} alt="crown-icon" className="crown" />
                        <h1>A Truly Premium<br />Golf Experience</h1>
                        <p className="par-1">
                            using Lorem Ipsum is that it has a more-or-less
                            using Lorem Ipsum is that it has a more-or-less
                        </p>
                    </div>
                    <div className='players'>
                        <img src={players} alt="players" className="img-players-houses"/>
                    </div>
                </section>

                <section className='hands-p-houses box'>
                    <div className='houses'>
                        <img src={premiumHouse} alt="houses" className="img-players-houses homes"/>
                    </div>
                    <div className='clap-p'>
                        <img src={hands} alt="hands-icon" className="clap" />
                        <p className="par-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium aenean pharetra magna ac. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.nec eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='beits'>
                        <img src={premiumHouse} alt="houses" className="img-players-houses homes golfers"/>
                    </div>
                </section>
            </div>








        // <div className='PremiumBody'>
        //     <section className='leftSection'>
        //         <div className="crownImg-img-h1">
        //             <img src={royal} alt='royal' className='royal'/>
        //             <h1>A Truly Premium<br />Golf Experience</h1>
        //             <p> using Lorem Ipsum is that it has a more-or-less
        //                 using Lorem Ipsum is that it has a more-or-less
        //             </p>
        //         </div>
        //         <div className='premiumHouse' >
        //             <img src={premiumHouse} alt='premiumHouse' />
        //         </div>
        //     </section>

        //     <section className='rightSection'>
        //         <div className='pleyers'>
        //             <img src={pleyers} alt='pleyers' />
        //         </div>
        //         <div className='clap-icon-p'>
        //             <img src={hands} alt='hands' className='hands' />
        //             <p>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium aenean pharetra magna ac. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Consectetur a erat nam at lectus urna. Turpis massa sed elementum tempus egestas sed. Donec pretium vulputate sapien nec sagittis aliquam. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Tellus id interdum velit laoreet id donec ultrices tincidunt. Donec pretium vulputate sapien nec.
        //             </p>
        //         </div>  
        //     </section>

        // </div>
    )
}
