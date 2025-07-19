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
            speech-language therapy practice that offers personalized support to students across the DMV. We know 
            that every child is different, which is why we take the time to truly understand their strengths, 
            challenges, and goals. Our one-on-one sessions are thoughtful, engaging, and built to help each student 
            grow academically, socially, and emotionally at their own pace.
          </p>
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
                  organization, and executive functioning. These experiences shaped my expertise in literacy and learning, and 
                  reinforced my commitment to engaging, strengths-based intervention.
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

                <p>
                  When I'm not working with clients, I enjoys exploring D.C.'s many neighborhoods, and trying to find the best — in D.C! My current favorite is —- but I am always looking for suggestions and new opinions! I love to travel, spend time with my family and g — and I bring all of my experiences to my sessions to allow for
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="licensing">
        <div className="container">
          <h2>Licensing and certification</h2>
          <div className="card">
            <p>
              Gaby holds a Masters of Science from Boston University Sargent College of Health in Speech Language Pathology. 
              She is an ASHA certified speech language pathologist and received her Certificate of Clinical Competence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;