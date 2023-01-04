import React from 'react';
import golfBallBook from '../../assets/golf-ball-with-dents.png'
import bookingArrow from '../../assets/arrow-green-packages.png'
import './BookTeaTime.css';


const BookTeaTime = () => {
    
        return (
            <div className="reserve">
                <div className='bookingImg'>
                    <img src={golfBallBook} className="bookingImg icon2-position icon2-style" alt='book tea time' />
                </div>  
                <div className='whiteRec icon2-position icon2-style'>
                   <div>BOOK TEA TIME</div> 
                   <div><img src={bookingArrow} className="bookArr" alt="booking" /></div>
                </div>
            </div>
    );
};

export default BookTeaTime;