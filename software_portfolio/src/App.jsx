import './App.css';
import { BrowserRouter, Route, Routes, Link, } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <div className='header'>
        <BrowserRouter>
          <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
          </nav>
          <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/gallery" Component={Gallery}/>
            <Route path="/contact" Component={Contact}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
