
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar2 from './components/NavBar2'

function App() {
  return (
    <>
    <div>
      <NavBar2/>
      <div>
        <Home/>
        <About/>
        <Menu/>
        <Reviews/>
        <Contact/>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default App;
