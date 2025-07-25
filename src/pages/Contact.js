import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    referralSource: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-layout">
          {/* Left Side - Logo and Text */}
          <div className="contact-info">
            <div className="logo-section">
              <img src="/fullWithoutBackground.png" alt="Reach Language and Learning Logo" className="contact-logo" />
              <h1>We are here to help</h1>
            </div>
            <p className="contact-description">
              Ready to take the first step? We'd love to learn more about your learner's unique strengths and needs. Complete the form to request your free consultation, and we'll be in touch within 24 hours to discuss how we can support your goals.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span className="required">(required)</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="referralSource">How did you hear about us?</label>
                <select
                  id="referralSource"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend-family">Friend/Family Referral</option>
                  <option value="healthcare-provider">Healthcare Provider</option>
                  <option value="school">School/Teacher</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">(required)</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Please describe any concerns or areas where you'd like support..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;