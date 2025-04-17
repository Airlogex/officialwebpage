import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 id="contactTitle">Contact Us</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <h4 id="getInTouch">Get in Touch</h4>
          <p id="contactEmail">Email: info@airlogex.com</p>
          <p id="contactPhone">Phone: +1 (555) 123-4567</p>
          <p id="contactAddress">Address: 123 Logistics Ave, Shipping City, SC 12345</p>
        </div>
        <div className="col-md-6">
          <h4 id="businessHours">Business Hours</h4>
          <p id="hoursWeekdays">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p id="hoursSaturday">Saturday: 10:00 AM - 4:00 PM</p>
          <p id="hoursSunday">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
