import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="hero-section">
        <div className="container">
          <h1>About Reach Language and Learning</h1>
          <p>
            Reach Language and Learning was founded by Gaby McLish, C.C.C.-SLP, out of a deep passion for helping 
            kids and teens feel confident, capable, and understood. Based in Washington, D.C., Reach is a private 
            speech-language therapy practice that offers personalized support to students across the DMV.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="two-column">
            <div className="card content-left">
              <p>
                We know that every child is different, which is why we take the time to truly understand their strengths, 
                challenges, and goals. Our one-on-one sessions are thoughtful, engaging, and built to help each student 
                grow academically, socially, and emotionally at their own pace.
              </p>
            </div>
            <div className="content-right">
              <div className="card highlight-box">
                <h3>Our Mission</h3>
                <p>
                  Empowering students through personalized, evidence-based speech and language therapy that builds 
                  confidence and unlocks potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder">
        <div className="container">
          <h2>About the Founder</h2>
          <div className="sidebar-layout">
            <div className="founder-sidebar">
              <div className="card founder-card">
                <h3>Gaby McLish, M.S., CCC-SLP</h3>
                <h4>Founder and Speech-Language Pathologist</h4>
                <div className="credentials-summary">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>M.S. Speech-Language Pathology, Boston University</li>
                    <li>B.S. Neuroscience, Lafayette College</li>
                    <li>ASHA Certified (CCC-SLP)</li>
                    <li>Washington, D.C. Native</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="founder-content">
              <div className="card">
                <p>
                  I'm a speech language pathologist passionate about helping school-age students unlock their full potential 
                  through strong language, literacy, and executive functioning skills. I'm a native of Washington, D.C. and 
                  have deep local knowledge, clinical expertise, and an enthusiastic, individualized approach to the families 
                  and students I serve.
                </p>

                <p>
                  I earned my Bachelor's degree in Neuroscience from Lafayette College, where I developed a deep curiosity 
                  about the brain and how we learn, communicate, and process information. I went on to earn my Master's degree 
                  in Speech-Language Pathology from Boston University's Sargent College, where I had the unique opportunity to 
                  focus my clinical experience on reading, writing, language and executive functioning.
                </p>

                <p>
                  During my time in Boston, I completed clinical work in the Cambridge Public Schools, providing speech and 
                  language therapy in diverse, multilingual elementary classrooms. I also trained at Architects for Learning, 
                  a specialized clinic in Needham, Massachusetts, where I supported students with challenges in writing, 
                  organization, and executive functioning.
                </p>

                <p>
                  After returning to Washington, D.C., I completed my Clinical Fellowship Year at a private practice focused 
                  on reading intervention, supporting students with dyslexia and language-based learning differences. I later 
                  joined another well-regarded practice in the D.C. area, providing individualized support in executive 
                  functioning, reading and writing, and expressive/receptive language development for clients of all ages.
                </p>

                <p>
                  My practice's philosophy is rooted in evidence-based strategies, collaborative relationships, and the belief 
                  that all individuals can succeed when given the right tools and support. At Reach Language and Learning, I 
                  combine my neuroscience background, clinical training, and real-world experience to deliver services that 
                  are practical, personalized, and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <h2>Our Philosophy</h2>
          <div className="three-column">
            <div className="card philosophy-card">
              <h3>Evidence-Based</h3>
              <p>Grounded in the latest research and best practices in language development and education</p>
            </div>
            <div className="card philosophy-card">
              <h3>Collaborative</h3>
              <p>Working closely with families to ensure strategies carry over into daily life</p>
            </div>
            <div className="card philosophy-card">
              <h3>Strengths-Based</h3>
              <p>Building on each child's unique strengths to support lasting growth and confidence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>
            Let's work together to help your child reach their full potential. Contact us today to schedule 
            your free 15-minute consultation and learn how we can support your family.
          </p>
          <a href="/contact" className="cta-button">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default About;