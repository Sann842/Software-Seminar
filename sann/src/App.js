import './App.css';
// import css from './Components/Home.module.css';
import Home from './Components/home';
import About from './Components/About';
import Counter from './Components/Count';
import TextBox from './Components/TextBox';
import { BrowserRouter, Route, Routes, Link, } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <nav className="navigation">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/count">Count</Link>
              <Link to='/textbox'>Text</Link>
              </nav>
              <h1 style={{color:"teal"}}>This is my react page.</h1>
              { 2 > 5 ? <h4>More than 5</h4>: <h4>Less than 5</h4> }
              <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/count" Component={Counter} />
              <Route path="/textbox" Component={TextBox} />
              </Routes>
      </BrowserRouter>
  
  );
}
export default App;
