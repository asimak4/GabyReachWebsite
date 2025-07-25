import React from 'react';
import './OurProcess.css';

const OurProcess = () => {
  return (
    <div className="our-process">
      <section 
        className="hero"
        style={{
          backgroundImage: `url(/stackedBooks.jpg)`
        }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="bounce-in-left delay-1">Our Process</h1>
            <h2 className="hero-main-text bounce-in-right delay-2">
              A thoughtful, personalized approach to support your child's growth
            </h2>
            <div className="hero-intro bounce-in-up delay-3">
              <p>
                At Reach Language and Learning, we believe that every child deserves individualized support that meets them where they are. Our comprehensive process ensures that we understand your child's unique strengths and needs, creating a foundation for meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title bounce-in-down delay-1">Getting Started:</h2>
          
          <div className="feature-card">
            <div className="feature-image bounce-in-left delay-1">
              <img src="/writingInNotebook.jpg" alt="Initial consultation" />
            </div>
            <div className="feature-content bounce-in-right delay-2">
              <div className="step-number">1</div>
              <h3>Free 15-Minute Consultation</h3>
              <p>
                Set up a free 15 minute call via phone, email, or our website to ask any questions and get to know 
                more about how our services can support your child.
              </p>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="feature-card reverse">
            <div className="feature-image bounce-in-right delay-3">
              <img src="/littleGirlWriting.jpg" alt="Comprehensive consultation" />
            </div>
            <div className="feature-content bounce-in-left delay-4">
              <div className="step-number">2</div>
              <h3>Comprehensive Virtual Consultation</h3>
              <p>
                We will find a time for a comprehensive virtual consultation. Prior to the consultation we ask that 
                you send over any formal evaluations, assessments, and fill out our intake form. The SLP will provide 
                an extensive review of all pertinent documentation before the consult and with a virtual consultation 
                with the family identify your child's strengths and areas of need.
              </p>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="feature-card">
            <div className="feature-image bounce-in-left delay-1">
              <img src="/writingInNotebook.jpg" alt="Individualized care plan" />
            </div>
            <div className="feature-content bounce-in-right delay-2">
              <div className="step-number">3</div>
              <h3>Individualized Care Plan</h3>
              <p>
                After the consultation the speech language pathologist will provide an individualized care plan that 
                outlines your child's needs and the goals of the sessions.
              </p>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="feature-card reverse">
            <div className="feature-image bounce-in-right delay-3">
              <img src="/littleGirlWriting.jpg" alt="Service delivery" />
            </div>
            <div className="feature-content bounce-in-left delay-4">
              <div className="step-number">4</div>
              <h3>Service Delivery Setup</h3>
              <p>
                We will determine the best fit of services either in-person or virtually and set up sessions that 
                align with your scheduling needs.
              </p>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="feature-card">
            <div className="feature-image bounce-in-left delay-1">
              <img src="/writingInNotebook.jpg" alt="Parent coaching sessions" />
            </div>
            <div className="feature-content bounce-in-right delay-2">
              <div className="step-number">5</div>
              <h3>Parent Coaching Sessions</h3>
              <p>
                Reach offers 3, 30-minute weekly, parent sessions at the beginning of services to make sure there 
                is continuity of care and support at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content-home bounce-in-up delay-1">
            <h2>Continuing Success</h2>
            <p>
              We use the latest clinical approaches based in the Science of Reading and the most up to date research 
              in the fields of cognition and language. Reach has a deep understanding of the current education environment, 
              particularly in the DMV area and will tailor your child's sessions to fit their academic needs.
            </p>
            <a href="/contact" className="btn-cta">Start Your Journey</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;