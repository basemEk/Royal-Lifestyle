import React from 'react';
import './BookTeaTime.css';


const BookTeaTime = ({imgBooking, book, bookArr}) => {
    
        return (
            <>
                <div className="reserve">
                    <div className='bookingImg'>
                        <img src={imgBooking} className="bookingImg" alt="" />
                    </div>  
                    <div className='whiteRec icon2-position icon2-style'>
                        <div>{book}</div>
                        <div>
                            <img src={bookArr} className="bookArr" alt="" />
                        </div>
                    </div>
                </div>
            </>
    );
};

export default BookTeaTime;