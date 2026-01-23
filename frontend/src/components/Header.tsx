import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav nav-left">
          <a href="#services" className="nav-link">Services</a>
          <a href="#our-work" className="nav-link">Our Work</a>
        </nav>
        <a href="#" className="logo">
          <img src={`${import.meta.env.BASE_URL}imgs/logo.png`} alt="Shine Bros" className="logo-img" />
        </a>
        <nav className="nav nav-right">
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#quote" className="btn btn-primary">Get Quote</a>
        </nav>
        <button
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className={`nav nav-mobile ${menuOpen ? 'active' : ''}`}>
        <a href="#services" className="nav-link" onClick={handleNavClick}>Services</a>
        <a href="#our-work" className="nav-link" onClick={handleNavClick}>Our Work</a>
        <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
        <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
        <a href="#quote" className="btn btn-primary" onClick={handleNavClick}>Get Quote</a>
      </nav>
    </header>
  );
}
