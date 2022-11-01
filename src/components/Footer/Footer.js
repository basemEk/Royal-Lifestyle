import React from 'react'
import './Style.css'
import facebook from '../../images/facebook-app-symbol.png'
import instagram from '../../images/instagram.png'
import youtube from '../../images/youtube.png'
import twitter from '../../images/twitter.png'
export default function Footer() {
    return (
        <div>
            {/**Banner Image */}
            <section className='footerBannerImage'></section>
            {/**Subsicrebtion */}
            <section>
                <div className='footerSubsicrebtion'>
                    <h1>Subsicrebe to our Newsletter</h1>
                    <input type={'email'} placeholder='enter your email' />
                </div>
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
