
import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Send, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("JgGVSlfTu9U5uI3Qp");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send email using EmailJS
    emailjs.sendForm('service_4chdkfw', 'template_9nw9f9f', formRef.current!)
      .then(() => {
        alert('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send your message. Please try again.');
        console.error("Email sending failed:", error);
      });
  };

  return (
    <section 
      id="contact" 
      className="dark-section section-padding pt-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="form-input">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="cyber-input"
                required
              />
            </div>
            
            <div className="form-input">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="cyber-input"
                required
              />
            </div>
            
            <div className="form-input">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="cyber-input resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="submit-btn w-full glass-card px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg md:rounded-xl text-white flex items-center justify-center gap-3"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4 text-white/80">
                <p>
                  I'm always excited to work on new projects and collaborate with innovative teams.
                </p>
                <p>
                  Whether you need a complete web application or want to enhance your existing platform with cutting-edge features, I'm here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Mail size={20} className="text-neon-blue" />
                  <a href="mailto:hemaharsan3@gmail.com">
                    hemaharsan3@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin size={20} className="text-neon-purple" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/HEMAHARSAN-3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon relative p-3 glass-card ripple-effect"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hema-harsan-r" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon relative p-3 glass-card ripple-effect"
                >
                  <Linkedin size={24} className="text-neon-blue" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
