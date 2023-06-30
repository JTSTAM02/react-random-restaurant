import React, { useState } from 'react';
import { BreakfastMenu } from './BreakfastMenu';
import { LunchMenu } from './LunchMenu';
import { DinnerMenu } from './DinnerMenu';
import { AppetizerMenu } from './AppetizerMenu';
import { HomeMenu } from './HomeMenu'
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


export function NavBar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body">
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
            className="collapse navbar-collapse centered"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
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
