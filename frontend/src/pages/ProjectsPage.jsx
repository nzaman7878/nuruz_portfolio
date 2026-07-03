import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, FileCode, FolderOpen, ExternalLink, Terminal, Menu, X } from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

// Data from the original Projects.jsx, but enriched for the detailed view
const projectsData = [
  {
    id: 'lms_platform',
    title: 'LMS (Learning Management System)',
    description: 'A comprehensive educational platform for managing courses, tracking student progress, and facilitating interactive online learning with a robust backend architecture.',
    features: [
      'Role-based access control (Admin, Instructor, Student)',
      'Real-time progress tracking and analytics',
      'Secure payment gateway integration for course enrollment',
      'Video streaming and resource management'
    ],
    tag: 'Full-Stack',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200',
    fileName: 'lms_platform.ts',
    type: 'typescript',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 'ecommerce_core',
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce storefront featuring secure authentication, payment gateway integration, dynamic cart management, and an admin dashboard.',
    features: [
      'JWT Authentication and Role Management',
      'Stripe Payment Gateway Integration',
      'Dynamic Cart and State Management with Redux',
      'Comprehensive Admin Dashboard for Inventory'
    ],
    tag: 'Full-Stack',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    fileName: 'ecommerce_core.jsx',
    type: 'react',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 'ai_arena',
    title: 'AI Battle Arena',
    description: 'An innovative multiplayer platform where AI agents compete. Integrated with Large Language Models to power agent decision-making and dynamic interactions.',
    features: [
      'Real-time multiplayer WebSocket integration',
      'LLM integration for agent decision making',
      'Dynamic prompt generation and context handling',
      'Interactive leaderboard and matchmaking'
    ],
    tag: 'Generative AI',
    tech: ['LangChain', 'Next.js', 'Socket.io', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1200',
    fileName: 'ai_arena.py',
    type: 'python',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 'rag_search',
    title: 'Perplexity Clone',
    description: 'An intelligent search engine built using RAG (Retrieval-Augmented Generation) to fetch real-time data and synthesize accurate, cited answers.',
    features: [
      'Vector Database Integration (Pinecone)',
      'Document chunking and semantic search',
      'Real-time web scraping and data synthesis',
      'Streaming responses with citations'
    ],
    tag: 'Generative AI',
    tech: ['Python', 'LangChain', 'Pinecone', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    fileName: 'rag_search.py',
    type: 'python',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 'moodify',
    title: 'Moodify',
    description: 'A mood-based media recommendation engine that analyzes user input and suggests perfectly tailored content using AI sentiment analysis.',
    features: [
      'Sentiment Analysis on user text input',
      'Dynamic Spotify/TMDB API integration',
      'Claude API for contextual recommendations',
      'Fluid, animation-heavy UI'
    ],
    tag: 'Full-Stack AI',
    tech: ['MERN', 'Claude API', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
    fileName: 'moodify_engine.ts',
    type: 'typescript',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 'snitch_app',
    title: 'Snitch',
    description: 'A real-time reporting and anonymous tipping application designed with end-to-end encryption and a sleek, intuitive mobile-first interface.',
    features: [
      'End-to-End Encryption for tips',
      'Real-time geolocation tracking',
      'Mobile-first responsive PWA design',
      'Secure anonymous authentication'
    ],
    tag: 'Frontend',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
    fileName: 'snitch_app.jsx',
    type: 'react',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 'doctor_booking',
    title: 'Doctor Booking System',
    description: 'A healthcare portal that streamlines appointment scheduling, manages patient records, and provides real-time availability for multiple clinics.',
    features: [
      'Complex calendar scheduling logic',
      'Doctor and Patient distinct dashboards',
      'Automated email reminders',
      'Medical record secure storage'
    ],
    tag: 'Full-Stack',
    tech: ['MERN Stack', 'NodeMailer', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
    fileName: 'doctor_booking.ts',
    type: 'typescript',
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

const getFileColor = (type) => {
  switch (type) {
    case 'typescript': return 'text-[#3178c6]';
    case 'react': return 'text-[#61dafb]';
    case 'python': return 'text-[#3572A5]';
    default: return 'text-syntax-variable';
  }
};

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [openTabs, setOpenTabs] = useState([projectsData[0]]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProjectSelect = (project) => {
    setActiveProject(project);
    if (!openTabs.find(t => t.id === project.id)) {
      setOpenTabs([...openTabs, project]);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after selecting a file
  };

  const handleCloseTab = (e, projectId) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t.id !== projectId);
    setOpenTabs(newTabs);
    if (activeProject.id === projectId) {
      setActiveProject(newTabs.length > 0 ? newTabs[newTabs.length - 1] : null);
    }
  };

  return (
    <div className="min-h-screen bg-ide-bg pt-[57px] font-mono text-on-background flex flex-col h-screen overflow-hidden">
      
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar / Explorer */}
        <div className={`w-64 border-r border-ide-border bg-ide-bg flex-shrink-0 flex-col absolute md:relative z-30 h-full ${isMobileMenuOpen ? 'flex shadow-[20px_0_50px_rgba(0,0,0,0.5)]' : 'hidden md:flex'}`}>
          <div className="px-4 py-2 text-xs font-semibold text-syntax-comment uppercase tracking-wider flex justify-between items-center">
            <span>Explorer</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-syntax-comment hover:text-white">
              <X size={16} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div 
              className="flex items-center px-2 py-1 cursor-pointer hover:bg-ide-panel transition-colors text-sm"
              onClick={() => setIsFolderOpen(!isFolderOpen)}
            >
              {isFolderOpen ? <ChevronDown size={16} className="mr-1" /> : <ChevronRight size={16} className="mr-1" />}
              <FolderOpen size={16} className="mr-2 text-syntax-variable" />
              <span className="font-bold">src/projects</span>
            </div>
            
            <AnimatePresence>
              {isFolderOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  {projectsData.map(project => (
                    <div 
                      key={project.id}
                      onClick={() => handleProjectSelect(project)}
                      className={`flex items-center pl-8 pr-2 py-1.5 cursor-pointer text-sm transition-colors ${activeProject?.id === project.id ? 'bg-ide-panel text-white' : 'text-syntax-comment hover:bg-ide-panel hover:text-on-background'}`}
                    >
                      <FileCode size={14} className={`mr-2 ${getFileColor(project.type)}`} />
                      <span className="truncate">{project.fileName}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col bg-ide-bg overflow-hidden relative">
          
          {/* Tabs */}
          <div className="flex border-b border-ide-border bg-ide-surface overflow-x-auto no-scrollbar items-center sticky top-0 z-10">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-syntax-comment hover:text-white border-r border-ide-border flex-shrink-0 h-full flex items-center justify-center bg-ide-bg"
            >
              <Menu size={18} />
            </button>
            {openTabs.map(tab => (
              <div 
                key={tab.id}
                onClick={() => setActiveProject(tab)}
                className={`flex items-center px-4 py-2 text-sm border-r border-ide-border min-w-[150px] max-w-[200px] cursor-pointer group ${activeProject?.id === tab.id ? 'bg-ide-bg text-on-background border-t-2 border-t-syntax-variable' : 'text-syntax-comment hover:bg-ide-panel'}`}
              >
                <FileCode size={14} className={`mr-2 flex-shrink-0 ${getFileColor(tab.type)}`} />
                <span className="truncate flex-1">{tab.fileName}</span>
                <button 
                  onClick={(e) => handleCloseTab(e, tab.id)}
                  className={`ml-2 p-0.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-ide-border transition-all ${activeProject?.id === tab.id ? 'opacity-100' : ''}`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            ))}
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {activeProject ? (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto pb-20"
              >
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between border-b border-ide-border pb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{activeProject.title}</h1>
                    <div className="flex items-center space-x-3 text-sm">
                      <span className="bg-green-600/10 text-syntax-string-green px-2 py-0.5 rounded border border-green-600/30">
                        {activeProject.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href={activeProject.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-syntax-comment hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-ide-panel border border-transparent hover:border-ide-border">
                      <GithubIcon size={16} />
                      <span className="text-sm">Repository</span>
                    </a>
                    <a href={activeProject.live} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-syntax-comment hover:text-syntax-variable transition-colors px-3 py-1.5 rounded-md hover:bg-ide-panel border border-transparent hover:border-ide-border">
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 border border-ide-border bg-[#050505] group">
                  <div className="absolute inset-0 bg-ide-bg/40 mix-blend-multiply z-10"></div>
                  {/* Terminal Scanline overlay */}
                  <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)' }}></div>
                  <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-syntax-variable text-lg font-bold mb-3 flex items-center">
                      <Terminal size={18} className="mr-2" />
                      Project_Overview
                    </h3>
                    <p className="text-on-background font-sans leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-syntax-variable text-lg font-bold mb-3 flex items-center">
                      <Terminal size={18} className="mr-2" />
                      Key_Features
                    </h3>
                    <ul className="space-y-2 font-sans">
                      {activeProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-on-background">
                          <span className="text-syntax-keyword mr-2 font-mono">{"->"}</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-syntax-variable text-lg font-bold mb-3 flex items-center">
                      <Terminal size={18} className="mr-2" />
                      Tech_Stack
                    </h3>
                    <div className="flex flex-wrap gap-2 p-4 bg-ide-surface rounded-lg border border-ide-border">
                      <span className="text-syntax-keyword">const</span> <span className="text-syntax-variable">technologies</span> <span className="text-syntax-keyword">=</span> <span className="text-on-background">[</span>
                      {activeProject.tech.map((tech, idx) => (
                        <React.Fragment key={idx}>
                          <span className="text-syntax-string">'{tech}'</span>
                          {idx < activeProject.tech.length - 1 && <span className="text-on-background">, </span>}
                        </React.Fragment>
                      ))}
                      <span className="text-on-background">];</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-syntax-comment">
                <FileCode size={48} className="mb-4 opacity-50" />
                <p>Select a file from the explorer to view details.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
