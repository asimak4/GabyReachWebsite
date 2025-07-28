import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="hero-about">
        <div className="container">
          <div className="hero-about-content">
            <div className="hero-about-text bounce-in-left delay-1">
              <h1>About <span className="company-name">Reach Language and Learning</span></h1>
              <p className="hero-about-subtitle bounce-in-up delay-2">
              Reach Language and Learning was founded by Gaby McLish, C.C.C.-SLP. Based in Washington, D.C., Reach is a private speech-language therapy practice that offers specialized support to students across the DMV. At Reach we know that every child is different, which is why we take the time to truly understand their strengths, challenges, and goals. Our one-on-one sessions are thoughtful, engaging, and built to help each student grow academically, socially, and emotionally at their own pace.
              </p>
            </div>
            <div  className="bounce-in-right delay-3">
              <img style={{ height: '30vw'}} src="/fullWithoutBackground.png" alt="Reach Language and Learning Logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-card">
            <div className="feature-image bounce-in-left delay-1">
              <img src="/profilePic.jpg" alt="Gaby McLish, Speech-Language Pathologist" />
            </div>
            <div className="feature-content bounce-in-right delay-2">
              <h3>Meet Gaby McLish, M.S., CCC-SLP</h3>
              <h4 style={{color: 'var(--secondary-color)', fontStyle: 'italic', marginBottom: '1.5rem'}}>Founder and Speech-Language Pathologist</h4>
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
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="feature-card reverse">
            <div className="feature-content bounce-in-left delay-3">
              <h3>Professional Experience</h3>
              <p>
                During my time in Boston, I completed clinical work in the Cambridge Public Schools, providing speech and 
                language therapy in diverse, multilingual elementary classrooms. I also trained at Architects for Learning, 
                a specialized clinic in Needham, Massachusetts, where I supported students with challenges in writing, 
                organization, and executive functioning. These experiences shaped my expertise in literacy and learning and introduced me to the BrainFrames and Empower tools for writing and language organization. 

              </p>
              <p>
                After returning to Washington, D.C., I completed my Clinical Fellowship Year at a private practice focused 
                on reading intervention, supporting students with dyslexia and language-based learning differences. I later 
                joined another well-regarded practice in the D.C. area, providing individualized support in executive 
                functioning, reading and writing, and expressive/receptive language development for clients of all ages.
              </p>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="feature-card">
            <div className="feature-content bounce-in-right delay-4">
              <h3>Philosophy & Approach</h3>
              <p>
              My practice is rooted in evidence-based strategies, collaboration, and the idea that all students can thrive when given the right tools and attention. At Reach Language and Learning, I combine my neuroscience background, clinical training, and real-world experience to deliver services that are practical, personalized, and impactful.
              </p>
              <p>
                When I'm not working with clients, I enjoy exploring D.C.'s many neighborhoods and trying to find the best restaurants in D.C! I love to travel, spend time with my family, and I bring all of my experiences to my sessions to create meaningful connections with my clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content bounce-in-up delay-1">
            <div className="cta-text">
              <h2>Licensing and Certification</h2>
              <p>
                Gaby holds a Masters of Science from Boston University Sargent College of Health in Speech Language Pathology. 
                She is an ASHA certified speech language pathologist and received her Certificate of Clinical Competence.
              </p>
            </div>
            <div className="cta-certificate bounce-in-right delay-2">
              <img src="/certificate.png" alt="Gaby McLish Speech-Language Pathology Certificate" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;