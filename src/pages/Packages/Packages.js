import React from 'react'
import './Packages.css'
import bannerPackages from '../../assets/banner-home.png'
import arrowGreenPackages from '../../assets/arrow-green-packages.png'
import gridImgPackages from '../../assets/grid-img-packages.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from '../Login/Login'
import golfBallBook from '../../assets/golf-ball-with-dents.png'
import bookingArrow from '../../assets/arrow-green-packages.png'
import BookTeaTime from '../../components/BookTeaTime/BookTeaTime'


export default function Packages() {
  const settingsNoModules = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "button__bar",
    arrows: false,
    responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                },
              },
              {
                  breakpoint: 801,
                  settings: {
                    arrows: false,
                    slidesToShow: 1,
                  },
                },
              {
                breakpoint: 481,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                },
              },
            ],

  };
  


//   var settingsService = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: 'beforeChange',
//     dotsClass: 'dotsPackages',
//     responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             arrows: false,
//             slidesToShow: 2,
//           },
//         },
//         {
//             breakpoint: 801,
//             settings: {
//               arrows: false,
//               slidesToShow: 1,
//             },
//           },
//         {
//           breakpoint: 481,
//           settings: {
//             arrows: false,
//             slidesToShow: 1,
//           },
//         },
//       ],
//     //---------------------------------Indicators
//     appendDots: dots => (
//         <div>
//             <ul> {dots} </ul>
//         </div>
//     ),
//     customPaging: i => (<div></div>)

