
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt, Envelope } from 'phosphor-react';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("JgGVSlfTu9U5uI3Qp");

    const ctx = gsap.context(() => {
      // Form inputs animation
      ScrollTrigger.create({
        trigger: formRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".form-input",
            { opacity: 0, x: -30, filter: "blur(5px)" },
            { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.15, ease: "power3.out" }
          );
          
          gsap.fromTo(".social-icon",
            { opacity: 0, scale: 0.5, rotation: 180 },
            { opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)", delay: 0.4 }
          );
        }
      });

      // Submit button pulse
      gsap.to(".submit-btn", {
        scale: 1.02,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit animation
    gsap.to(".submit-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
      onComplete: () => {
        // Send email using EmailJS
        emailjs.sendForm('service_4chdkfw', 'template_9nw9f9f', formRef.current!)
          .then(() => {
            alert('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            
            // Success animation
            gsap.to(".submit-btn", {
              backgroundColor: "#00FF88",
              duration: 0.3,
              yoyo: true,
              repeat: 1
            });
          })
          .catch((error) => {
            alert('Failed to send your message. Please try again.');
            console.error("Email sending failed:", error);
          });
      }
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
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
                className="cyber-input hover:border-neon-purple/50 transition-colors duration-300"
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
                className="cyber-input hover:border-neon-purple/50 transition-colors duration-300"
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
                className="cyber-input resize-none hover:border-neon-purple/50 transition-colors duration-300"
                required
              />
            </div>
            
            <button
              type="submit"
              className="submit-btn w-full cyber-btn flex items-center justify-center gap-3"
            >
              <PaperPlaneTilt size={20} weight="light" />
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 hover:border-neon-blue/50 transition-colors duration-300">
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
                  <Envelope size={20} weight="light" className="text-neon-blue" />
                  <a href="mailto:hemaharsan3@gmail.com" className="hover:text-neon-blue transition-colors duration-300">
                    hemaharsan3@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/HEMAHARSAN-3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon relative p-3 glass-card hover:scale-110 transition-transform duration-300 ripple-effect"
                >
                  <GithubLogo size={24} weight="light" className="text-white hover:text-neon-blue transition-colors duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hema-harsan-r" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon relative p-3 glass-card hover:scale-110 transition-transform duration-300 ripple-effect"
                >
                  <LinkedinLogo size={24} weight="light" className="text-neon-blue hover:text-neon-purple transition-colors duration-300" />
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
