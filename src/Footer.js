import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section footer-image">
            <img src="/restaurant.jpg" alt="Restaurant" />
          </div>
          <div className="footer-section">
            <h3>Doormat Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="footer-section-group">
            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li>Address</li>
                <li>Email</li>
                <li>Phone number</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Social Media Links</h3>
              <ul>
                <li>Address</li>
                <li>Email</li>
                <li>Phone number</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;
