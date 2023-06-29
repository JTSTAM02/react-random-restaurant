import React, { useState } from 'react';
import { BreakfastMenu } from './BreakfastMenu';
import { LunchMenu } from './LunchMenu';
import { DinnerMenu } from './DinnerMenu';
import { AppetizerMenu } from './AppetizerMenu';
import { HomeMenu } from './HomeMenu'

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
