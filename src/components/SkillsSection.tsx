import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  icon: string;
  iconType: 'image' | 'emoji';
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Front-End Development",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", iconType: "image" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", iconType: "image" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", iconType: "image" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", iconType: "image" },
      ]
    },
    {
      title: "Back-End & Databases",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", iconType: "image" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", iconType: "image" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", iconType: "image" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", iconType: "image" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", iconType: "image" },
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", iconType: "image" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", iconType: "image" },
        { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", iconType: "image" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", iconType: "image" },
      ]
    },
    {
      title: "Platforms & AI",
      skills: [
        { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg", iconType: "image" },
        { name: "Replit", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg", iconType: "image" },
        { name: "ChatGPT", icon: "🤖", iconType: "emoji" },
        { name: "Deepseek", icon: "🤖", iconType: "emoji" },
        { name: "Bolt AI", icon: "⚡", iconType: "emoji" },
        { name: "Lovable", icon: "💖", iconType: "emoji" },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      className="dark-section section-padding pt-32"
      ref={sectionRef}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            My Skills
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            The technologies and tools I use to build modern applications.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`
              }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`skill-tag ${isVisible ? 'skill-tag-enter' : 'opacity-0'}`}
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                    }}
                  >
                    {skill.iconType === "image" ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-5 h-5 md:w-6 md:h-6 object-contain"
                      />
                    ) : (
                      <span className="text-lg md:text-xl">{skill.icon}</span>
                    )}
                    <span className="text-sm md:text-base font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
