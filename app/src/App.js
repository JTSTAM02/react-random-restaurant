import './App.css';
import { NavBar } from './NavBar';
import { Menu } from './Menu.js';

export function App() {
  return (
    <div className="App">
      <div className="App-header">
            <NavBar />
            <br />
      </div>
        <div className='main'>
          <Menu />
        </div>
    </div>
  );
}

export default App;
