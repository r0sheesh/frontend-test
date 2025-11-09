import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">EZ Labs</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Welcome to EZ Labs
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Building innovative solutions for the modern web
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h3>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-2">Fast Development</h4>
              <p className="text-gray-600">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-semibold mb-2">Innovative Solutions</h4>
              <p className="text-gray-600">Cutting-edge technology and creative approaches</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Goal Oriented</h4>
              <p className="text-gray-600">Focused on delivering results that matter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', icon: '🌐', desc: 'Modern, responsive websites' },
              { title: 'Mobile Apps', icon: '📱', desc: 'Native and cross-platform solutions' },
              { title: 'UI/UX Design', icon: '🎨', desc: 'Beautiful, user-friendly interfaces' },
              { title: 'Cloud Solutions', icon: '☁️', desc: 'Scalable cloud infrastructure' },
              { title: 'API Development', icon: '🔌', desc: 'Robust backend systems' },
              { title: 'Consulting', icon: '💼', desc: 'Technical guidance and strategy' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Have a project in mind? Let's talk!</p>
          </div>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center animate-fade-in">
              ✅ Form Submitted Successfully!
            </div>
          )}

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 EZ Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;