// };



  return (
    <div className='package-wrapper'>

        <BookTeaTime
          imgBooking = {golfBallBook}
          book = "BOOK TEA-TIME"
          bookArr = {bookingArrow}
         />

        <div className="overlay-packages-container">
            <img src={bannerPackages} alt=""/>
            <div className='packages-caption'>
              <h1>Let’s Book Your Next Golf Vacation!</h1>
              <button>REQUEST QUOTE</button>
            </div>
        </div>

        <div className='uae-destinations'>
          <h1>UAE Destinations</h1>
          <p>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante blandit sapien viverra nunc.”</p>
        </div>

        <div className='golf-package-names'>
          {/* {packs.map(pack, index) => { */}
              <div className='pack-1'>
              <a href="/package-details">
                <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
              </a>
                <h4>GOLF PACKAGE NAME</h4>
                <p id="enjoy">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
                <p id="explore">Explore</p>
                <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
              </div>
          {/* }} */}

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4>GOLF PACKAGE NAME</h4>
            <p id="enjoy">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore">Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4>GOLF PACKAGE NAME</h4>
            <p id="enjoy">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore">Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4>GOLF PACKAGE NAME</h4>
            <p id="enjoy">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore">Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4>GOLF PACKAGE NAME</h4>
            <p id="enjoy">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore">Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4>GOLF PACKAGE NAME</h4>
            <p id="enjoy">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore">Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>
        </div>



        <div className='uae-destinations'>
          <h1>International Destinations</h1>
          <p>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante blandit sapien viverra nunc.”</p>
        </div>

        <div className='golf-package-names'>
          {/* {packs.map(pack, index) => { */}
            <div className='pack-1'>
              <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
              <h4 className='h4-grid-package-card'>GOLF PACKAGE NAME</h4>
              <p id="enjoy" className='p-grid-package-card'>Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
              <p id="explore" className='p-grid-package-card'>Explore</p>
              <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
           </div>
          {/* }} */}

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4 className='h4-grid-package-card'>GOLF PACKAGE NAME</h4>
            <p id="enjoy" className='p-grid-package-card'>Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore" className='p-grid-package-card'>Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4 className='h4-grid-package-card'>GOLF PACKAGE NAME</h4>
            <p id="enjoy" className='p-grid-package-card'>Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore" className='p-grid-package-card'>Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4 className='h4-grid-package-card'>GOLF PACKAGE NAME</h4>
            <p id="enjoy" className='p-grid-package-card'>Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore" className='p-grid-package-card'>Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4 className='h4-grid-package-card'>GOLF PACKAGE NAME</h4>
            <p id="enjoy" className='p-grid-package-card'>Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore" className='p-grid-package-card'>Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>

          <div className='pack-1'>
            <img src={gridImgPackages} className="pack-img" alt="pack-1"/>
            <h4 className='h4-grid-package-card'>GOLF PACKAGE NAME</h4>
            <p id="enjoy" className='p-grid-package-card'>Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
            <p id="explore" className='p-grid-package-card'>Explore</p>
            <div><img src={arrowGreenPackages} className="arrow" alt="arrow" /></div>
          </div>
        </div>


        <div className='uae-destinations'>
          <h1>Popular Packages</h1>
          <p>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante blandit sapien viverra nunc.”</p>
        </div>


        <div className='package-slider-container'>
          <Slider className='slider-wrapper' ref={c => (Slider = c)} {...settingsNoModules}>
            <div className='pack-1-slider'>    
                  <img src={gridImgPackages} className="pack-img-slider" alt="pack-1"/>
                  <div className='pack-1-slider-content'>
                  <h4 id="h4-golfPackage">GOLF PACKAGE NAME</h4>
                  <p id="enjoy-slider" className="p-slider-packages-slider">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
                  <p id="explore-slider" className="p-slider-packages-slider">Explore</p>
                  <div><img src={arrowGreenPackages} id="slider-arrow-green" alt="arrow" /></div>
                </div>   
             </div>


             <div className='pack-1-slider'>    
                  <img src={gridImgPackages} className="pack-img-slider" alt="pack-1"/>
                  <div className='pack-1-slider-content'>
                  <h4 id="h4-golfPackage">GOLF PACKAGE NAME</h4>
                  <p id="enjoy-slider" className="p-slider-packages-slider">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
                  <p id="explore-slider" className="p-slider-packages-slider">Explore</p>
                  <div><img src={arrowGreenPackages} id="slider-arrow-green" alt="arrow" /></div>
                </div>   
             </div>

             <div className='pack-1-slider'>    
                  <img src={gridImgPackages} className="pack-img-slider" alt="pack-1"/>
                  <div className='pack-1-slider-content'>
                  <h4 id="h4-golfPackage">GOLF PACKAGE NAME</h4>
                  <p id="enjoy-slider" className="p-slider-packages-slider">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
                  <p id="explore-slider" className="p-slider-packages-slider">Explore</p>
                  <div><img src={arrowGreenPackages} id="slider-arrow-green" alt="arrow" /></div>
                </div>   
             </div>

             <div className='pack-1-slider'>    
                  <img src={gridImgPackages} className="pack-img-slider" alt="pack-1"/>
                  <div className='pack-1-slider-content'>
                  <h4 id="h4-golfPackage">GOLF PACKAGE NAME</h4>
                  <p id="enjoy-slider" className="p-slider-packages-slider">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
                  <p id="explore-slider" className="p-slider-packages-slider">Explore</p>
                  <div><img src={arrowGreenPackages} id="slider-arrow-green" alt="arrow" /></div>
                </div>   
             </div>

             <div className='pack-1-slider'>
                  <img src={gridImgPackages} className="pack-img-slider" alt="pack-1"/>
                  <div className='pack-1-slider-content'>
                  <h4 id="h4-golfPackage">GOLF PACKAGE NAME</h4>
                  <p id="enjoy-slider" className="p-slider-packages-slider">Enjoy 2 nights’ accommodations at Fairmont Sonoma Mission Inn and 1 round of golf at Sonoma Golf Club.</p>
                  <p id="explore-slider" className="p-slider-packages-slider">Explore</p>
                  <div><img src={arrowGreenPackages} id="slider-arrow-green" alt="arrow" /></div>
                </div>   
             </div>
        </Slider>

        <div className='uae-destinations'>
          <h1>Request A Custom Golf Package Quote</h1>
          <p>“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante blandit sapien viverra nunc.”</p>
        </div>


      <form action="/action">
        <div className='package-wrapper-form'>
          <div className='package-form'>
            <div className='form-pack'>
                <label for="name">First Name</label><br/>
                <input type="text"  className="form-input-width" name="name"/>
            </div>

            <div className='form-pack'>
                <label for="email">Email</label><br/>
                <input type="email"  className="form-input-width" name="email"/>
            </div>

            <div className='form-pack'>
                <label for="date-picker">Arrival Date</label><br/>
                <input type='date'  className="form-input-width calendar-packages" name="date-picker" required/>
            </div>

            <div className='form-pack'>
              <input type="checkbox" className='scales' name="scales"></input>
              <label for="scales">I’m not sure of my Arrival Date.</label>
            </div>

            <div className='form-pack'>
              <label># of Golfers</label><br/>
              <select name="wgtmsr" id="wgtmsr" className="form-input-width select-packages ">
                <option value="actual value 1" className="dropdown" />
                <option value="actual value 2" className="dropdown" />
                <option value="actual value 3" className="dropdown" />
              </select>
            </div>
            
            <div className='form-pack'>
            <label>Destinations</label><br/>
              <select name="wgtmsr" id="wgtmsr" className="form-input-width select-packages">
                <option value="actual value 1" className="dropdown" />
                <option value="actual value 2" className="dropdown" />
                <option value="actual value 3" className="dropdown" />
              </select>
            </div>
          </div>

          <div className='package-form'>
            <div className='form-pack'>
                <label className='label-2 lbl-tablet' for="name">Last Name</label><br/>
                <input type="text" className="form-input-width" name="name"/>
            </div>

            <div className='form-pack'>
                <label className='label-2 lbl-tablet' for="telNo">Phone number:</label><br/>
                <input type="number" className="form-input-width" id="telNo" name="telNo"/>
            </div>

            <div className='form-pack'>
                <label className='label-2 lbl-tablet' for="date-picker">Departure Date</label><br/>
                <input type='date' className="form-input-width calendar-packages" name="date-picker" required/>
            </div>

            <div className='form-pack'>
              <input type="checkbox" className='scales checkbox-label-2 lbl-tablet' name="scales"></input>
              <label className='checkbox-label-2 departure-date' id="scales-text" for="scales">I’m not sure of my Departure Date.</label>
            </div>

            <div className='form-pack'>
              <label className='label-2 lbl-tablet'># of Rounds per Golfers</label><br/>
              <select name="wgtmsr" className="form-input-width select-packages" id="wgtmsr">
                <option value="actual value 1" className="dropdown" />
                <option value="actual value 2" className="dropdown" />
                <option value="actual value 3" className="dropdown" />
              </select>
            </div>
            
            <div className='form-pack'>
            <label className='label-2 lbl-tablet'>Rental Car Needed</label><br/>
              <select name="wgtmsr" className="form-input-width select-packages" id="wgtmsr">
                <option value="actual value 1" className="dropdown" />
                <option value="actual value 2" className="dropdown" />
                <option value="actual value 3" className="dropdown" />
              </select>
            </div>
          </div>
        </div> 

        <div className='textarea-div'>
          <label>Special Notes</label><br/>
          <textarea className="textarea-packages"/>
        </div>

        <div className='package-form-btn-container'>
          <input type="submit" value="SUBMIT" className='package-submit'/>
        </div>
      </form>
        </div>

        <div className='packageLogin'>
            <Login />
        </div>
                    
    </div>
  )
}
