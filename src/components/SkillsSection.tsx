
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
  Figma,
  Wrench
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      category: "Frontend",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      color: "text-neon-blue"
    },
    {
      category: "Backend",
      icon: Database,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "text-neon-purple"
    },
    {
      category: "Dev Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "Postman"],
      color: "text-neon-green"
    },
    {
      category: "Design",
      icon: Palette,
      skills: ["Figma", "GSAP", "Three.js"],
      color: "text-neon-pink"
    },
    {
      category: "Deployment",
      icon: CloudArrowUp,
      skills: ["Vercel", "Netlify", "Render"],
      color: "text-neon-blue"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skills tiles stagger animation
      ScrollTrigger.create({
        trigger: tilesRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".skill-tile",
            { 
              opacity: 0, 
              y: 40, 
              scale: 0.8,
              filter: "blur(10px)"
            },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2, 
              stagger: 0.1,
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
      className="dark-section section-padding pt-20"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
          ref={tilesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.category}
                className="skill-tile relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 glass-card rounded-xl">
                      <IconComponent 
                        size={32} 
                        weight="light" 
                        className={category.color}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-neon-blue/50 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                        <span className="text-white/80 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Tech Showcase */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Advanced Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['GSAP', 'Locomotive Scroll', 'Spline', 'Three.js', 'WebGL', 'TypeScript'].map((tech) => (
              <span 
                key={tech}
                className="px-6 py-3 glass-card text-white font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
