import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Prevent body scroll when menu is open
    if (newMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // Re-enable body scroll when menu is closed
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle responsive detection to prevent initial layout shift
  useEffect(() => {
    const checkScreenSize = () => {
      // Use window.outerWidth and add buffer to account for zoom/scaling issues
      const effectiveWidth = Math.max(window.innerWidth, window.outerWidth || 0);
      setIsMobile(effectiveWidth <= 768);
    };
    
    // Set initial state immediately
    checkScreenSize();
    
    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Remove no-transition class after component mounts to enable animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Delay to ensure all page animations complete before navbar transitions are enabled
    
    return () => clearTimeout(timer);
  }, []);

  // Cleanup effect to restore body scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''} ${!isLoaded ? 'no-transition' : 'js-loaded'}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          {isScrolled && (
            <img 
              src="/LogoOfficial.png" 
              alt="Reach Language & Learning Logo" 
              className="nav-logo-icon"
            />
          )}
          <h2>Reach Language & Learning</h2>
        </Link>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/process" 
              className={`nav-link ${location.pathname === '/process' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Our Process
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/client-portal" 
              className={`nav-link ${location.pathname === '/client-portal' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Client Portal
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;