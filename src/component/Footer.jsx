
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AirLogex</h3>
          <p>Your trusted partner in global logistics and courier services. Delivering excellence worldwide since 2008.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/track">Track Shipment</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Air Freight</li>
            <li>Ground Shipping</li>
            <li>Express Delivery</li>
            <li>Warehousing</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>Email: info@airlogex.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Logistics Ave, NY 10001</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 AirLogex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
