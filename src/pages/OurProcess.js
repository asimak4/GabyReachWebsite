import React from 'react';
import './OurProcess.css';

const OurProcess = () => {
  return (
    <div className="our-process">
      <section className="hero-section">
        <div className="container">
          <h1>Our Process</h1>
        </div>
      </section>

      <section className="getting-started">
        <div className="container">
          <h2>Getting Started:</h2>
          
          <div className="process-steps">
            <div className="card process-step">
              <div className="step-content">
                <p>
                  Set up a free 15 minute call via phone email or our website to ask any questions and get to know 
                  more about how our services can support your child.
                </p>
              </div>
            </div>

            <div className="card process-step">
              <div className="step-content">
                <p>
                  We will find a time for a comprehensive virtual consultation. Prior to the consultation we ask that 
                  you send over any formal evaluations, assessments, and fill out our intake form. The SLP will provide 
                  an extensive review of all pertinent documentation before the consult and with a virtual consultation 
                  with the family identify your child's strengths and areas of need.
                </p>
              </div>
            </div>

            <div className="card process-step">
              <div className="step-content">
                <p>
                  After the consultation the speech language pathologist will provide an individualized care plan that 
                  outlines your child's needs and the goals of the sessions.
                </p>
              </div>
            </div>

            <div className="card process-step">
              <div className="step-content">
                <p>
                  We will determine the best fit of services either in-person or virtually and set up sessions that 
                  align with your scheduling needs
                </p>
              </div>
            </div>

            <div className="card process-step">
              <div className="step-content">
                <p>
                  Reach offers 3, 30-minute weekly, parent sessions at the beginning of services to make sure there 
                  is continuity of care,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="continuing-success">
        <div className="container">
          <h2>Continuing success:</h2>
          <div className="card">
            <p>
              We use the latest clinical approaches based in the Science of Reading and the most up to date research 
              in the fields of cognition and language. Reach has a deep understanding of the current education environment, 
              particularly in the DMV area and will tailor your child's sessions to fit their academic needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;