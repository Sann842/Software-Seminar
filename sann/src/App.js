import './App.css';
import Home from './Components/home';
import About from './Components/About';
import Example from './Components/Example';
import { BrowserRouter,
  Route,
  Routes, Link, } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <nav>
              <Link to="/">Home</Link>
              <br />
              <Link to="/about">About</Link>
              <br />
              <Link to="/example">Example</Link>
              </nav>
              <h1 style={{color:"teal"}}>This is my react page.</h1>
              <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/example" Component={Example} />
              </Routes>
              
      </BrowserRouter>
  
  );
}
export default App;
