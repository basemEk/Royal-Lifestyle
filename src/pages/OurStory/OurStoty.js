import React from "react";
import "./OurStory.css";
import ManInSuit from "../../assets/man-in-suite.png";
import Woman from "../../assets/woman.png";
import Login from "../Login/Login";
import golfBallBook from '../../assets/golf-ball-with-dents.png'
import bookingArrow from '../../assets/arrow-green-packages.png'
import BookTeaTime from '../../components/BookTeaTime/BookTeaTime'


export default function OurStoty() {
  return (
    <div className="wrapper">

        <BookTeaTime
          imgBooking = {golfBallBook}
          book = "BOOK TEA-TIME"
          bookArr = {bookingArrow}
         />

      <div className="first-section">
        <h1 style={{ fontSize: "50px" }}>
          The <span>Royal Lifestyle</span>
          <br />
          is more than a line of products.
          <br />
          It's an <span>experience</span> to remember.
        </h1>
      </div>

      <div className="second-section">
        <div className="man-img">
          <img src={ManInSuit} alt="man in suit" className="man-woman" />
        </div>

        <div className="blank-sheet">
          <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna sit nam .
              <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris.
              <br />
              <br />
              Morbi tincidunt augue interdum velit. <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris.
              <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris. <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris. Morbi tincidunt augue interdum velit.
              Tempus iaculis urna id volutpat lacus laoreet. Dictumst quisque
              sagittis purus sit amet volutpat consequat mauris.
              <br />
              <br />
              sit amet volutpat consequat mauris.
              <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris. <br />
              <br />
            </p>
        </div>

        <div className="white">
          <div className="centered-p">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna sit nam .
              <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris.
              <br />
              <br />
              Morbi tincidunt augue interdum velit. <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris.
              <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris. <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris. Morbi tincidunt augue interdum velit.
              Tempus iaculis urna id volutpat lacus laoreet. Dictumst quisque
              sagittis purus sit amet volutpat consequat mauris.
              <br />
              <br />
              sit amet volutpat consequat mauris.
              <br />
              <br />
              Morbi tincidunt augue interdum velit. Tempus iaculis urna id
              volutpat lacus laoreet. Dictumst quisque sagittis purus sit amet
              volutpat consequat mauris. <br />
              <br />
            </p>
          </div>
        </div>
        
        <div className="contessa-img">
          <img src={Woman} alt="contessa" className="man-woman woman" />
        </div>
      </div>



      <div className="third-section">
        <div className="one-five">
          <h2 id="five-lines-h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            molestie ac feugiat sed lectus vestibulum mattis. Quis lectus nulla
            at volutpat diam ut. Nec ullamcorper sit amet risus. Quis lectus
            nulla at volutpat diam ut. Nec ullamcorper sit amet risus.
            Pellentesque nec nam aliquam sem Pellentesque nec nam aliquam sem et
            tortor consequat id porta.
          </h2>
          <h2 id="one-line-h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod adipiscing.
          </h2>
        </div>
      </div>

      <div className="loginStory">
        <Login />
      </div>
      
    </div>
  );
}
