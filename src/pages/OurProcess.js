import React from 'react';
import './OurProcess.css';

const OurProcess = () => {
  return (
    <div className="our-process">
      <section className="hero-section">
        <div className="container">
          <h1>Our Process</h1>
          <p>A thoughtful, step-by-step approach to supporting your child's growth</p>
        </div>
      </section>

      <section className="getting-started">
        <div className="container">
          <h2>Getting Started:</h2>
          
          <div className="process-steps">
            <div className="card process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Free Consultation</h3>
                <p>
                  Set up a free 15 minute call via phone, email or our website to ask any questions and get to know 
                  more about how our services can support your child.
                </p>
              </div>
            </div>

            <div className="card process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Comprehensive Evaluation</h3>
                <p>
                  We will find a time for a comprehensive virtual consultation. Prior to the consultation we ask that 
                  you send over any formal evaluations, assessments, and fill out our intake form. The SLP will provide 
                  an extensive review of all pertinent documentation before the consult.
                </p>
              </div>
            </div>

            <div className="card process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Personalized Care Plan</h3>
                <p>
                  After the consultation the speech language pathologist will provide an individualized care plan that 
                  outlines your child's needs and the goals of the sessions.
                </p>
              </div>
            </div>

            <div className="card process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Session Setup</h3>
                <p>
                  We will determine the best fit of services either in-person or virtually and set up sessions that 
                  align with your scheduling needs.
                </p>
              </div>
            </div>

            <div className="card process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Family Support</h3>
                <p>
                  Reach offers 3, 30-minute weekly, parent sessions at the beginning of services to make sure there 
                  is continuity of care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="continuing-success">
        <div className="container">
          <h2>Continuing Success</h2>
          <div className="two-column">
            <div className="card">
              <h3>Latest Clinical Approaches</h3>
              <p>
                We use the latest clinical approaches based in the Science of Reading and the most up to date research 
                in the fields of cognition and language.
              </p>
            </div>
            <div className="card">
              <h3>Local Education Understanding</h3>
              <p>
                Reach has a deep understanding of the current education environment, particularly in the DMV area and 
                will tailor your child's sessions to fit their academic needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-benefits">
        <div className="container">
          <h2>What You Can Expect</h2>
          <div className="three-column">
            <div className="card benefit-card">
              <h3>Individualized Approach</h3>
              <p>Every session is tailored to your child's unique needs and learning style</p>
            </div>
            <div className="card benefit-card">
              <h3>Evidence-Based Methods</h3>
              <p>Grounded in the latest research and proven therapeutic techniques</p>
            </div>
            <div className="card benefit-card">
              <h3>Family Partnership</h3>
              <p>Collaborative approach ensuring strategies carry over into daily life</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Contact us today to begin your child's journey to success with our comprehensive, personalized approach.</p>
          <a href="/contact" className="cta-button">Schedule Your Free Consultation</a>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;