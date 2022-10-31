import React from 'react'
import './Style.css'

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
            <section></section>
        </div>
    )
}
