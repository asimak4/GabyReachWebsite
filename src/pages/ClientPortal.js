import React from 'react';
import './ClientPortal.css';

const ClientPortal = () => {
  return (
    <div className="client-portal">
      <div className="container">
        <div className="portal-header">
          <div className="portal-logo">
            <img src="/fullWithoutBackground.png" alt="Reach Language and Learning Logo" />
          </div>
          <h1>Client Portal</h1>
          <div className="divider"></div>
        </div>

        <div className="portal-content">
          <div className="portal-section">
            <div className="portal-card">
              <h2>Access Your Portal</h2>
              <p>
                Access your secure client portal to manage appointments, view documents, and communicate with us.
              </p>
              <a 
                href="https://portal.therapyappointment.com/index.cfm/public:auth?fw1pk=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="portal-btn"
              >
                Go to Client Portal
              </a>
            </div>
          </div>

          <div className="portal-info">
            <p>
              If you have trouble accessing the portal or have not yet set up an account, please click this link for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal; 