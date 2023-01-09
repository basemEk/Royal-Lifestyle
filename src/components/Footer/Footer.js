import React from 'react'
import './Style.css'
import facebook from '../../images/facebook-app-symbol.png'
import instagram from '../../images/instagram.png'
import youtube from '../../images/youtube.png'
import twitter from '../../images/twitter.png'


export default function Footer() {
    return (
        <div className='footerWrapper'>           
            {/**Subsicrebtion */}
            <section>
                <form className='footerSubsicrebtion'>
                    <h1>WOULD YOU LIKE TO RECEIVE EXCLUSIVE OFFERS?</h1>
                    <p>Subscribe now to our newsletter to receive the best offers and discounts only available to subscribers. With Golfers you can access to the best golf clubs at prices that you won’t find anywhere else.</p>
                       <div className='emailSubmit'>
                            <input type='email' placeholder='Enter your email' className='subscribeEmail' />
                            <input type='submit' value='Subscribe' className='subscribeBtn' />
                       </div> 
                </form>
            </section>
            {/**Links */}
            <section className='footerLinks'>
                <div className='footerLogos'>
                    <div className='footerLogoDev'><img src={facebook} alt='footerLogoImg' /></div>
                    <div className='footerLogoDev'><img src={twitter} alt='footerLogoImg' /></div>
                    <div className='footerLogoDev'><img src={instagram} alt='footerLogoImg' /></div>
                    <div className='footerLogoDev'><img src={youtube} alt='footerLogoImg' /></div>
                </div>
                <div className='footerPrivecy'>&copy; 2022.All right Reserved</div>
                <div className='footerItems'>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>help</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
