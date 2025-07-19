import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-content">
          <div className="footer-section">
            <h3>Reach Language & Learning</h3>
            <p>
              Helping kids, teens, and young adults thrive through personalized speech and language services.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Washington, DC Metro Area</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@reachlanguagelearning.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Service Areas</h4>
            <p>Washington, DC</p>
            <p>Northern Virginia</p>
            <p>Maryland</p>
            <p>Virtual sessions available</p>
          </div>
        </div> */}
        
        <div className="footer-bottom">
          <p>&copy; 2024 Reach Language and Learning. All rights reserved.</p>
          <p>Gaby McLish, M.S., CCC-SLP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;