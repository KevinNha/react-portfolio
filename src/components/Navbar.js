import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import "./Navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const closeMobileMenu = () => {
    setClick(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          KN <FontAwesomeIcon icon={"coffee"} />
        </Link>
        <div className="hamburger-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? "times" : "bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-me" className="nav-links" onClick={closeMobileMenu}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;