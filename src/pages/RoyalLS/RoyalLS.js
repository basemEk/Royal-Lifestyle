import React from 'react';
import './RoyalLS.css';
import banner from '../../assets/banner-home.png'
import royalBadge from '../../assets/rl-logo-trial.png'
import vip from '../../assets/rls-vip.png'
import plane from '../../assets/rls-airplane.png'
import percentage from '../../assets/rls-percentage.png'
import call from '../../assets/rls-call.png'
import Login from '../Login/Login';


export default function RoyalLS() {
  return (
    <div className='royal-container'>
        <div className='bannerimg-blur'>
            <img src={banner} alt="royal lifestyle" className='banner-rls' />
            <div className='blury-circle'></div>
        </div>
        <div className='log'>
            <img src={royalBadge} className="logo-rb" alt="royal"/>
        </div> 

        <div className='header-h1-p'>
            <h1>Dubai Link And The Royal Lifestyle Come Together To Grant All Golf Lovers The Finest Holiday Experience.</h1>
            <p>
                With an aim to grant all golf lovers a first-class holiday experience, Dubai Link partnered with one of the finest golf clubs companies in the industry, The Royal Lifestyle, in an attempt to provide its clients with an excellent and comprehensive royal services package that covers their needs from the very first plane ticket booking till the last bit.
            </p>
        </div>

        <div className='why-choose'><h2>WHY CHOOSE DUBAI LINK?</h2></div>

        <div className='why-choose-dl'>
            <div className='why-choose-item'>
                <div className='why-choose-logo'>
                    <img src={vip} alt="vip" />
                </div>
                <div className='why-choose-p'>
                    <p>VIP meet and assist from/to the airport with a chauffeur limousine driver</p>
                </div>
            </div>

            <div className='why-choose-item'>
                <div className='why-choose-logo'>
                    <img src={percentage} alt="vip" />
                </div>
                <div className='why-choose-p'>
                    <p>Exclusive packages with special rates at worldwide golf courses & golf resorts</p>
                </div>
            </div>

            <div className='why-choose-item'>
                <div className='why-choose-logo plane'>
                    <img src={plane} alt="vip" />
                </div>
                <div className='why-choose-p'>
                    <p>Private charter or regular airline reservation</p>
                </div>
            </div>
            
            <div className='why-choose-item'>
                <div className='why-choose-logo'>
                    <img src={call} alt="vip" />
                </div>
                <div>
                    <p className='why-choose-p'>Exceptional multilingual concierge service dedicated to answering & catering to all the needs of the golfers during their trip</p>
                </div>
            </div>
        </div>

        <div className='royalLsLogin'>
            <Login />
        </div>

    </div>
  )
}
