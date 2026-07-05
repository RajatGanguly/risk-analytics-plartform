import React, { useState } from 'react';
import './Header.css';

function Header({ onNavigate, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">📊</span>
          <h1>Risk Analytics</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <button 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'line-top' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'line-middle' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'line-bottom' : ''}`}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;