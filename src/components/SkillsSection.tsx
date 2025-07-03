
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  PaintBrush, 
  Database, 
  Rocket, 
  GitBranch,
  Globe,
  Cpu,
  Lightning,
  Palette,
  CloudArrowUp,
  Wrench
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "HTML", icon: Code, color: "text-orange-400" },
    { name: "CSS", icon: PaintBrush, color: "text-blue-400" },
    { name: "JavaScript", icon: Lightning, color: "text-yellow-400" },
    { name: "React", icon: Cpu, color: "text-cyan-400" },
    { name: "Next.js", icon: Globe, color: "text-white" },
    { name: "Tailwind CSS", icon: Palette, color: "text-teal-400" },
    { name: "Node.js", icon: Database, color: "text-green-400" },
    { name: "Express", icon: Rocket, color: "text-gray-400" },
    { name: "MongoDB", icon: Database, color: "text-green-500" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-500" },
    { name: "Git", icon: GitBranch, color: "text-orange-500" },
    { name: "GitHub", icon: GitBranch, color: "text-gray-300" },
    { name: "Docker", icon: Wrench, color: "text-blue-600" },
    { name: "Postman", icon: Rocket, color: "text-orange-600" },
    { name: "Figma", icon: PaintBrush, color: "text-purple-400" },
    { name: "GSAP", icon: Lightning, color: "text-green-300" },
    { name: "Three.js", icon: Cpu, color: "text-red-400" },
    { name: "Vercel", icon: CloudArrowUp, color: "text-black" },
    { name: "Netlify", icon: CloudArrowUp, color: "text-teal-500" },
    { name: "Render", icon: CloudArrowUp, color: "text-purple-500" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skills animation
      ScrollTrigger.create({
        trigger: skillsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".skill-item",
            { 
              opacity: 0, 
              y: 30, 
              scale: 0.9
            },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              duration: 0.8, 
              stagger: 0.05,
              ease: "power2.out"
            }
          );
        }
      });

      // Floating particles animation
      gsap.to(".skill-particle", {
        y: -15,
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="dark-section section-padding pt-32"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="skill-particle absolute w-1 h-1 bg-neon-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Tools I craft with precision and expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div 
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name}
                className="skill-item glass-card p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 glass-card rounded-xl">
                      <IconComponent 
                        size={32} 
                        weight="light" 
                        className={skill.color}
                      />
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-sm font-semibold text-white/90 group-hover:text-neon-blue transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
