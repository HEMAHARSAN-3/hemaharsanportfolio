
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optimized navigation fade in
    gsap.fromTo(navRef.current, 
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.8, delay: 4 }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: "0%",
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
    gsap.to(mobileMenuRef.current, {
      x: "100%",
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-4 md:py-6">
        <div className="glass-card px-4 md:px-6 py-3 md:py-4 flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-gradient">
            HH
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="animated-link text-white/80 text-sm lg:text-base"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 z-50 relative"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
        className="fixed top-0 right-0 h-full w-72 max-w-full bg-cyber-darker z-50 transform translate-x-full md:hidden"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Menu Items */}
          <div className="flex flex-col space-y-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-xl text-white/80 py-3 border-b border-white/10 last:border-b-0"
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
