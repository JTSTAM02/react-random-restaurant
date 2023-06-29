 import './App.css';
import { Header } from './Header.js';
import { NavBar } from './NavBar';
import { Menu } from './Menu.js';
function App() {
  return (
    <div className="App">
      <div className="App-header">
            <NavBar />
            <br />
            <Header />
      </div>
        <div className='main'>
          <Menu />
        </div>
    </div>
  );
}

export default App;
