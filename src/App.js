import './App.css';
import Welcome from './components/Welcome/Welcome';
import Upcoming from './components/Upcoming/Upcoming';
import Premium from './components/Premium/Premium';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Feature from './components/Feature/Feature';
import Club from './components/Club/Club';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <Banner />
      <Welcome />
      <Premium />
      <Upcoming />
      <Feature />
      <Club />
      <Footer />
    </div>
  );
}

export default App;
