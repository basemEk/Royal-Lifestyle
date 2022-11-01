import './Style.css'
import Group26 from '../../images/Group 4126.png'
import Group09 from '../../images/Group 4109.png'
import Group114 from '../../images/Group 114.png'

export default function Club() {
    return (
        <div className='clubContainer'>
            <div className='ClubHeading'>
                <div>
                    <img alt='ClubHeading' src={Group26} />
                </div>
                <h1>Jumano Golf Club</h1>
                <p>
                    making it look like readable English. Many desktop publishing packages and web page editors now u
                    <br />
                    making it look like readable English. Many desktop publishing packages and web page editors now u
                </p>
            </div>
            
            <div className='clubBody'>
                <div className='clubBodyImg01'>
                    <img src={Group09} alt='Group09' />
                </div>

                <p className='clubBodyP'>JACK CHARLES GOLF CLUBS MADE FOR GOLFERS BY GOLFER</p>
                <div className='clubBodyBtn'>
                    <button>DISCOVER MORE</button>
                </div>

                <div className='clubBodyImg02'>
                    <img src={Group114} alt='Group114' />
                    <div>watch video</div>
                </div>
            </div>
        </div>
    )
}
