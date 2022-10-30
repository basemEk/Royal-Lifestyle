import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Upcoming from './components/Upcoming/Upcoming';
import Premium from './components/Premium/Premium';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div >
      <Navbar />
      <Banner />
      <Welcome />
      <Premium />
      <Upcoming />
    </div>
  );
}

export default App;
