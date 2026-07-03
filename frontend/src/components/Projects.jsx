import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'LMS (Learning Management System)',
      description: 'A comprehensive educational platform for managing courses, tracking student progress, and facilitating interactive online learning with a robust backend architecture.',
      tag: 'Full-Stack',
      tech: 'MERN Stack',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce storefront featuring secure authentication, payment gateway integration, dynamic cart management, and an admin dashboard.',
      tag: 'Full-Stack',
      tech: 'React, Node.js',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'AI Battle Arena',
      description: 'An innovative multiplayer platform where AI agents compete. Integrated with Large Language Models to power agent decision-making and dynamic interactions.',
      tag: 'Generative AI',
      tech: 'LangChain, Next.js',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Perplexity Clone',
      description: 'An intelligent search engine built using RAG (Retrieval-Augmented Generation) to fetch real-time data and synthesize accurate, cited answers.',
      tag: 'Generative AI',
      tech: 'RAG, Vector DBs',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Moodify',
      description: 'A mood-based media recommendation engine that analyzes user input and suggests perfectly tailored content using AI sentiment analysis.',
      tag: 'Full-Stack AI',
      tech: 'MERN, Claude API',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Snitch',
      description: 'A real-time reporting and anonymous tipping application designed with end-to-end encryption and a sleek, intuitive mobile-first interface.',
      tag: 'Frontend',
      tech: 'React, Tailwind',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Doctor Booking Management System',
      description: 'A healthcare portal that streamlines appointment scheduling, manages patient records, and provides real-time availability for multiple clinics.',
      tag: 'Full-Stack',
      tech: 'MERN Stack',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section id="projects" className="py-32 relative bg-[#1a1c23] border-t border-white/5 font-sans overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-5 lg:px-20 max-w-[1400px] relative z-10">
        
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <span className="text-white/80 font-mono text-sm tracking-wider">10+ PRACTICAL PROJECTS</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Featured Work</h2>
          <p className="text-white/60 font-sans text-base max-w-2xl">A selection of my recent full-stack applications and AI-integrated platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-[2rem] overflow-hidden group border border-white/10 hover:border-[#06b6d4]/50 transition-colors duration-500 flex flex-col"
            >
              {/* Image Header */}
              <div className="w-full h-48 sm:h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#1a1c23]/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono tracking-wider text-white border border-white/10">
                    {project.tag}
                  </span>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#06b6d4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] uppercase font-mono tracking-widest mb-1">Tech Stack</span>
                    <span className="text-[#8b5cf6] font-mono text-xs font-semibold tracking-wider">{project.tech}</span>
                  </div>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#06b6d4] hover:text-[#0a0a0a] transition-all group-hover:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
