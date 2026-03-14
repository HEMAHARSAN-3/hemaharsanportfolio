
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple delayed reveal for hero content
    const timer = setTimeout(() => {
      contentRef.current?.classList.add('visible');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/orb-LLD7JkmD59ZtvGdh2EIUdGst/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      
      {/* Content Overlay - Centered */}
      <div ref={contentRef} className="reveal-up relative z-10 section-padding w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-center min-h-screen">
          <div className="text-center max-w-3xl mx-auto">
            {/* Main Headline */}
            <h1 className="mb-4 md:mb-6 leading-tight">
              <span className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold block mb-2">
                Hi, I'm
              </span>
              <span className="text-gradient text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold block mb-2">
                Hema Harsan
              </span>
              <span className="text-white/80 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light block">
                Full Stack Developer
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="responsive-text-lg text-white/70 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology 
              and futuristic design principles.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="cta-button glass-card px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg md:rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/30"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </button>
              <a 
                href="/Hema_Harsan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button glass-card px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg md:rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/30"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/70 via-transparent to-cyber-dark/30 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
