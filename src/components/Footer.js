import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">        
        <div className="footer-bottom">
          <p>&copy; 2025 Reach Language and Learning. All rights reserved.</p>
          <p>Gaby McLish, M.S., CCC-SLP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;