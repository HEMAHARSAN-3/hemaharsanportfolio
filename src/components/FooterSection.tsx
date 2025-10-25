
import React from 'react';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';

const FooterSection = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative section-padding dark-section pt-20">

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gradient">HH</div>
            <p className="text-white/70 leading-relaxed">
              Creating the future of web development, one line of code at a time.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/HEMAHARSAN-3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative p-2 glass-card ripple-effect"
              >
                <GithubLogo size={20} weight="light" className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hema-harsan-r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative p-2 glass-card ripple-effect"
              >
                <LinkedinLogo size={20} weight="light" className="text-neon-blue" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="animated-link block text-white/70"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Let's Talk</h3>
            <div className="space-y-2 text-white/70">
              <p>Ready to start your next project?</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="animated-link text-neon-blue"
              >
                Get in touch →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <button
            onClick={scrollToTop}
            className="px-4 py-2 glass-card text-sm text-white/80"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
