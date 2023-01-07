import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import OurStoty from './pages/OurStory/OurStoty';
import RoyalLS from './pages/RoyalLS/RoyalLS';
import Packages from './pages/Packages/Packages';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import JoumanoGolfClub from './pages/JoumanoGolfClub/JoumanoGolfClub';
import Tournaments from './pages/Tournaments/Tournaments';
import OffersAndDeals from './pages/OffersAndDeals/OffersAndDeals';
import PackageDetails from './pages/PackageDetails/PackageDetails';
import Subscribe from './pages/Subscribe/Subscribe';
import Contact from './pages/Contact/Contact';
import SignUp from './pages/SignUp/SignUp';
import Reset from './pages/Reset/Reset';
import SubmitQuote from './pages/SubmitQuote/SubmitQuote';


function App() {

  return (
    <div>
      <Navbar />

      <ScrollToTop />
      
      <Routes>
        <Route exact path="/" element={<Home />} />    
        <Route path="/our-story" element={<OurStoty />} />
        <Route path="/royal-ls" element={ <RoyalLS /> } />
        <Route path="/our-packages" element={ <Packages /> } />
        <Route path="/joumano-club" element={<JoumanoGolfClub />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/offers-deals" element={<OffersAndDeals />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="/subscribe" element={<Subscribe />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/submit-quote" element={<SubmitQuote />} />
      </Routes> 

      <Footer /> 
    </div>
  );
}

export default App;
