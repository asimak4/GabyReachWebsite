import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Header Section */}
      <header className="services-header">
        <div className="container">
          <div className="header-layout">
            <div className="header-content">
              <div className="title-with-logo">
                <h1 className="page-title bounce-in-right delay-1">Our Services</h1>
                <img src="/fullWithoutBackground.png" alt="Reach Language and Learning Logo" className="title-logo bounce-in-left delay-1" />
              </div>
              <p className="page-subtitle bounce-in-down delay-2">
                Empowering learners through individualized, evidence-based support
              </p>
              <div className="intro-text bounce-in-up delay-2">
                <p>
                At Reach Language and Learning, our commitment to providing personalized speech, language and literacy services to children adolescents, and young adults in the DC metro area will make the difference in your child's development. Our sessions are based in the most up to date research and best practices in language development, cognition and literacy. We specialize in supporting individuals with speech-language challenges, reading and writing difficulties, executive functioning needs, and language-based learning differences.
                </p>
              </div>
            </div>
            <div className="header-image-section">
              <img src="/laptopOnDesk.jpg" alt="Laptop on Desk" className="header-image bounce-in-left delay-3" />
            </div>
          </div>
        </div>
      </header>

      {/* Mini Divider */}
      <div className="mini-divider"></div>

      {/* Detailed Services */}
      <section className="detailed-services">
        <div className="container">
          <div className="services-intro-section">
            <div className="intro-image-container">
              <img src="/bookWoman.jpg" alt="Woman Reading Book" className="intro-main-image bounce-in-left delay-1" />
            </div>
            <div className="sub-header-card bounce-in-up delay-1">
              <div className="sub-header-content">
                <p>
                Our services are designed to meet each client where they are. Whether your child is working to build the foundational skills of reading and writing or needs support with time management and other executive functioning skills we are here to help. 
                </p>
              </div>
            </div>
          </div>
          
          <div className="detailed-services-grid">
            {/* Structured Literacy */}
            <div className="service-detail bounce-in-left delay-1">
              <div className="service-detail-content">
                <div className="service-detail-header">
                  <div className="service-header-text">
                    <h3>Structured Literacy Intervention</h3>
                    <span className="service-badge literacy-badge">Rooted in the Science of Reading</span>
                  </div>
                  <div className="service-header-icon">
                    <img src="/pencil.png" alt="Pencil Icon" className="service-icon" />
                  </div>
                </div>
                <p>
                  At Reach Language and Learning, our structured literacy intervention is built upon the Science of Reading, a research-based framework that emphasizes explicit, systematic instruction in reading skills. We help students develop the core components of literacy, including:
                </p>
                <ul className="service-list">
                  <li>Phonological awareness (e.g., identifying and manipulating sounds in words)</li>
                  <li>Phonics and decoding (understanding the relationship between letters and sounds)</li>
                  <li>Fluency (reading with accuracy, speed, and expression)</li>
                  <li>Vocabulary development</li>
                  <li>Reading comprehension</li>
                </ul>
                <p>
                  Our approach is highly effective for learners with dyslexia, as well as those with other reading-based learning differences. Through individualized assessment and instruction, we help students become confident, competent readers who can engage meaningfully with academic and real-world texts.
                </p>
              </div>
            </div>

            {/* Expressive Language */}
            <div className="service-detail bounce-in-right delay-1">
              <div className="service-detail-content">
                <div className="service-detail-header">
                  <div className="service-header-text">
                    <h3>Expressive Language Therapy</h3>
                    <span className="service-badge expressive-badge">Supporting Clear, Confident Communication</span>
                  </div>
                  <div className="service-header-icon">
                    <img src="/bookIcon.png" alt="Book Icon" className="service-icon" />
                  </div>
                </div>
                <p>
                  Expressive language therapy at Reach focuses on helping individuals clearly express their thoughts, ideas, and emotions—verbally and in writing. We work with clients across developmental levels to build the language skills necessary for academic success and social connection.
                </p>
                <p>Key areas of support include:</p>
                <ul className="service-list">
                  <li>Verbal expression: building sentence complexity, storytelling, and oral presentation skills</li>
                  <li>Grammar and sentence structure: forming accurate, age-appropriate sentences</li>
                  <li>Vocabulary building: expanding word knowledge and use across contexts</li>
                  <li>Written expression: organizing ideas, constructing paragraphs, and increasing written output</li>
                </ul>
                <p>
                  For students who struggle with organizing their thoughts or producing written work, we offer individualized strategies to help them plan, draft, revise, and confidently share their ideas in academic and personal writing.
                </p>
              </div>
            </div>

            {/* Receptive Language */}
            <div className="service-detail bounce-in-left delay-2">
              <div className="service-detail-content">
                <div className="service-detail-header">
                  <div className="service-header-text">
                    <h3>Receptive Language Therapy</h3>
                    <span className="service-badge receptive-badge">Building Understanding and Processing Skills</span>
                  </div>
                  <div className="service-header-icon">
                    <img src="/listeningIcon.png" alt="Listening Icon" className="service-icon" />
                  </div>
                </div>
                <p>
                  Receptive language—the ability to understand and interpret spoken language—is fundamental to learning. Our therapists work closely with clients who have difficulty processing verbal information, following directions, or grasping academic language.
                </p>
                <p>Our services target:</p>
                <ul className="service-list">
                  <li>Listening comprehension: understanding spoken language in conversation and instruction</li>
                  <li>Following directions: interpreting and acting on both simple and multi-step instructions</li>
                  <li>Vocabulary understanding: learning the meaning of new words and using context clues</li>
                  <li>Language processing: strengthening cognitive and linguistic pathways for quicker understanding</li>
                </ul>
                <p>
                  We also support students in navigating classroom language, helping them succeed in environments that require strong auditory comprehension and academic vocabulary.
                </p>
              </div>
            </div>

            {/* Executive Functioning */}
            <div className="service-detail bounce-in-right delay-2">
              <div className="service-detail-content">
                <div className="service-detail-header">
                  <div className="service-header-text">
                    <h3>Executive Functioning Support</h3>
                    <span className="service-badge executive-badge">Strategies for Success in School and Life</span>
                  </div>
                  <div className="service-header-icon">
                    <img src="/functionIcon.png" alt="Function Icon" className="service-icon" />
                  </div>
                </div>
                <p>
                  Executive functioning refers to the set of mental skills that enable us to manage time, stay organized, and follow through with tasks. At Reach, we provide targeted support to help individuals build independence and self-management in academic and everyday settings.
                </p>
                <p>Our executive functioning services include:</p>
                <ul className="service-list">
                  <li>Attention and focus: strategies to sustain mental effort and reduce distractions</li>
                  <li>Working memory: tools to hold and manipulate information for learning tasks</li>
                  <li>Planning and time management: breaking down assignments, using schedules and checklists</li>
                  <li>Task initiation and completion: overcoming procrastination and following through</li>
                  <li>Self-monitoring: recognizing errors, adjusting behavior, and tracking progress</li>
                </ul>
                <p>
                  These services are especially beneficial for students with ADHD, learning disabilities, and language-based executive functioning challenges, and are often integrated with academic or language therapy for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider gradient-divider"></div>

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
              At Reach Language and Learning, we recognize that communication, learning, and executive functioning needs
              evolve across the lifespan. We offer flexible, developmentally appropriate support for every stage:
            </p>
          </div>

          <div className="age-group-cards">
            <div className="age-group-card bounce-in-left delay-1">
              <h4>School-Age Children (Ages 5–12):</h4>
              <p>Our team helps children strengthen reading, writing, comprehension, expressive/receptive language, and executive functioning skills needed for classroom success.</p>
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

      {/* DC Metro Area */}
      <section className="dc-metro">
        <div className="container">
          <div className="dc-metro-layout">
            <div className="dc-metro-text-section">
                          <div className="dc-metro-header bounce-in-down delay-1">
              <h2>Serving the DC Metro Area</h2>
            </div>
            <div className="dc-metro-content bounce-in-up delay-1">
                <p>
                  Reach Language and Learning proudly serves clients across Washington, DC, Northern Virginia, and Maryland,
                  both in-person and via teletherapy. We are passionate about helping our clients find their voice, develop
                  their skills, and achieve their full potential.
                </p>
              </div>
            </div>
            <div className="dc-metro-image-section">
              <img src="/capital.jpg" alt="US Capitol Building in Washington DC" className="dc-metro-image bounce-in-right delay-2" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-services">
        <div className="container">
          <div className="cta-content-services bounce-in-up delay-1">
            <h2>Get Started Today</h2>
            <p>
              If you're looking for personalized, expert support in speech, language, literacy, or executive functioning,
              we're here to help.
            </p>
            <p>
              Contact Reach Language and Learning to schedule a consultation and take the first step toward growth and success.
            </p>
            <a href="/contact" className="cta-button">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;