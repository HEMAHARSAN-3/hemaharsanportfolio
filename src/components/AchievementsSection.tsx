
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Medal, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const participations = [
    {
      id: 1,
      title: "National Level 36-Hour HAC-Kathon'25",
      description: "Human-Animal Conflict Hackathon",
      organizer: "Sri Ramakrishna Engineering College & TN Forest Dept",
      date: "Mar 14–15, 2025",
      icon: Trophy,
      type: "hackathon"
    },
    {
      id: 2,
      title: "Automotive Cyber Security Workshop",
      description: "Technical Workshop on Cybersecurity",
      organizer: "Lumino 2K24 Symposium, IEEE SB-64491, Bannari Amman Institute of Technology",
      date: "2024",
      icon: Lightbulb,
      type: "workshop"
    },
    {
      id: 3,
      title: "Programming Quiz & Debugging Competition",
      description: "1st Place Winner",
      organizer: "Lumino 2K24 Symposium, IEEE SB-64491",
      date: "2024",
      icon: Trophy,
      type: "competition"
    },
    {
      id: 4,
      title: "Circuit Quiz & Debugging Competition",
      description: "4th Place",
      organizer: "Lumino 2K24 Symposium, IEEE SB-64491",
      date: "2024",
      icon: Medal,
      type: "competition"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Introduction to Industry 4.0 & Industrial IoT",
      institution: "NPTEL – IIT Kharagpur",
      credential: "ELITE Grade",
      icon: Trophy
    },
    {
      id: 2,
      title: "Advanced R Programming for Data Analytics in Business",
      institution: "NPTEL – IIT Kanpur",
      credential: "Certified",
      icon: Medal
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".section-title",
            { opacity: 0, y: 50, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
          );
        }
      });

      // Cards animation
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(".achievement-card",
            { 
              opacity: 0, 
              y: 80, 
              scale: 0.9,
              filter: "blur(10px)"
            },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: "blur(0px)",
              duration: 1, 
              stagger: 0.3,
              ease: "power3.out"
            }
          );
        }
      });

      // Item animations
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(".achievement-item",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.5 }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="achievements" 
      ref={sectionRef} 
      className="dark-section section-padding pt-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-title">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Showcasing my journey through competitions, workshops, and professional certifications
          </p>
        </div>

        {/* Main Cards Container */}
        <div 
          ref={cardsRef}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left Card: Participation */}
          <div className="achievement-card glass-card p-8 hover:scale-[1.02] transition-all duration-300 border border-neon-blue/30 hover:border-neon-blue/60">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg">
                  <Trophy size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">
                  Hackathons & Competitions
                </h3>
              </div>

              <div className="space-y-6">
                {participations.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={item.id}
                      className="achievement-item group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-blue/40 transition-all duration-300 hover:bg-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent size={20} className="text-neon-blue" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-white/80 text-sm mb-1">
                            {item.description}
                          </p>
                          <p className="text-white/60 text-sm mb-1">
                            {item.organizer}
                          </p>
                          <p className="text-neon-purple text-sm font-medium">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Card: Certifications */}
          <div className="achievement-card glass-card p-8 hover:scale-[1.02] transition-all duration-300 border border-neon-purple/30 hover:border-neon-purple/60">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg">
                  <Medal size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">
                  Professional Certifications
                </h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert) => {
                  const IconComponent = cert.icon;
                  return (
                    <div 
                      key={cert.id}
                      className="achievement-item group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-purple/40 transition-all duration-300 hover:bg-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent size={24} className="text-neon-purple" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-purple transition-colors duration-300">
                            {cert.title}
                          </h4>
                          <div className="space-y-2">
                            <p className="text-white/80 text-sm">
                              <span className="text-neon-blue font-medium">Institution:</span> {cert.institution}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 backdrop-blur-sm rounded-full text-xs text-neon-purple border border-neon-purple/30">
                                {cert.credential}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add more section hint */}
              <div className="mt-8 p-4 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-xl border border-neon-purple/20">
                <p className="text-white/60 text-sm text-center">
                  Continuously expanding my knowledge through professional development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
