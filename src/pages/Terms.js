import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms">
      <section className="hero-terms">
        <div className="container">
          <div className="hero-terms-content">
            <div className="hero-terms-text bounce-in-left delay-1">
              <h1>Terms of Use</h1>
              <p className="hero-terms-subtitle bounce-in-up delay-2">
                Legal terms and conditions for using our services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-text bounce-in-up delay-1">
            <p><strong>Effective Date: 07/22/2025</strong></p>
            <p>
              Welcome to the reachlanguageandlearning.com website. Please read these Terms of Use carefully before using our website. By accessing or using this Site, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Site.
            </p>
            
            <h3>1. About</h3>
            <p>
              reachlanguageandlearning.com is a private speech-language pathology practice website providing information and services related to speech, language, and communication development. Content on this Site is for informational and educational purposes only and is not a substitute for individualized evaluation, diagnosis, or treatment from a licensed speech-language pathologist.
            </p>
            
            <h3>2. Use of the Site</h3>
            <p>
              You agree to use the Site for lawful purposes only and in a way that does not infringe on the rights of, restrict, or inhibit anyone else's use of the Site. Prohibited behavior includes:
            </p>
            <ul>
              <li>Misusing or interfering with the Site's normal operation</li>
              <li>Uploading malicious code, spam, or any content that may harm the Site or its users</li>
              <li>Attempting to access data or accounts without authorization</li>
            </ul>
            
            <h3>3. Medical Disclaimer</h3>
            <p>
              All information on this Site is provided for general knowledge and educational purposes. It does not constitute medical or therapeutic advice, nor does it create a provider–client relationship. For personalized recommendations, assessments, or therapy, please contact a licensed speech-language pathologist or schedule a consultation with Gaby McLish, SLP.
            </p>
            
            <h3>4. Intellectual Property</h3>
            <p>
              All content on this Site — including text, graphics, logos, videos, and downloadable materials — is the property of Reach Language and Learning LLC and is protected by copyright and other applicable laws. You may not copy, distribute, modify, or reproduce any part of the Site without our prior written permission, except as allowed for personal, non-commercial use.
            </p>
            
            <h3>5. Links to Other Sites</h3>
            <p>
              This Site may contain links to third-party websites for your convenience. Reach Language and Learning LLC is not responsible for the content or privacy practices of any external sites. Accessing third-party websites is done at your own risk.
            </p>
            
            <h3><Link to="/privacy" className="privacy-link">6. Privacy</Link></h3>
            <p>
              Please review our <Link to="/privacy" className="privacy-link">privacy policy</Link> to understand how we collect, use, and safeguard your information.
            </p>
            
            <h3>7. Changes to These Terms</h3>
            <p>
              We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site after any changes constitutes your acceptance of the updated Terms.
            </p>
            
            <h3>8. Contact Information</h3>
            <p>
              If you have questions about these Terms or the use of our Site, you may contact us at:
            </p>
            <p>
              <strong>Reach Language and Learning</strong><br/>
              202-725-5233<br/>
              gaby@reachlanguagelearning.com
            </p>
            
            <h2>Disclaimer</h2>
            <p>
              Content on this site is provided for informational and educational purposes only and is believed to be accurate; however, it may contain errors or omissions. The use of this website and any of its features or content is at your own risk.
            </p>
            <p>
              Reach Language and Learning LLC, including its practitioners and representatives, assumes no responsibility or liability for any loss, injury, or damage resulting directly or indirectly from the use of this site or the information contained within it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms; 