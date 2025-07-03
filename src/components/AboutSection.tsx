
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
      className="dark-section min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="glass-card p-8 text-center">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-1 mb-6">
                <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/c828580d-3958-4a05-b94c-6c010bed823b.png" 
                    alt="Hema Harsan R"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="neon-glow rounded-full absolute inset-8 pointer-events-none opacity-30"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                About Me
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Hi, I'm Hema Harsan R — a B.Tech student specializing in Artificial Intelligence & Data Science, with a deep passion for Full Stack Development. I love building smart, meaningful solutions that blend technology and creativity.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Whether it's developing dynamic web apps or diving into the latest tech trends, I'm always curious, always learning, and always pushing to turn ideas into impactful digital experiences. I enjoy working on real-world projects that challenge me to grow and make a difference.
              </p>
              
              {/* Academic Background */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gradient mb-4">Academic Background</h3>
                <div className="space-y-2">
                  <p className="text-white/90 font-medium">B.Tech in AI & Data Science - 4th Year</p>
                  <p className="text-white/70">Dr. N.G.P. Institute of Technology</p>
                </div>
              </div>
            </div>

            {/* CTA Links */}
            <div className="flex gap-6">
              <a 
                href="#projects" 
                className="animated-link text-neon-blue font-semibold hover:text-neon-purple transition-colors duration-300"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="animated-link text-neon-purple font-semibold hover:text-neon-pink transition-colors duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
