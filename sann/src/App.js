import './App.css';
import Example from './Components/Example';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>This is the header.</h1>
      </header>
      <div className="body">
        <h2>This is the body.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio eaque necessitatibus cum ipsam, quas accusamus deleniti asperiores natus deserunt!</p>
        <button className="btn">Click me</button>
      </div>
      <Example/>
    </div>
  );
}
export default App;
