# Restaurant Menu

## MoSCoW
- Must-Haves:
   - Wireframe (styling),
   - Restaurant Name/Address/HOA,
   - Fetch data using API and Axios, 
   - Dynamic menu of atleast 15 items, (display all by menu category)
   - Each menu item as a card
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
    * Card design
      
- Organisms
    * Dynamic menu items


## Variables
- API URL is https://www.jsonkeeper.com/b/MDXW 

## Procedural

### Begin

### Init
- Create Componenets (see numbered list below)
- Organize components by wireframe design (orgnize logically from top to bottom)
- Build UI without any dynamic elements
- Identify where state should go (dynamic elements, anything involving memory such as setLocalStorage)
- Add state into navBar through various section componenets


1. Create Heading Componenet (display Restaurant Name and Address and Hours of Operation)
    * Heading Componenet will be rendered upon each section type
2. Create navbar Component (display above Heading Component)
      * Navbar should include link for Menu Sections such as Breakfast, Brunch, Lunch, and Extras
3. Create menu component (catch data but DO NOT DISPLAY-will display all day through MenuSections via NavBar)
4. Create MenuSections for each NavBar item (will display that categories data)

### End

## Functional

- Header Component

export default function Header() {
return (
<>
   <h1>Restaurant Name</h1>
   <h3>Restaurant Address</h3>
   <h3>Hours of Operation</h3>
</>
}

- NavBar Component

export function NavBar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
          rel="stylesheet"
        />
        <title>NavBar</title>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </head>
      <nav className="navbar navbar-expand-md bg-body">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${
                    activeLink === 'home' && 'active'
                  }`}
                  onClick={() => handleNavLinkClick('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${
                    activeLink === 'breakfast' && 'active'
                  }`}
                  onClick={() => handleNavLinkClick('breakfast')}
                >
                  Breakfast
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${
                    activeLink === 'lunch' && 'active'
                  }`}
                  onClick={() => handleNavLinkClick('lunch')}
                >
                  Lunch
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${
                    activeLink === 'dinner' && 'active'
                  }`}
                  onClick={() => handleNavLinkClick('dinner')}
                >
                  Dinner
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link ${
                    activeLink === 'appetizers' && 'active'
                  }`}
                  onClick={() => handleNavLinkClick('appetizers')}
                >
                  Appetizers!
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {activeLink === 'home' && <HomeMenu />}
      {activeLink === 'breakfast' && <BreakfastMenu />}
      {activeLink === 'lunch' && <LunchMenu />}
      {activeLink === 'dinner' && <DinnerMenu />}
      {activeLink === 'appetizers' && <AppetizerMenu />}
    </>
  );
}

-Menu Component (adjust for MenuSections by .filter statement)

export function HomeMenu() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(response => {
                setMenuItems(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching menu items', error);
                setLoading(false);
            });


    }, []);

    if(loading) {
        return(
            <div>Loading...</div>
        )
    }

    return (
        <>
        <Header />
            <h1><u>Menu</u></h1>
                <div className="row">
                {menuItems.map (item => (                                        
                    <div key= {item.id} className="col-md-6">
                        <div className="card-deck h-100 card border-dark">
                        <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <h4>Category: {item.category}</h4>                        
                        <h5>Description: {item.description}</h5>
                        <h6>{item.price}</h6>
                        <br />
                        </div>
                        </div>
                    </div>
                ))}
                </div>
        </>
    )
}

- Example MenuSection (BreakfastMenu): just change the code on line 263 from "Breakfast" to whatever the data category is

export function BreakfastMenu() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(response => {
                setMenuItems(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching menu items', error);
                setLoading(false);
            });


    }, []);

    if(loading) {
        return(
            <div>Loading...</div>
        )
    }

    const filteredItems = menuItems.filter( item => item.category === "Breakfast");

    return (
        <>
            <Header />
            <h1><u>Menu</u></h1>
                <div className="row">
                {filteredItems.map (item => (                                        
                    <div key= {item.id} className="col-md-6">
                        <div className="card-deck h-100 card border-dark">
                        <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <h4>Category: {item.category}</h4>                        
                        <h5>Description: {item.description}</h5>
                        <h6>{item.price}</h6>
                        <br />
                        </div>
                        </div>
                    </div>
                ))}
                </div>
        </>
    )
}


## Object Oriented

## React 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bootstrap from 'bootstrap'      


Exemplar Code for Fetch API using Axios (does not display data, just fetches it to console):

import React, { useEffect, useState } from "react";
import axios from 'axios';

export function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(response => {
                setMenuItems(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching menu items', error);
                setLoading(false);
            });


    }, []);

    if(loading) {
        return(
            <div>Loading...</div>
        )
    }
}