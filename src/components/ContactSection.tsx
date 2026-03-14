
import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Send, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useScrollReveal<HTMLElement>();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    emailjs.init("JgGVSlfTu9U5uI3Qp");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <section ref={sectionRef} id="contact" className="contact-section dark-section section-padding pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="reveal-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Let's Connect</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Ready to bring your next project to life? Let's discuss how we can create something extraordinary together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <form ref={formRef} onSubmit={handleSubmit} className="reveal-left space-y-6" style={{ transitionDelay: '100ms' }}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="cyber-input" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="cyber-input" required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} rows={6} className="cyber-input resize-none" required />
            <button type="submit" className="w-full glass-card px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg md:rounded-xl text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/30">
              <Send size={20} /> Send Message
            </button>
          </form>

          <div className="reveal-right space-y-8" style={{ transitionDelay: '200ms' }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4 text-white/80">
                <p>I'm always excited to work on new projects and collaborate with innovative teams.</p>
                <p>Whether you need a complete web application or want to enhance your existing platform with cutting-edge features, I'm here to help.</p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-white/70"><Mail size={20} className="text-neon-blue" /><a href="mailto:hemaharsan3@gmail.com">hemaharsan3@gmail.com</a></div>
                <div className="flex items-center gap-3 text-white/70"><MapPin size={20} className="text-neon-purple" /><span>Coimbatore, Tamil Nadu, India</span></div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/HEMAHARSAN-3" target="_blank" rel="noopener noreferrer" className="p-3 glass-card transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/30"><Github size={24} className="text-white" /></a>
                <a href="https://www.linkedin.com/in/hema-harsan-r" target="_blank" rel="noopener noreferrer" className="p-3 glass-card transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/30"><Linkedin size={24} className="text-neon-blue" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
