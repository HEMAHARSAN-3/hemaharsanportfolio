
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Rocket, 
  Lightning, 
  Globe, 
  Cpu 
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: Code, name: 'HTML/CSS', color: 'text-neon-blue' },
    { icon: Lightning, name: 'JavaScript', color: 'text-neon-green' },
    { icon: Rocket, name: 'React', color: 'text-neon-blue' },
    { icon: Cpu, name: 'Node.js', color: 'text-neon-purple' },
    { icon: Palette, name: 'GSAP', color: 'text-neon-pink' },
    { icon: Globe, name: 'Full Stack', color: 'text-neon-blue' },
  ];

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

      // Skills stagger animation
      ScrollTrigger.create({
        trigger: skillsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".skill-item",
            { opacity: 0, y: 30, scale: 0.8 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: 0.6, 
              stagger: 0.1,
              ease: "back.out(1.7)"
            }
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
      className="about-section section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="glass-card p-8 text-center">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-1 mb-6">
                <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center">
                  <div className="text-6xl text-gradient font-bold">HH</div>
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
                I'm a passionate Full Stack Developer who specializes in creating 
                immersive digital experiences using cutting-edge technologies. 
                With expertise in modern web frameworks and a keen eye for futuristic design.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                I transform complex ideas into elegant, performant solutions that 
                push the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="skill-item glass-card p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <IconComponent 
                      size={32} 
                      weight="light" 
                      className={`mx-auto mb-2 ${skill.color}`}
                    />
                    <div className="text-sm text-white/80 font-medium">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
