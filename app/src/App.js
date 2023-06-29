 import './App.css';
import { Header } from './Header.js';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            <NavBar />
            <br />
            <Header />
        </p>
      </header>
        <p>
          <Menu />
        </p>
    </div>
  );
}

export default App;
