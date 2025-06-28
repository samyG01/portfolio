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
                <a href="mailto:samuelhimbaza@gmail.com" className="text-gray-600 hover:text-navy-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-navy-100 to-slate-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-2xl profile-image" style={{ backgroundImage: `url('/profile.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="text-center text-gray-500 hidden fallback-content">
                    <User  size={80} className="mx-auto mb-4 opacity-30" />
                   <img 
                      src="/profile.jpeg" 
                      alt="Profile" 
                      className="max-h-40 max-w-full object-contain" 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="text-center text-gray-600">
                              <Code size={60} class="mx-auto mb-4 opacity-50" />
                              <p class="font-medium">Profile Image</p>
                              <p class="text-sm">Placeholder</p>
                            </div>
                          `;
                        }
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
      src="/dr.png" 
      alt="Daily Radar Logo" 
      className="max-h-40 max-w-full object-contain" 
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = '';
        const parent = e.currentTarget.parentElement;
        if (parent) {
          parent.innerHTML = `
            <div class="text-center text-gray-600">
              <Code size={60} class="mx-auto mb-4 opacity-50" />
              <p class="font-medium">Daily Radar Logo</p>
              <p class="text-sm">Placeholder</p>
            </div>
          `;
        }
      }}
    />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Daily Radar</h3>
                  <a href="https://daily-radar.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-navy-700 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-6">
                  A dynamic news aggregator that provides real-time updates from a variety of sources. Built with React and powered by a custom news API, it delivers a personalized and engaging user experience.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-medium">News API</span>
                  <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-medium">Vercel</span>
                </div>
              </div>
            </div>

            {/* Student Hub Project */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <img 
      src="/so.png" 
      alt="Student Hub Logo" 
      className="max-h-40 max-w-full object-contain" 
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = '';
        const parent = e.currentTarget.parentElement;
        if (parent) {
          parent.innerHTML = `
            <div class="text-center text-gray-600">
              <Code size={60} class="mx-auto mb-4 opacity-50" />
              <p class="font-medium">Student Hub Logo</p>
              <p class="text-sm">Placeholder</p>
            </div>
          `;
        }
      }}
    />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Student Hub</h3>
                  <a href="https://student-hub-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-navy-700 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-6">
                  An integrated platform for students to manage their academic activities, access resources, and collaborate with peers. Built with a responsive UI and a robust Spring Boot backend.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">Spring Boot</span>
                  <span className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative">
              <img src="/1 (1).png" alt="Gallery image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Caption 1</p>
              </div>
            </div>
            <div className="group relative">
              <img src="/1 (2).png" alt="Gallery image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Caption 2</p>
              </div>
            </div>
            <div className="group relative">
              <img src="/1 (3).png" alt="Gallery image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Caption 3</p>
              </div>
            </div>
            <div className="group relative">
              <img src="/1 (4).png" alt="Gallery image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Caption 4</p>
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
              I'm currently available for freelance work and open to new opportunities. 
              Feel free to reach out with any inquiries or just to say hello!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500"></textarea>
                </div>
                <div className="text-right">
                  <button type="submit" className="bg-navy-600 text-white px-8 py-3 rounded-lg hover:bg-navy-700 transition-colors font-medium flex items-center justify-center w-full sm:w-auto">
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-navy-100 p-4 rounded-xl">
                  <Mail size={24} className="text-navy-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">samuelhimbaza@gmail.com</p>
                  <a href="mailto:samuelhimbaza@gmail.com" className="text-navy-600 hover:underline">Send an email</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-navy-100 p-4 rounded-xl">
                  <Phone size={24} className="text-navy-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+250 788 281 920</p>
                  <a href="tel:+250788281920" className="text-navy-600 hover:underline">Call me</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-navy-100 p-4 rounded-xl">
                  <MapPin size={24} className="text-navy-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Kigali, Rwanda</p>
                  <a href="#" className="text-navy-600 hover:underline">View on map</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold mb-2">Himbazimana Samuel</p>
          <p className="text-gray-400 mb-6">
            © {new Date().getFullYear()} Himbazimana Samuel. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/samyG01" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/samy-himbazimana/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:samuelhimbaza@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 