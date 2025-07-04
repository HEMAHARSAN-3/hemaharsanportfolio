
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Navigation fade in
    gsap.fromTo(navRef.current, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 4 }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.out"
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    gsap.to(mobileMenuRef.current, {
      x: "100%",
      duration: 0.5,
      ease: "power3.out"
    });
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 px-6 py-6">
        <div className="glass-card px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">
            HH
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="animated-link text-white/80 hover:text-white transition-colors duration-300 hover:text-neon-blue"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:scale-110 transition-transform duration-300 z-50 relative"
          >
            {isMenuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 max-w-full bg-cyber-darker z-50 transform translate-x-full md:hidden"
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {/* Menu Items */}
          <div className="flex flex-col space-y-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-2xl text-white/80 hover:text-neon-blue transition-colors duration-300 hover:scale-105 transform py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
