
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      ScrollTrigger.create({
        trigger: imageRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(imageRef.current,
            { opacity: 0, x: -50, rotation: -5 },
            { opacity: 1, x: 0, rotation: 0, duration: 1, ease: "power2.out" }
          );
        }
      });

      // Image hover effect
      const imageElement = imageRef.current;
      if (imageElement) {
        imageElement.addEventListener('mouseenter', () => {
          gsap.to(imageElement, {
            scale: 1.05,
            rotation: 2,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        imageElement.addEventListener('mouseleave', () => {
          gsap.to(imageElement, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="dark-section min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16 lg:hidden">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Section Title - Desktop */}
          <div className="hidden lg:block lg:order-1 mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
          </div>

          {/* Profile Image - Order 1 on mobile, Order 2 on desktop */}
          <div ref={imageRef} className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-2">
                <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/c828580d-3958-4a05-b94c-6c010bed823b.png" 
                    alt="Hema Harsan R"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating orbs */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-neon-blue/30 rounded-full blur-md animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-neon-purple/25 rounded-full blur-lg animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-neon-pink/40 rounded-full blur-sm animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Content - Order 2 on mobile, Order 1 on desktop */}
          <div className="space-y-8 order-2 lg:order-1 lg:pl-12">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Hi, I'm <span className="text-gradient font-semibold">Hema Harsan R</span> — a B.Tech student specializing in Artificial Intelligence & Data Science, with a deep passion for Full Stack Development. I love building smart, meaningful solutions that blend technology and creativity.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Whether it's developing dynamic web apps or diving into the latest tech trends, I'm always curious, always learning, and always pushing to turn ideas into impactful digital experiences. Currently in my 4th year of B.Tech in AI & Data Science at Dr. N.G.P. Institute of Technology.
              </p>
            </div>

            {/* CTA Links */}
            <div className="flex gap-6 pt-4">
              <a 
                href="#projects" 
                className="animated-link text-neon-blue font-semibold text-lg hover:text-neon-purple transition-colors duration-300 flex items-center gap-2"
              >
                View My Work <span>→</span>
              </a>
              <a 
                href="#contact" 
                className="animated-link text-neon-purple font-semibold text-lg hover:text-neon-pink transition-colors duration-300 flex items-center gap-2"
              >
                Let's Connect <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
