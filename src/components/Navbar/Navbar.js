import "./Style.css";
import Logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarItem() {

  function handleLogin() {
      console.log("testing")
      var loginForm = document.getElementById("loginForm")
      console.log(loginForm.style.display);
      if (loginForm.style.display === "none" || loginForm.style.display === "" ) {
        loginForm.style.display = "block"
      } else {
        loginForm.style.display = "none"
      }
  }


  return (
    <>
      <div className="nav-container">
        <div className="nav-links">
          <img src={Logo} alt="logo" id="logo" />
          <a href="/">HOME</a>
          <a href="/our-story">OUR STORY</a>
          <a href="/our-packages">GOLF PACKAGES</a>
          <a href="/joumano-club">JOUMANO GOLF CLUB
          <ul>
              <li><a href="/joumano-club">JOUMANO GOLF CLUB</a></li>
              <li><a href="https://dubailink.thegoproject.me/">Dubai Link</a></li>
              <li><a href="#car-dealer">Car Dealers</a></li>
              <li><a href="#hotel-program">Hotel Program</a></li>
              <li><a href="#la18">LA18 TV Show</a></li>
              <li><a href="#golf-club">Golf Clubs</a></li>
          </ul>
          </a>
          <a href="/tournaments">TOURNAMENTS</a>
          <a href="/offers-deals">OFFERS</a>
          <a href="/contact">CONTACT US</a>
          <a href="/subscribe" id="subscribe-nav">SUBSCRIBE</a>
          <a href="#login" onClick={handleLogin}>
            LOGIN
          </a>
        </div>
      </div>




      <div className="mobile-version">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><Image src={Logo} alt="logo" id="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/our-story">OUR STORY</Nav.Link>
                <Nav.Link href="/our-packages">GOLF PACKAGES</Nav.Link>

                <NavDropdown title="JOUMANO GOLF CLUB" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/joumano-club">JOUMANO GOLF CLUB</NavDropdown.Item>
                  <NavDropdown.Item href="https://dubailink.thegoproject.me/">
                    DUBAI LINK
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    CAR DEALERS
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    HOTEL PROGRAM
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.5">
                    LA18 TV SHOW
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.6">
                    GOLF CLUB
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/tournaments">TOURNAMENTS</Nav.Link>
                <Nav.Link href="/offers-deals">OFFERS</Nav.Link>
                <Nav.Link href="/contact">CONTACT US</Nav.Link>
                <Nav.Link href="/subscribe" id='sub'>SUBSCRIBE</Nav.Link>
                <Nav.Link href="#login" onClick={handleLogin}>LOGIN</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarItem;
