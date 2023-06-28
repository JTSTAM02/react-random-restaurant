# Restaurant Menu

## MoSCoW
- Must-Haves: Wireframe (styling), Restaurant Name/Address/HOA, Fetch data using API and Axios, dynamic menu of atleast 15 items, accordion design, each menu item as a card, manage state
- Should-Haves: list item and price, setLocal Storage
- Could-Haves: Emojis/Images for different foods, varied styling for different foods
- Won't-Haves: Change menu display based on day or time of day, labels for various foods such as Gluten-Free, Vegan, etc.


## Atomic Design Principles
- Atoms
    * Resturant Name as Header
    * Address and HOA on page
    * 
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
- My componenets will be broken down into separate React files. One for card design, one for accordion design, one for API call, one for nav bar (will include Menu), one for Menu Display
- Arrange them into separate files with App,js importing rest of the files
- Fetch data through component called FetchData
- Display data through componenet called RenderMenu
- use SetState to....
## Procedural

### Begin

### Init



## Functional

## Object Oriented

## React 
import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from ;
import axios from 'axios';
import Boostrap from 'bootstrap'

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
        <div><strong>Side Effects:</strong> {elixir.sideEffects}</div>
        <div><strong>Characteristics:</strong> {elixir.characteristics}</div>
        <div><strong>Ingredients:</strong> {elixir.ingredients.map((ingredient) => ingredient.name).join(', ')}</div>
        <div><strong>Time:</strong> {elixir.time}</div>
        <div><strong>Difficulty:</strong> {elixir.difficulty}</div>
        <div><strong>Manufacturer:</strong> {elixir.manufacturer}</div>
      </div>
    </div>
  )
}


ReactDOM.render(< FunctionName />, document.getElementbyId('root));
      
