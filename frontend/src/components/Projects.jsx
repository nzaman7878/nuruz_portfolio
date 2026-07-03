import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LMS (Learning Management System)',
      description: 'A comprehensive educational platform for managing courses, tracking student progress, and facilitating interactive online learning with a robust backend architecture.',
      tag: 'Full-Stack',
      tech: 'MERN Stack',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600',
      fileName: 'lms_platform.ts'
    },
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce storefront featuring secure authentication, payment gateway integration, dynamic cart management, and an admin dashboard.',
      tag: 'Full-Stack',
      tech: 'React, Node.js',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
      fileName: 'ecommerce_core.jsx'
    },
    {
      title: 'AI Battle Arena',
      description: 'An innovative multiplayer platform where AI agents compete. Integrated with Large Language Models to power agent decision-making and dynamic interactions.',
      tag: 'Generative AI',
      tech: 'LangChain, Next.js',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600',
      fileName: 'ai_arena.py'
    },
    {
      title: 'Perplexity Clone',
      description: 'An intelligent search engine built using RAG (Retrieval-Augmented Generation) to fetch real-time data and synthesize accurate, cited answers.',
      tag: 'Generative AI',
      tech: 'RAG, Vector DBs',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
      fileName: 'rag_search.py'
    },
    {
      title: 'Moodify',
      description: 'A mood-based media recommendation engine that analyzes user input and suggests perfectly tailored content using AI sentiment analysis.',
      tag: 'Full-Stack AI',
      tech: 'MERN, Claude API',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600',
      fileName: 'moodify_engine.ts'
    },
    {
      title: 'Snitch',
      description: 'A real-time reporting and anonymous tipping application designed with end-to-end encryption and a sleek, intuitive mobile-first interface.',
      tag: 'Frontend',
      tech: 'React, Tailwind',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600',
      fileName: 'snitch_app.jsx'
    },
    {
      title: 'Doctor Booking Management System',
      description: 'A healthcare portal that streamlines appointment scheduling, manages patient records, and provides real-time availability for multiple clinics.',
      tag: 'Full-Stack',
      tech: 'MERN Stack',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600',
      fileName: 'doctor_booking.ts'
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#0d1117] font-mono overflow-hidden">
      
      <div className="container mx-auto px-5 lg:px-20 max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div className="w-full mb-12 flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-[#a855f7] font-bold text-xl">ls</span>
            <span className="text-[#c9d1d9] text-xl">-la</span>
            <span className="text-[#a5d6ff] text-xl">./projects</span>
          </div>
          <p className="text-[#8b949e] text-sm max-w-2xl">
            // A selection of my recent full-stack applications and AI-integrated platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="ide-window flex flex-col group border border-[#30363d] hover:border-[#79c0ff] transition-colors duration-500"
            >
              {/* Tab Header */}
              <div className="ide-header flex justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
                <div className="flex items-center text-[#8b949e] text-xs font-mono">
                  <FileCode size={14} className="mr-2 text-[#79c0ff]" />
                  <span>{project.fileName}</span>
                </div>
                <div className="flex space-x-1">
                  <span className="w-2 h-2 rounded-full bg-[#30363d] group-hover:bg-[#ffbd2e] transition-colors"></span>
                </div>
              </div>
              
              {/* Image Header with Terminal Overlay */}
              <div className="w-full h-48 relative overflow-hidden bg-[#050505]">
                <div className="absolute inset-0 bg-[#0d1117]/60 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Scanline effect */}
                <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)' }}></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-70 group-hover:opacity-100" 
                />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 z-30 flex gap-2">
                  <span className="bg-[#161b22]/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-[#c9d1d9] border border-[#30363d]">
                    {project.tag}
                  </span>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 bg-[#0d1117]">
                <h3 className="text-lg font-bold text-[#c9d1d9] mb-2 group-hover:text-[#79c0ff] transition-colors">
                  {project.title}
                </h3>
                
                <div className="text-[#8b949e] text-xs leading-relaxed mb-6 flex-1 italic">
                  /* {project.description} */
                </div>
                
                <div className="pt-4 border-t border-[#30363d] flex flex-col gap-4 mt-auto">
                  
                  {/* Tech Stack Array */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[#ff7b72] text-xs">const</span> 
                    <span className="text-[#c9d1d9] text-xs">stack = [</span>
                    {project.tech.split(',').map((tech, i, arr) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#a5d6ff] text-xs">'{tech.trim()}'</span>
                        {i < arr.length - 1 && <span className="text-[#c9d1d9] text-xs">, </span>}
                      </React.Fragment>
                    ))}
                    <span className="text-[#c9d1d9] text-xs">];</span>
                  </div>

                  {/* Links */}
                  <div className="flex justify-end space-x-3 text-[#8b949e]">
                    <a href="#" className="hover:text-[#c9d1d9] transition-colors" title="View Source">
                      <Github size={16} />
                    </a>
                    <a href="#" className="hover:text-[#79c0ff] transition-colors" title="Live Preview">
                      <ExternalLink size={16} />
                    </a>
                  </div>

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
