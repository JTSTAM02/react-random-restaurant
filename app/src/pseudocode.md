# Restaurant Menu

## MoSCoW
- Must-Haves:
   - Wireframe (styling),
   - Restaurant Name/Address/HOA,
   - Fetch data using API and Axios, 
   - Dynamic menu of atleast 15 items, (choose breakfast foods)
   - Accordion design,
   - Each menu item as a card,
   - Manage state

- Should-Haves:
   - List item and price,
   - setLocal Storage, 
   - Logo,
   - Address in footer
 
   
- Could-Haves:
   - Emojis/Images for different foods,
   - Varied styling for different foods

- Won't-Haves:
   - Change menu display based on day or time of day,
   - Labels for various foods such as Gluten-Free, Vegan, etc.


## Atomic Design Principles
- Atoms
    * Resturant Name as Header
    * Address and HOA on page
    * Menu Descriptions
    * Price of Items and Item Name
      
- Molecules
    * Accordion design
    * Card design
      
- Organisms
    * Dynamic menu items

## Questions
  - What are my componenets?
  - How do I arrange my componenets into a structured hierarchy?
  - How do I fetch data from the given API?
  - How do I display the data from the API?
  - How do I manage state in React?


## Solutions
- My componenets will be broken down into separate React files:
  * One defaul called Menu,
  * one for card design,
  * one for accordion design,
  * one for nav bar (will include Menu),
  * one for Menu Display(RenderMenu)
 
    
- Arrange them into separate files with App,js importing rest of the files
- Fetch data through Axios API call (see example code below)
- Display data through componenet called RenderMenu
- use SetState to manage State

## Variables
- API URL is https://www.jsonkeeper.com/b/MDXW 

## Procedural


1. Create Heading Componenet (display Restaurant Name and Address and Hours of Operation
2. Create navbar Component (display above Heading Component)
      * Navbar should include link for Menu
3. Create menu component (dynamically display JSON date)


### Begin
### Init
- Create Componenets (See Procedural)
- Organize components by wireframe design (orgnize logically from top to bottom)
- Build UI without any dynamic elements
- Identify where state should go (dynamic elements, anything involving memory such as setLocalStorage)
- Add state

### End

## Functional




## Object Oriented

## React 
import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from ;
import axios from 'axios';
import Bootstrap from 'bootstrap'

function Setup Exemplar:

export default function Name() {
const ENDPOINT = "Name";

const [Name, setName] = useState([]);

useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
    setName(data);
    } else {
      getData(ENDPOINT)
        .then(data) => {
          setName(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
  <main style={{}} className="chosenName">
    <div className = "bootstrap layout"
      <h1> Heading of Choice</h1>
      {Name.map(name) => <Name key= {key.id} name = {name} />)}
      </div>
    < /main>
  );
}


const Name = ({ name }) => {
  return (
    <div className="bootstrap styling">
      <div className = "card-body">
        {name.name %% <h1 className = 'card-title'>{name.name}</h1>}
                <div><strong>Effect:</strong> {elixir.effect}</div>
      </div>
    </div>
  )
}


ReactDOM.render(< FunctionName />, document.getElementbyId('root));
      
