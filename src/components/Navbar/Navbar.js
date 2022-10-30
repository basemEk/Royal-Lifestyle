import './Navbar.css'
import Logo from '../../assets/logo.png'

function Navbar() {

    return (
        <div className="nav-container">

            <div className="nav-links">
                <img src={Logo} alt="logo" id="logo" />
                <a href="home">HOME</a>
                <a href="#our-story">OUR STORY</a>
                <a href="#golf-packages">GOLF PACKAGES</a>
                <a href="#joumano">JOUMANO GOLF CLUB</a>
                <a href="#tournaments">TOURNAMENTS</a>
                <a href="#offers">OFFERS</a>
                <a href="#contact">CONTACT US</a>
                <a href="#subscribe" id="subscribe-nav">SUBSCRIBE</a>
                <a href="#login">LOGIN</a>
            </div>

            {/* <div><img src={banner} alt="banner"/></div> */}

        </div>
    );
}

export default Navbar;