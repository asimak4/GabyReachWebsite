import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="logo-space">
                {/* Logo placeholder - replace with actual logo */}
                <img 
                  src="https://via.placeholder.com/150x80/84A7BA/ffffff?text=LOGO" 
                  alt="Reach Language and Learning Logo"
                  className="hero-logo"
                />
              </div>
              <h1>Language Literacy and Executive Functioning</h1>
              <p className="hero-subtitle">
                At Reach Language and Learning, we're all about helping kids, teens and young adults thrive.
              </p>
              <p className="hero-description">
                Reach offers personalized speech and language services specializing in language, literacy, 
                and executive functioning. Our evidence-based approach builds on your child's strengths to 
                support lasting growth.
              </p>
            </div>
            <div className="hero-image">
              <img 
                src="https://via.placeholder.com/500x400/6F90AF/ffffff?text=Happy+Kids+Learning" 
                alt="Children learning and growing"
                className="hero-main-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do-and-how-we-help">
        <div className="container">
          <div className="two-section-layout">
            <div className="section-column">
              <h2>What we do</h2>
              <div className="card content-main">
                <div className="card-image">
                  <img 
                    src="https://via.placeholder.com/400x250/84A7BA/ffffff?text=Communication+Skills" 
                    alt="Child working on communication skills"
                    className="section-image"
                  />
                </div>
                <p>
                  At Reach Language and Learning, we support our clients with the skills they need to communicate clearly, 
                  stay organized, and succeed in school. Whether your child is struggling to keep up with reading and writing, 
                  express themselves, follow directions or stay on task, we're here to help. Reach builds on your child's 
                  strengths to improve language, literacy, and executive functioning in ways that feel practical, engaging, 
                  and doable—for both kids and families.
                </p>
                <a href="/services" className="learn-more-link">learn more about our services</a>
              </div>
            </div>

            <div className="section-column">
              <h2>How we help</h2>
              <div className="card content-main">
                <div className="card-image">
                  <img 
                    src="https://via.placeholder.com/400x250/ffffff/303655?text=One+on+One+Sessions" 
                    alt="One-on-one personalized sessions"
                    className="section-image"
                  />
                </div>
                <p>
                  Every session is one-on-one and tailored to your child's unique needs. We provide a thorough review of 
                  necessary documentation and parent and child interviews to understand how we can best support your child. 
                  We draw on the Science of Reading, a deep understanding of language development, and the critical connection 
                  between language and executive functioning. Our sessions are then structured to be supportive, and engaging 
                  and are designed to build real-world skills that carry over into everyday life and the classroom. Whether 
                  we're working on comprehension, writing, organization, or flexible thinking, our goal is to meet your child 
                  where they are and help them move forward with confidence.
                </p>
                <a href="/process" className="learn-more-link">Learn more about process</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Let's make a plan!</h2>
              <p>
                Start with a free 15-minute consultation to see how we can help. If we're a good fit, we'll dive into 
                a comprehensive consultation to create a plan that's thoughtful, goal-oriented, and just right for your child.
              </p>
              <a href="/contact" className="cta-button">Click Here</a>
            </div>
            <div className="cta-image">
              <img 
                src="https://via.placeholder.com/400x300/ffffff/303655?text=Happy+Family+Success" 
                alt="Successful family consultation"
                className="cta-main-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;