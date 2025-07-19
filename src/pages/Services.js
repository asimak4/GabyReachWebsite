import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <section className="hero-section">
        <div className="container">
          <h1>Our Services</h1>
          <h2>Empowering learners through individualized, evidence-based support</h2>
          <div className="two-column">
            <div className="card">
              <p>
                At Reach Language and Learning, we are committed to providing high-quality, personalized speech and 
                language services for children, adolescents, and young adults in the DC metro area. Our practice is 
                rooted in the latest research and best practices in education, language development, and cognitive science.
              </p>
            </div>
            <div className="card">
              <p>
                We specialize in supporting individuals with speech-language challenges, reading and writing difficulties, 
                executive functioning needs, and language-based learning differences. Our services are designed to meet 
                each client where they are—whether building foundational skills in childhood or refining academic and 
                workplace communication in young adulthood.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="two-column">
            <div className="card service-card">
              <h2>Structured Literacy Intervention</h2>
              <h3>Rooted in the Science of Reading</h3>
              <p>
                Our structured literacy intervention is built upon the Science of Reading, emphasizing explicit, 
                systematic instruction in reading skills.
              </p>
              <ul>
                <li>Phonological awareness</li>
                <li>Phonics and decoding</li>
                <li>Fluency development</li>
                <li>Vocabulary building</li>
                <li>Reading comprehension</li>
              </ul>
              <p>
                Highly effective for learners with dyslexia and other reading-based learning differences.
              </p>
            </div>

            <div className="card service-card">
              <h2>Expressive Language Therapy</h2>
              <h3>Supporting Clear, Confident Communication</h3>
              <p>
                Helping individuals clearly express their thoughts, ideas, and emotions—verbally and in writing.
              </p>
              <ul>
                <li>Verbal expression and storytelling</li>
                <li>Grammar and sentence structure</li>
                <li>Vocabulary expansion</li>
                <li>Written expression and organization</li>
              </ul>
              <p>
                Individualized strategies for planning, drafting, and confidently sharing ideas in academic and personal writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid secondary">
        <div className="container">
          <div className="two-column">
            <div className="card service-card">
              <h2>Receptive Language Therapy</h2>
              <h3>Building Understanding and Processing Skills</h3>
              <p>
                Supporting clients who have difficulty processing verbal information, following directions, 
                or grasping academic language.
              </p>
              <ul>
                <li>Listening comprehension</li>
                <li>Following multi-step directions</li>
                <li>Vocabulary understanding</li>
                <li>Language processing skills</li>
              </ul>
              <p>
                Helping students navigate classroom language and succeed in auditory comprehension tasks.
              </p>
            </div>

            <div className="card service-card">
              <h2>Executive Functioning Support</h2>
              <h3>Strategies for Success in School and Life</h3>
              <p>
                Targeted support to help individuals build independence and self-management in academic 
                and everyday settings.
              </p>
              <ul>
                <li>Attention and focus strategies</li>
                <li>Working memory tools</li>
                <li>Planning and time management</li>
                <li>Task initiation and completion</li>
                <li>Self-monitoring skills</li>
              </ul>
              <p>
                Especially beneficial for students with ADHD and learning disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="age-groups">
        <div className="container">
          <h2>Multilevel Support Across Age Groups</h2>
          <h3>Continuity of Care from Early Childhood to Adulthood</h3>
          <div className="two-column">
            <div className="content-left">
              <div className="card age-group-card">
                <h4>School-Age Children (Ages 5–12)</h4>
                <p>Strengthening reading, writing, comprehension, and executive functioning skills for classroom success.</p>
              </div>
              <div className="card age-group-card">
                <h4>Adolescents (Ages 13+)</h4>
                <p>Support for complex academic tasks, organization, college readiness, and social communication.</p>
              </div>
            </div>
            <div className="content-right">
              <div className="card age-group-card">
                <h4>Young Adults</h4>
                <p>Enhancing communication, executive functioning, and written expression for college and career success.</p>
              </div>
              <div className="card age-group-card">
                <h4>Parent Coaching</h4>
                <p>Empowering families with tools and strategies to support growth at home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Started Today</h2>
          <p>
            If you're looking for personalized, expert support in speech, language, literacy, or executive functioning, 
            we're here to help. Contact Reach Language and Learning to schedule a consultation and take the first step 
            toward growth and success.
          </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Services;