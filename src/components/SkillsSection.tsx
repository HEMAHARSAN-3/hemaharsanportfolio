
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
  CloudArrowUp
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "HTML", icon: Code, color: "text-orange-400" },
        { name: "CSS", icon: PaintBrush, color: "text-blue-400" },
        { name: "JavaScript", icon: Lightning, color: "text-yellow-400" },
        { name: "React", icon: Cpu, color: "text-cyan-400" },
        { name: "Next.js", icon: Globe, color: "text-white" },
        { name: "Tailwind CSS", icon: Palette, color: "text-teal-400" }
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "Node.js", icon: Database, color: "text-green-400" },
        { name: "Express", icon: Rocket, color: "text-gray-400" },
        { name: "MongoDB", icon: Database, color: "text-green-500" },
        { name: "PostgreSQL", icon: Database, color: "text-blue-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "Git", icon: GitBranch, color: "text-orange-500" },
        { name: "GitHub", icon: GitBranch, color: "text-gray-300" },
        { name: "Netlify", icon: CloudArrowUp, color: "text-teal-500" }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skills animation
      ScrollTrigger.create({
        trigger: skillsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".skill-category",
            { 
              opacity: 0, 
              y: 50, 
              scale: 0.9
            },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              duration: 0.8, 
              stagger: 0.2,
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Tools I craft with precision and expertise
          </p>
        </div>

        {/* Skills Categories */}
        <div 
          ref={skillsRef}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="skill-category glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full mb-4`}></div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center p-4 glass-card rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="mb-3">
                          <IconComponent 
                            size={28} 
                            weight="light" 
                            className={skill.color}
                          />
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-sm font-semibold text-white/90 group-hover:text-neon-blue transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
