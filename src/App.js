import logo from './logo.svg';
import './App.css';
import About from './Components/About/page';
import Home from './Components/Home/page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <About />
      </header>
    </div>
  );
}

export default App;
