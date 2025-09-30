import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import mountainsImage from '/public/mountains.png'
import personalImage from '/public/mila.jpg'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted')

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
      return
    }

    setIsLoading(true)
    setShowError(false)
    setShowSuccess(false)

    try {
      // EmailJS configuration
      const result = await emailjs.send(
        'service_ew4yi3g', // Your EmailJS service ID
        'template_067ycoc', // Your EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject || 'Website Contact Form',
          message: formData.message,
          to_name: 'Mila',
        },
        'zjhe-3e5yh_Vk49cF' // Your EmailJS public key
      )

      setShowSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center h-16">
            <div className="flex items-center space-x-12">
              <a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors text-sm tracking-wider uppercase">About Me</a>
              <a href="#resume" className="text-gray-300 hover:text-pink-400 transition-colors text-sm tracking-wider uppercase">Resume</a>
              <a href="#portfolio" className="text-gray-300 hover:text-pink-400 transition-colors text-sm tracking-wider uppercase">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors text-sm tracking-wider uppercase">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Mountain background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${mountainsImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
        ></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Hi! I am <span className="text-pink-400 font-normal">Mila Vasiutynska</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            A versatile generalist with technical skills to build, solve, and innovate.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://www.linkedin.com/in/mila-vasiutynska-3b36752b/" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <span className="text-white text-sm">in</span>
            </a>
            <a href="https://github.com/mila-vasiutynska" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-white text-sm">@</span>
            </a>
            <a href="https://www.facebook.com/lyuda.vasiutynska" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span className="text-white text-sm">f</span>
            </a>
            <a href="https://www.instagram.com/vlyuda/" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <span className="text-white text-sm">ig</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-8">
            <a href="#about" className="block">
              <svg className="w-6 h-6 mx-auto text-gray-400 hover:text-pink-400 transition-colors cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-24 pb-80 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-pink-400 border-b-2 border-pink-400 pb-2">ABOUT ME</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-xl"></div>
                <div className="relative w-full h-full bg-gray-700 rounded-full overflow-hidden border-4 border-pink-400/30">
                  <img
                    src={personalImage}
                    alt="Mila Vasiutynska"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a dynamic problem solver with a blend of software engineering, data analytics, and 3D design experience. I connect technical skills with business impact to deliver practical solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-pink-400 font-medium w-24">Location:</span>
                  <span className="text-gray-300">Melbourne, Australia</span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-400 font-medium w-24">Email:</span>
                  <span className="text-gray-300">mila.vasiutynska@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pink-400 font-medium w-24">Languages:</span>
                  <span className="text-gray-300">Ukrainian, English</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pink-400 font-medium w-24">Skills:</span>
                  <span className="text-gray-300">Go, Python, JavaScript, SQL, C#, AWS, Docker, Git, Tableau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-pink-400 border-b-2 border-pink-400 pb-2">RESUME</span>
            </h2>
            <div className="mt-6">
              <a
                href="/Mila_Vasiutynska.pdf"
                download="Mila_Vasiutynska_CV.pdf"
                className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-xl font-medium text-pink-400 mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-pink-400 pl-6">
                  <h4 className="font-medium text-white">Software Engineer</h4>
                  <p className="text-pink-400 text-sm">JigSpace • 2022-2025</p>
                  <p className="text-gray-300 text-sm mt-2">Founding team member, designed backend features using Go, PostgreSQL, AWS. Built ML-powered 3D asset pipelines for Vision Pro.</p>
                </div>
                <div className="border-l-2 border-pink-400 pl-6">
                  <h4 className="font-medium text-white">Technical / 3D Artist</h4>
                  <p className="text-pink-400 text-sm">JigSpace • 2018-2021</p>
                  <p className="text-gray-300 text-sm mt-2">Streamlined workflows, increased team productivity by 30%. Developed Python add-ons and AWS pipeline processes.</p>
                </div>
                <div className="border-l-2 border-pink-400 pl-6">
                  <h4 className="font-medium text-white">Head of Budgeting and Management Reporting</h4>
                  <p className="text-pink-400 text-sm">UkrSibBank, BNP Paribas Group • 2010-2015</p>
                  <p className="text-gray-300 text-sm mt-2">Directed 10+ automation initiatives, improved efficiency via SAP integration and SQL on Oracle databases.</p>
                </div>
                <div className="border-l-2 border-pink-400 pl-6">
                  <h4 className="font-medium text-white">Management Reporting and Data Analyst</h4>
                  <p className="text-pink-400 text-sm">UkrSibBank, BNP Paribas Group • 2007-2009</p>
                  <p className="text-gray-300 text-sm mt-2">Led budgeting and forecasting across 24 regions, spearheaded automation initiatives with SQL-driven data insights.</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-medium text-pink-400 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-pink-400 pl-6">
                  <h4 className="font-medium text-white">Google Data Analytics Specialisation</h4>
                  <p className="text-pink-400 text-sm">Coursera • 2024</p>
                  <p className="text-gray-300 text-sm mt-2">Data cleaning, transformation, Big Data, Tableau, R programming, SQL</p>
                </div>
                <div className="border-l-2 border-pink-400 pl-6">
                  <h4 className="font-medium text-white">Advanced Diploma of Game Development</h4>
                  <p className="text-pink-400 text-sm">Academy of Interactive Entertainment (AIE) • 2018</p>
                  <p className="text-gray-300 text-sm mt-2">3D Art, UI/UX Design, C#, Unity</p>
                </div>
                <div className="border-l-2 border-pink-400 pl-6">
                  <h4 className="font-medium text-white">M.A. & B.A. Computer and Information Science</h4>
                  <p className="text-pink-400 text-sm">Taras Shevchenko National University of Kyiv • Graduated with honors</p>
                  <p className="text-gray-300 text-sm mt-2">Databases (SQL), Statistics, Computer Science (C++, C#)</p>
                </div>
                <div className="border-l-2 border-pink-400 pl-6">
                  <h4 className="font-medium text-white">B.A. Finance and Econometrics</h4>
                  <p className="text-pink-400 text-sm">Taras Shevchenko National University of Kyiv</p>
                  <p className="text-gray-300 text-sm mt-2">Accounting, Financial and data analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-pink-400 border-b-2 border-pink-400 pb-2">CERTIFICATIONS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">AWS Certified Cloud Practitioner</h3>
              <p className="text-pink-400 text-sm mb-3">2025</p>
              <p className="text-gray-300 text-sm">Cloud computing fundamentals and AWS services</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">Ladymates Collective Membership</h3>
              <p className="text-pink-400 text-sm mb-3">2025</p>
              <p className="text-gray-300 text-sm">Professional women's network and community</p>
            </div>
          </div>

        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-pink-400 border-b-2 border-pink-400 pb-2">PORTFOLIO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm font-medium">AI Detection</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">AI Data Hackathon</h3>
                <p className="text-pink-400 text-sm mb-3">Python • 2025</p>
                <p className="text-gray-300 mb-4">Detecting landmines from drone images using YOLO object recognition. Team placed 7th out of 15 participants.</p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7357930235415183360/" className="text-pink-400 hover:text-pink-300 transition-colors">Read LinkedIn Post →</a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <p className="text-sm font-medium">Healthcare ML</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">CIBMTR - Equity in Post-HCT Survival</h3>
                <p className="text-pink-400 text-sm mb-3">Python • 2025</p>
                <p className="text-gray-300 mb-4">Analysed transplant patient data and developed predictive models to enhance accuracy and equity in survival predictions.</p>
                <a href="https://www.kaggle.com/competitions/equity-post-HCT-survival-predictions/overview" className="text-pink-400 hover:text-pink-300 transition-colors">View Details →</a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                  <p className="text-sm font-medium">Marketing Analytics</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-2">Bellabeat Case Study</h3>
                <p className="text-pink-400 text-sm mb-3">R • 2024</p>
                <p className="text-gray-300 mb-4">Conducted exploratory data analysis on smart device usage to inform marketing strategy and generate actionable insights.</p>
                <a href="https://www.kaggle.com/code/milavasiutynska/bellabeat-case-study?scriptVersionId=199182821" className="text-pink-400 hover:text-pink-300 transition-colors">View Analysis →</a>
              </div>
            </div>
          </div>

          {/* 3D Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-light text-center mb-12">
              <span className="text-pink-400 border-b-2 border-pink-400 pb-2">3D MODELS</span>
            </h3>

            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-white mb-4">3D Model Pipeline – JigSpace</h4>
                <p className="text-gray-300 leading-relaxed">
                  Built backend tools in Go and Python to automate the handling of 3D models, from uploading and validation to storage in AWS S3 and task queuing via AWS SQS. Optimized the pipeline for performance and reliability, enabling faster processing and consistent delivery of 3D assets across web and mobile platforms. Example model: <a href="https://grabcad.com/library/kaffebryggare-1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors underline">Kaffebryggare</a>
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://link.jig.space/GIKw4JWpZWb"
                  className="w-full h-96 border-0"
                  title="JigSpace 3D Model"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-pink-400 border-b-2 border-pink-400 pb-2">LET'S TALK</span>
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* Error Message */}
            {showError && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                Please fill in all required fields or try again later.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name*"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name*"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email*"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message*"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'SENDING...' : 'SEND'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm tracking-wider uppercase">Home</a>
            <a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors text-sm tracking-wider uppercase">About</a>
            <a href="#resume" className="text-gray-400 hover:text-pink-400 transition-colors text-sm tracking-wider uppercase">Resume</a>
            <a href="#portfolio" className="text-gray-400 hover:text-pink-400 transition-colors text-sm tracking-wider uppercase">Portfolio</a>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2025 Mila Vasiutynska. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App