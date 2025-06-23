import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  User,
  Code,
  Camera,
  MessageSquare,
  ChevronDown,
  Send
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">
              Himbazimana Samuel
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-navy-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-navy-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-navy-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-navy-600 transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-navy-600 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-navy-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md transition-colors">Projects</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-navy-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Himbazimana
                  <span className="block bg-gradient-to-r from-navy-700 to-navy-500 bg-clip-text text-transparent">
                    Samuel
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Full Stack Developer with 5 years of experience crafting innovative web solutions. 
                  From PHP foundations in high school to mastering React and Spring Boot in university, 
                  I transform complex ideas into scalable, user-centric applications that drive real business value.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection('projects')} className="bg-navy-600 text-white px-8 py-3 rounded-lg hover:bg-navy-700 transition-colors font-medium">
                  View My Work
                </button>
                <button onClick={() => scrollToSection('contact')} className="border border-navy-300 text-navy-700 px-8 py-3 rounded-lg hover:bg-navy-50 transition-colors font-medium">
                  Get In Touch
                </button>
              </div>

              <div className="flex space-x-6">
                <a href="https://github.com/samyG01" className="text-gray-600 hover:text-navy-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/samy-himbazimana/" className="text-gray-600 hover:text-navy-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="" className="text-gray-600 hover:text-navy-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
  <div className="relative">
    <div className="w-80 h-80 bg-gradient-to-br from-navy-100 to-slate-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-2xl profile-image" style={{ backgroundImage: `url('../src/profile.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center text-gray-500 hidden fallback-content">
        <img 
      src="../src/profile.jpeg" 
      alt="Daily Radar Logo" 
      className="max-h-40 max-w-full object-contain" 
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = '';
        e.currentTarget.parentElement.innerHTML = `
          <div class="text-center text-gray-600">
            <Code size={60} class="mx-auto mb-4 opacity-50" />
            <p class="font-medium">profile</p>
            <p class="text-sm">Placeholder</p>
          </div>
        `;
      }}
    />
      </div>
    </div>
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
  </div>
</div>

          </div>

          <div className="text-center mt-16">
            <ChevronDown size={32} className="mx-auto text-gray-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  From PHP Foundations to Modern Full Stack Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  My journey in software development began during high school, where I was first introduced to PHP and discovered my passion for creating dynamic web applications. This early exposure to server-side programming laid the foundation for my understanding of how web technologies work together to create seamless user experiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Now pursuing my university studies, I've expanded my expertise to include modern technologies like React for frontend development and Spring Boot for robust backend solutions. With 5 years of hands-on experience, I specialize in building scalable applications that combine elegant user interfaces with powerful server-side functionality. My approach focuses on writing clean, maintainable code while delivering solutions that exceed client expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-navy-50 rounded-lg">
                  <div className="text-3xl font-bold text-navy-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-navy-50 rounded-lg">
                  <div className="text-3xl font-bold text-navy-600 mb-2">3+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'React Development', level: 90 },
                  { skill: 'Spring Boot', level: 85 },
                  { skill: 'PHP Development', level: 88 },
                  { skill: 'Database Design', level: 80 },
                  { skill: 'UI/UX Implementation', level: 75 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{item.skill}</span>
                      <span className="text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-navy-600 to-navy-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in building modern, scalable web applications with real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Daily Radar Project */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
              <img 
      src="../src/dr.jpeg" 
      alt="Daily Radar Logo" 
      className="max-h-40 max-w-full object-contain" 
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = '';
        e.currentTarget.parentElement.innerHTML = `
          <div class="text-center text-gray-600">
            <Code size={60} class="mx-auto mb-4 opacity-50" />
            <p class="font-medium">Daily Radar Logo</p>
            <p class="text-sm">Placeholder</p>
          </div>
        `;
      }}
    />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Daily Radar</h3>
                  <a 
                    href="https://dailyradar.site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-600 hover:text-navy-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A comprehensive media platform delivering the latest in entertainment and political news. 
                  Built with modern web technologies to provide users with real-time updates, engaging content, 
                  and an intuitive reading experience across all devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">Spring Boot</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">News API</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Responsive Design</span>
                </div>
                <a 
                  href="https://dailyradar.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy-600 hover:text-navy-800 font-medium transition-colors"
                >
                  Visit Live Site <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Sportiva Project */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
              <<img 
      src="../src/so.png" 
      alt="Daily Radar Logo" 
      className="max-h-40 max-w-full object-contain" 
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = '';
        e.currentTarget.parentElement.innerHTML = `
          <div class="text-center text-gray-600">
            <Code size={60} class="mx-auto mb-4 opacity-50" />
            <p class="font-medium"> Logo</p>
            <p class="text-sm">Placeholder</p>
          </div>
        `;
      }}
    />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Sportova</h3>
                  <a 
                    href="https://sportiva.site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-600 hover:text-navy-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A dynamic sports news platform that keeps fans updated with the latest scores, news, and analysis. 
                  Features real-time data feeds, interactive scoreboards, and an intuitive user interface designed 
                  for the ultimate sports content experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Sports API</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Real-time Data</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Live Scores</span>
                </div>
                <a 
                  href="https://sportova.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy-600 hover:text-navy-800 font-medium transition-colors"
                >
                  Visit Live Site <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-navy-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">[hizsamy01@gmail.com]</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">[+250 790 395 057]</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-navy-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">[Kigali, Rwanda]</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/samyG01" className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/samy-himbazimana/" className="w-12 h-12 bg-navy-600 text-white rounded-lg flex items-center justify-center hover:bg-navy-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://accounts.google.com/SignOutOptions?hl=en-GB&continue=https://mail.google.com/mail&service=mail&ec=GBRAFw" className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy-600 text-white py-3 px-6 rounded-lg hover:bg-navy-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-navy-300 to-slate-300 bg-clip-text text-transparent">
                Himbazimana Samuel
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating exceptional digital experiences through clean code, innovative solutions, and modern web technologies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('projects')} className="block text-gray-400 hover:text-white transition-colors">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-navy-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Himbazimana Samuel. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
