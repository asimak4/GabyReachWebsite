import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section 
        className="hero"
        style={{
          backgroundImage: `url(/stackedBooks.jpg)`,
        }}
      >
        <div className="hero-content">
          <div className="hero-logo roll-in-right">
            <img src="/fullWithoutBackground.png" alt="Reach Language and Learning Logo" />
          </div>
          <div className="hero-text">
            <h1 className="bounce-in-left delay-1">Language, Literacy, and Executive Functioning</h1>
            <h2 className="hero-main-text bounce-in-right delay-2">
              At <i>Reach Language and Learning</i>, were all about helping kids, teens, and young adults thrive.
            </h2>
            <p className="hero-subtitle bounce-in-up delay-3">
              Reach offers personalized speech and language services specializing in language, literacy, and executive functioning. Our evidence-based approach builds on your child's strengths to support lasting growth.
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-card">
          <div className="feature-image bounce-in-left delay-1">
              <img src="/writingInNotebook.jpg" alt="Student writing in notebook" />
            </div>
            <div className="feature-content bounce-in-right delay-2">
              <h3>What we do:</h3>
              <p>
                At Reach Language and Learning, we support our clients with the skills they need to communicate clearly, stay organized, and succeed in school. Whether your child is struggling to keep up with reading and writing, express themselves, follow directions or stay on task, we’re here to help. Reach builds on your child’s strengths to improve language, literacy, and executive functioning in ways that feel practical, engaging, and doable for both kids and families. <a href="/services" className="feature-link">(Learn more about our services)</a>
              </p>
            </div>

          </div>
          
          <div className="section-divider"></div>
          
          <div className="feature-card reverse">
            <div className="feature-image bounce-in-right delay-3">
              <img src="/littleGirlWriting.jpg" alt="Learning with technology" />
            </div>
            <div className="feature-content bounce-in-left delay-4">
              <h3>How we help:</h3>
              <p>
                Every session is one-on-one and tailored to your child’s unique needs. We provide a thorough review of necessary documentation and parent and child interviews to understand how we can best support your child. We draw on the Science of Reading, a deep understanding of language development, and the direct connection between language and executive functioning. Reach’s sessions are structured to be supportive, engaging and build on real-world skills that carry over into everyday life and the classroom. Whether we’re working on comprehension, writing, organization, or flexible thinking, our goal is to meet your child where they are and give them the confidence to succeed. <a href="/process" className="feature-link">(Learn more about our process)</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="age-groups">
        <div className="container">
          <div className="age-groups-header bounce-in-down delay-1">
            <div>
              <h2>Multilevel Support Across Age Groups</h2>
              <p>Continuity of Care from Early Childhood to Adulthood</p>
            </div>
          </div>

          <div className="age-groups-intro bounce-in-up delay-1">
            <p>
            At Reach Language and Learning, we recognize that communication, learning, and executive functioning needs evolve. We offer flexible, developmentally appropriate support for every stage of life.
            </p>
          </div>

          <div className="age-group-cards">
            <div className="age-group-card bounce-in-left delay-1">
              <h4>School-Age Children (Ages 5–12):</h4>
              <p>We help children strengthen reading, writing, comprehension, expressive/receptive language, and executive functioning skills needed for classroom success. </p>
            </div>

            <div className="age-group-card bounce-in-right delay-1">
              <h4>Adolescents (Ages 13+):</h4>
              <p>We provide support for complex academic tasks, organization, college readiness, self-advocacy, and communication for social and professional settings.</p>
            </div>

            <div className="age-group-card bounce-in-left delay-2">
              <h4>Young Adults:</h4>
              <p>We work with college students to enhance communication, executive functioning, and written expression.</p>
            </div>

            <div className="age-group-card bounce-in-right delay-2">
              <h4>Parent Coaching:</h4>
              <p>We partner with families to ensure carryover of strategies at home, empower caregivers with tools for daily routines, and build strong communication environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content-home bounce-in-up delay-1">
            <h2>Let's make a plan!</h2>
            <p>
              Start with a free 15-minute consultation to see how we can help. If we're a good fit, we'll dive into a comprehensive consultation to create a plan that's thoughtful, goal-oriented, and just right for your child.
            </p>
            <a href="/contact" className="btn-cta">Click Here</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;