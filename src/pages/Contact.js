import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzvgrlg");

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
            {!state.succeeded ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                              <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
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
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="referralSource">How did you hear about us?</label>
                  <select
                    id="referralSource"
                    name="referralSource"
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
                    rows="5"
                    placeholder="Please describe any concerns or areas where you'd like support..."
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button type="submit" className="submit-button" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Request Free Consultation'}
                </button>
            </form>
            ) : (
              <div className="success-message">
                <h2>Thank you for your message!</h2>
                <p>We will get back to you within 24 hours.</p>
                <button 
                  className="submit-button" 
                  onClick={() => window.location.reload()}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;