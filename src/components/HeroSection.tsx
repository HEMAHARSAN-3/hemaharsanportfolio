
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Spline fade in from top
      gsap.fromTo(splineRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 2, delay: 4, ease: "power2.out" }
      );

      // CTA button pulse animation
      gsap.to(".cta-button", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center">
      {/* Spline 3D Background */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/orb-LLD7JkmD59ZtvGdh2EIUdGst/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="hero-content relative z-10 section-padding w-full">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Hema Harsan</span>
            <br />
            <span className="text-white/80 text-4xl md:text-5xl lg:text-6xl font-light">
              Web Developer
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl font-light leading-relaxed">
            Crafting immersive digital experiences with cutting-edge technology 
            and futuristic design principles.
          </p>
          
          {/* CTA Button */}
          <button 
            className="cta-button cyber-btn text-lg md:text-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </button>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/70 via-transparent to-cyber-dark/30 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
