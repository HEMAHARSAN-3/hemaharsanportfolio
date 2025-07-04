
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer animation
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.fromTo(footerRef.current,
            { opacity: 0, y: 60, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
          );
        }
      });

      // Enhanced floating particles animation
      gsap.to(".footer-particle", {
        y: -15,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

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
    <footer ref={footerRef} className="relative section-padding dark-section pt-20">
      {/* Enhanced Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="footer-particle absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(0, 217, 255, ${Math.random() * 0.5 + 0.2}) 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

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
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative p-2 glass-card hover:scale-110 transition-transform duration-300 ripple-effect"
              >
                <GithubLogo size={20} weight="light" className="text-white hover:text-neon-blue transition-colors duration-300" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative p-2 glass-card hover:scale-110 transition-transform duration-300 ripple-effect"
              >
                <LinkedinLogo size={20} weight="light" className="text-neon-blue hover:text-neon-purple transition-colors duration-300" />
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
                  className="animated-link block text-white/70 hover:text-neon-blue transition-colors duration-300"
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
                className="animated-link text-neon-blue hover:text-neon-purple transition-colors duration-300"
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
            className="px-4 py-2 glass-card text-sm text-white/80 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
