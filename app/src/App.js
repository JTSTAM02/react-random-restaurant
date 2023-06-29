import './App.css';
import { Header } from './Header.js';
import { NavBar } from './NavBar';
import { Menu } from './Menu.js';
import { useState } from 'react';
import { SectionMenu } from './SectionMenu';

export function App() {

const [selectedSection, setselectedSection] = useState(null);

const handleSectionClick = (section) => {
  setselectedSection(section);
};

  return (
    <div className="App">
      <div className="App-header">
            <NavBar handleSectionClick={handleSectionClick} />
            <br />
            <Header />
      </div>
        <div className='main'>
          <Menu handleSectionClick={selectedSection}/>
        </div>
    </div>
  );
}

export default App;
