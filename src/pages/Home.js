import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero hero-section">
        <div className="container">
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
      </section>

      <section className="what-we-do">
        <div className="container">
          <h2>What we do</h2>
          <div className="two-column">
            <div className="card content-left">
              <p>
                At Reach Language and Learning, we support our clients with the skills they need to communicate clearly, 
                stay organized, and succeed in school. Whether your child is struggling to keep up with reading and writing, 
                express themselves, follow directions or stay on task, we're here to help.
              </p>
            </div>
            <div className="card content-right">
              <p>
                Reach builds on your child's strengths to improve language, literacy, and executive functioning in ways 
                that feel practical, engaging, and doable—for both kids and families.
              </p>
              <a href="/services" className="learn-more-link">Learn more about our services</a>
            </div>
          </div>
        </div>
      </section>

      <section className="how-we-help">
        <div className="container">
          <h2>How we help</h2>
          <div className="two-column">
            <div className="card content-left">
              <p>
                Every session is one-on-one and tailored to your child's unique needs. We provide a thorough review of 
                necessary documentation and parent and child interviews to understand how we can best support your child.
              </p>
            </div>
            <div className="card content-right">
              <p>
                We draw on the Science of Reading, a deep understanding of language development, and the critical connection 
                between language and executive functioning. Our sessions are structured to be supportive and engaging, 
                designed to build real-world skills that carry over into everyday life and the classroom.
              </p>
              <a href="/process" className="learn-more-link">Learn more about our process</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Our Approach</h2>
          <div className="three-column">
            <div className="feature-card card card-secondary">
              <h3>Personalized</h3>
              <p>One-on-one sessions tailored to your child's unique strengths and needs</p>
            </div>
            <div className="feature-card card card-secondary">
              <h3>Evidence-Based</h3>
              <p>Grounded in the Science of Reading and latest research in language development</p>
            </div>
            <div className="feature-card card card-secondary">
              <h3>Practical</h3>
              <p>Skills that transfer to real-world situations and classroom success</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta cta-section">
        <div className="container">
          <h2>Let's make a plan!</h2>
          <p>
            Start with a free 15-minute consultation to see how we can help. If we're a good fit, we'll dive into 
            a comprehensive consultation to create a plan that's thoughtful, goal-oriented, and just right for your child.
          </p>
          <a href="/contact" className="cta-button">Click Here</a>
        </div>
      </section>
    </div>
  );
};

export default Home;