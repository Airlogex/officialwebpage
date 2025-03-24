
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Get in Touch</h4>
          <p>Email: info@airlogex.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Logistics Ave, Shipping City, SC 12345</p>
        </div>
        <div className="col-md-6">
          <h4>Business Hours</h4>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
