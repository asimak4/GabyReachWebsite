import React from 'react';
import './OurProcess.css';

const OurProcess = () => {
  return (
    <div className="our-process">
      {/* Header Section */}
      <header className="process-header">
        <div className="container">
          <div className="header-layout">
            <div className="header-content">
              <div className="title-with-logo">
                <h1 className="page-title">Our Process</h1>
                <img src="/fullWithoutBackground.png" alt="Reach Language and Learning Logo" className="title-logo" />
              </div>
              <p className="page-subtitle">
                A thoughtful, personalized approach to support your child's growth
              </p>
              <div className="intro-text">
                <p>
                  At Reach Language and Learning, we believe that every child deserves individualized support that meets them where they are. Our comprehensive process ensures that we understand your child's unique strengths and needs, creating a foundation for meaningful progress.
                </p>
              </div>
            </div>
            <div className="header-image-section">
              <img src="/library.jpg" alt="Stacked Books" className="header-image" />
            </div>
          </div>
        </div>
      </header>

      {/* Process Steps */}
      <section className="process-steps">
        <div className="container">
          <div className="process-intro-section">
            <div className="sub-header-card">
              <div className="sub-header-content">
                <img src="/clipboard.png" alt="Checklist" className="sub-header-image" />
                <p>
                  Our streamlined process is designed to quickly understand your child's needs and begin meaningful support as efficiently as possible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="process-steps-grid">
            {/* Step 1 */}
            <div className="process-step">
              <div className="step-number-badge">1</div>
              <div className="process-step-content">
                <div className="process-step-header">
                  <div className="step-header-text">
                    <h3>Free 15-Minute Consultation</h3>
                    <span className="step-badge consultation-badge">Quick & Easy</span>
                  </div>
                </div>
                <p>
                  Set up a free 15 minute call via phone, email, or our website to ask any questions and get to know 
                  more about how our services can support your child.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="process-step">
              <div className="step-number-badge">2</div>
              <div className="process-step-content">
                <div className="process-step-header">
                  <div className="step-header-text">
                    <h3>Comprehensive Virtual Consultation</h3>
                    <span className="step-badge assessment-badge">Thorough Assessment</span>
                  </div>
                </div>
                <p>
                  We will find a time for a comprehensive virtual consultation. Prior to the consultation we ask that 
                  you send over any formal evaluations, assessments, and fill out our intake form. The SLP will provide 
                  an extensive review of all pertinent documentation before the consult and with a virtual consultation 
                  with the family identify your child's strengths and areas of need.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process-step">
              <div className="step-number-badge">3</div>
              <div className="process-step-content">
                <div className="process-step-header">
                  <div className="step-header-text">
                    <h3>Individualized Care Plan</h3>
                    <span className="step-badge plan-badge">Customized Approach</span>
                  </div>
                </div>
                <p>
                  After the consultation the speech language pathologist will provide an individualized care plan that 
                  outlines your child's needs and the goals of the sessions.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="process-step">
              <div className="step-number-badge">4</div>
              <div className="process-step-content">
                <div className="process-step-header">
                  <div className="step-header-text">
                    <h3>Service Delivery Setup</h3>
                    <span className="step-badge delivery-badge">Flexible Options</span>
                  </div>
                </div>
                <p>
                  We will determine the best fit of services either in-person or virtually and set up sessions that 
                  align with your scheduling needs.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="process-step">
              <div className="step-number-badge">5</div>
              <div className="process-step-content">
                <div className="process-step-header">
                  <div className="step-header-text">
                    <h3>Parent Coaching Sessions</h3>
                    <span className="step-badge coaching-badge">Family Support</span>
                  </div>
                </div>
                <p>
                  Reach offers 3, 30-minute weekly, parent sessions at the beginning of services to make sure there 
                  is continuity of care and support at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-process">
        <div className="container">
          <div className="cta-content-process">
            <h2>Continuing Success</h2>
            <p>
              We use the latest clinical approaches based in the Science of Reading and the most up to date research 
              in the fields of cognition and language. Reach has a deep understanding of the current education environment, 
              particularly in the DMV area and will tailor your child's sessions to fit their academic needs.
            </p>
            <a href="/contact" className="cta-button">Start Your Journey</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;