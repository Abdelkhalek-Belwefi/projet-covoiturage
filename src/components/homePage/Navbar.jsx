import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo avec image */}
        <div className="nav-logo">
          <div className='img_logo'>
            <img src="/images/logo.png" alt="HopCar" />
          </div>
          <h2></h2>
        </div>

        {/* Menu pour desktop */}
        <div className="nav-menu">
          <a href="#accueil" className="nav-link">
            <span className="nav-icon">🏠</span>
            Accueil
          </a>
          <a href="#about" className="nav-link">
            <span className="nav-icon">ℹ️</span>
            About
          </a>
          <a href="#services" className="nav-link">
            <span className="nav-icon">⚙️</span>
            Services
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-icon">📞</span>
            Contact
          </a>
        </div>

        {/* Boutons d'action */}
        <div className="nav-actions">
          <button className="nav-btn login-btn">
            <span className="btn-icon">🔑</span>
            Sign In
          </button>
          <button className="nav-btn register-btn">
            <span className="btn-icon">👤</span>
            Sign Up
          </button>
        </div>

        {/* Menu hamburger pour mobile */}
        <div 
          className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#accueil" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            <span className="nav-icon">🏠</span>
            Accueil
          </a>
          <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            <span className="nav-icon">ℹ️</span>
            About
          </a>
          <a href="#services" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            <span className="nav-icon">⚙️</span>
            Services
          </a>
          <a href="#contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            <span className="nav-icon">📞</span>
            Contact
          </a>
          <div className="mobile-actions">
            <button className="mobile-btn login-btn">
              <span className="btn-icon">🔑</span>
              Sign In
            </button>
            <button className="mobile-btn register-btn">
              <span className="btn-icon">👤</span>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar