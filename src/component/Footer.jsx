import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a192f] text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="footer-section">
          <h3 className="text-2xl font-bold mb-4  text-white" id="footerBrand">AirLogex</h3>
          <p className="text-gray-400" id="footerDescription ">
            Your trusted partner in global logistics and courier services. Delivering excellence worldwide since 2008.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4  text-white" id="quickLinksTitle">Quick Links</h3>
          <ul>
            <li><Link to="/" className="text-gray-400 hover:text-red-600 transition duration-300" id="linkHome">Home</Link></li>
            <li><Link to="/track" className="text-gray-400 hover:text-red-600 transition duration-300" id="linkTrack">Track Shipment</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-red-600 transition duration-300" id="linkContact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4  text-white" id="servicesTitle">Services</h3>
          <ul>
            <li className="text-gray-400 hover:text-red-600 transition duration-300" id="serviceAirFreight">Air Freight</li>
            <li className="text-gray-400 hover:text-red-600 transition duration-300" id="serviceGround">Ground Shipping</li>
            <li className="text-gray-400 hover:text-red-600 transition duration-300" id="serviceExpress">Express Delivery</li>
            <li className="text-gray-400 hover:text-red-600 transition duration-300" id="serviceWarehouse">Warehousing</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-xl text-white font-semibold mb-4" id="contactTitle">Contact Info</h3>
          <ul>
            <li className="text-gray-400" id="contactEmail">Email: info@airlogex.com</li>
            <li className="text-gray-400" id="contactPhone">Phone: +1 (555) 123-4567</li>
            <li className="text-gray-400" id="contactAddress">Address: 123 Logistics Ave, NY 10001</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-400 text-sm" id="footerCopyright">
          &copy; 2023 AirLogex. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
