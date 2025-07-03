
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Code } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Neural Network Dashboard",
      description: "AI-powered analytics platform with real-time data visualization",
      tech: ["React", "D3.js", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Quantum Commerce",
      description: "Next-gen e-commerce platform with AR product visualization",
      tech: ["Next.js", "Three.js", "WebXR", "Node.js"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Cyber Security Suite",
      description: "Advanced threat detection system with ML algorithms",
      tech: ["Vue.js", "Python", "Docker", "AWS"],
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Holographic Interface",
      description: "Futuristic UI components library with 3D interactions",
      tech: ["React", "Three.js", "GSAP", "TypeScript"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Space Mission Control",
      description: "Real-time spacecraft monitoring and control system",
      tech: ["Angular", "WebGL", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Crypto Trading Bot",
      description: "Automated cryptocurrency trading with advanced algorithms",
      tech: ["Python", "React", "Redis", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".project-card",
            { 
              opacity: 0, 
              y: 100, 
              scale: 0.8,
              rotationY: 45
            },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotationY: 0,
              duration: 0.8, 
              stagger: 0.2,
              ease: "power2.out"
            }
          );
        }
      });

      // Hover animations
      document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(card.querySelector('.card-glow'), {
            opacity: 1,
            scale: 1.1,
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(card.querySelector('.card-glow'), {
            opacity: 0,
            scale: 1,
            duration: 0.3
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="projects-section section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore my latest work in cutting-edge web development and digital innovation
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="card-glow absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 transition-opacity duration-300"></div>
              
              {/* Card Content */}
              <div className="glass-card p-6 h-full relative z-10">
                {/* Project Image */}
                <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-cyber-purple to-cyber-blue">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-neon-blue border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm rounded-lg hover:scale-105 transition-transform duration-200">
                      <ExternalLink size={16} weight="light" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-lg border border-white/20 hover:scale-105 transition-transform duration-200">
                      <Code size={16} weight="light" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
