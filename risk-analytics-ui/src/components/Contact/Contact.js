import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Have questions? We'd love to hear from you!</p>
        
        <div className="contact-info">
          <div className="contact-card">
            <span className="contact-icon">📧</span>
            <h3>Email</h3>
            <p>support@riskanalytics.com</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📞</span>
            <h3>Phone</h3>
            <p>+91 (022) 1234-5678</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <h3>Address</h3>
            <p>Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;