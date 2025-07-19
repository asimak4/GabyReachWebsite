import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <section className="hero-section">
        <div className="container">
          <h1>Our Services</h1>
          <h2>Empowering learners through individualized, evidence-based support</h2>
          <div className="intro-content">
            <div className="card">
              <p>
                At Reach Language and Learning, we are committed to providing high-quality, personalized speech and 
                language services for children, adolescents, and young adults in the DC metro area. Our practice is 
                rooted in the latest research and best practices in education, language development, and cognitive science. 
                We specialize in supporting individuals with speech-language challenges, reading and writing difficulties, 
                executive functioning needs, and language-based learning differences.
              </p>
              <p>
                Our services are designed to meet each client where they are—whether building foundational skills in 
                childhood or refining academic and workplace communication in young adulthood.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="services-grid-layout">
            <div className="card service-card">
              <h2>Structured Literacy Intervention</h2>
              <h3>Rooted in the Science of Reading</h3>
              <p>
                At Reach Language and Learning, our structured literacy intervention is built upon the Science of Reading, 
                a research-based framework that emphasizes explicit, systematic instruction in reading skills. We help 
                students develop the core components of literacy, including:
              </p>
              <ul>
                <li>Phonological awareness (e.g., identifying and manipulating sounds in words)</li>
                <li>Phonics and decoding (understanding the relationship between letters and sounds)</li>
                <li>Fluency (reading with accuracy, speed, and expression)</li>
                <li>Vocabulary development</li>
                <li>Reading comprehension</li>
              </ul>
              <p>
                Our approach is highly effective for learners with dyslexia, as well as those with other reading-based 
                learning differences. Through individualized assessment and instruction, we help students become confident, 
                competent readers who can engage meaningfully with academic and real-world texts.
              </p>
            </div>

            <div className="card service-card">
              <h2>Expressive Language Therapy</h2>
              <h3>Supporting Clear, Confident Communication</h3>
              <p>
                Expressive language therapy at Reach focuses on helping individuals clearly express their thoughts, ideas, 
                and emotions—verbally and in writing. We work with clients across developmental levels to build the language 
                skills necessary for academic success and social connection.
              </p>
              <p>Key areas of support include:</p>
              <ul>
                <li>Verbal expression: building sentence complexity, storytelling, and oral presentation skills</li>
                <li>Grammar and sentence structure: forming accurate, age-appropriate sentences</li>
                <li>Vocabulary building: expanding word knowledge and use across contexts</li>
                <li>Written expression: organizing ideas, constructing paragraphs, and increasing written output</li>
              </ul>
              <p>
                For students who struggle with organizing their thoughts or producing written work, we offer individualized 
                strategies to help them plan, draft, revise, and confidently share their ideas in academic and personal writing.
              </p>
            </div>

            <div className="card service-card">
              <h2>Receptive Language Therapy</h2>
              <h3>Building Understanding and Processing Skills</h3>
              <p>
                Receptive language—the ability to understand and interpret spoken language—is fundamental to learning. 
                Our therapists work closely with clients who have difficulty processing verbal information, following 
                directions, or grasping academic language.
              </p>
              <p>Our services target:</p>
              <ul>
                <li>Listening comprehension: understanding spoken language in conversation and instruction</li>
                <li>Following directions: interpreting and acting on both simple and multi-step instructions</li>
                <li>Vocabulary understanding: learning the meaning of new words and using context clues</li>
                <li>Language processing: strengthening cognitive and linguistic pathways for quicker understanding</li>
              </ul>
              <p>
                We also support students in navigating classroom language, helping them succeed in environments that 
                require strong auditory comprehension and academic vocabulary.
              </p>
            </div>

            <div className="card service-card">
              <h2>Executive Functioning Support</h2>
              <h3>Strategies for Success in School and Life</h3>
              <p>
                Executive functioning refers to the set of mental skills that enable us to manage time, stay organized, 
                and follow through with tasks. At Reach, we provide targeted support to help individuals build independence 
                and self-management in academic and everyday settings.
              </p>
              <p>Our executive functioning services include:</p>
              <ul>
                <li>Attention and focus: strategies to sustain mental effort and reduce distractions</li>
                <li>Working memory: tools to hold and manipulate information for learning tasks</li>
                <li>Planning and time management: breaking down assignments, using schedules and checklists</li>
                <li>Task initiation and completion: overcoming procrastination and following through</li>
                <li>Self-monitoring: recognizing errors, adjusting behavior, and tracking progress</li>
              </ul>
              <p>
                These services are especially beneficial for students with ADHD, learning disabilities, and language-based 
                executive functioning challenges, and are often integrated with academic or language therapy for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="age-groups">
        <div className="container">
          <h2>Multilevel Support Across Age Groups</h2>
          <h3>Continuity of Care from Early Childhood to Adulthood</h3>
          <p>
            At Reach Language and Learning, we recognize that communication, learning, and executive functioning needs 
            evolve across the lifespan. We offer flexible, developmentally appropriate support for every stage:
          </p>
          <div className="age-group-list">
            <div className="card age-group-card">
              <h4>School-Age Children (Ages 5–12):</h4>
              <p>Our team helps children strengthen reading, writing, comprehension, expressive/receptive language, and executive functioning skills needed for classroom success.</p>
            </div>
            <div className="card age-group-card">
              <h4>Adolescents (Ages 13+):</h4>
              <p>We provide support for complex academic tasks, organization, college readiness, self-advocacy, and communication for social and professional settings.</p>
            </div>
            <div className="card age-group-card">
              <h4>Young Adults:</h4>
              <p>We work with college students to enhance communication, executive functioning, and written expression.</p>
            </div>
            <div className="card age-group-card">
              <h4>Parent Coaching:</h4>
              <p>We partner with families to ensure carryover of strategies at home, empower caregivers with tools for daily routines, and build strong communication environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dc-metro">
        <div className="container">
          <h2>Serving the DC Metro Area</h2>
          <div className="card">
            <p>
              Reach Language and Learning proudly serves clients across Washington, DC, Northern Virginia, and Maryland, 
              both in-person and via teletherapy. We are passionate about helping our clients find their voice, develop 
              their skills, and achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Started Today</h2>
          <p>
            If you're looking for personalized, expert support in speech, language, literacy, or executive functioning, 
            we're here to help.
          </p>
          <p>
            Contact Reach Language and Learning to schedule a consultation and take the first step toward growth and success.
          </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Services;