import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Code2, Sparkles, Terminal } from 'lucide-react';

const springAnim = {
  type: "spring",
  stiffness: 100,
  damping: 15
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-40 pb-20 px-5 lg:px-20 lg:pl-32 flex flex-col justify-center relative font-sans overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[600px] bg-gradient-to-br from-[#8b5cf6]/10 to-[#06b6d4]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1400px] mx-auto w-full z-10">
        
        {/* Left Column - Typography & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, ...springAnim }}
          className="lg:col-span-7 flex flex-col justify-center lg:pr-10"
        >
          <div className="mb-4 flex items-center space-x-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#06b6d4]"></span>
            <span className="text-[#06b6d4] font-mono text-sm tracking-widest font-semibold uppercase">MERN Stack & GenAI Developer</span>
          </div>

          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-extrabold text-white tracking-tighter leading-[0.9] mb-6">
              Building <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#06b6d4]">Digital</span> <br/>
              Futures
            </h1>
          </div>

          <div className="text-white/30 text-xs mb-4 tracking-widest font-mono">&lt;p&gt;</div>
          <p className="text-white/80 leading-relaxed text-lg md:text-xl font-sans pl-4 border-l-2 border-white/20 max-w-2xl">
            Hi, I'm <span className="text-white font-bold">Nuruzzaman</span>. I engineer scalable web applications and integrate AI-powered features to create smarter user experiences. Let's build something extraordinary.
          </p>
          <div className="text-white/30 text-xs mt-4 tracking-widest font-mono">&lt;/p&gt;</div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white px-8 py-4 rounded-full font-display font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all hover:-translate-y-1 group">
              <span>Let's Talk</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" download className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-display font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1">
              <span>Download CV</span>
              <Download size={20} className="text-white/70" />
            </a>
          </div>
        </motion.div>

        {/* Right Column - Visual Anchor & Bento Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, ...springAnim }}
          className="lg:col-span-5 relative h-[500px] lg:h-[650px] w-full flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Main Visual Base Card */}
          <div className="absolute inset-0 m-auto w-full max-w-[400px] h-[450px] lg:h-[550px] glass-card rounded-[3rem] overflow-hidden group">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/20 to-transparent opacity-50"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <div className="w-32 h-32 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out">
                <UserAvatar />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">Nuruzzaman</h3>
              <p className="text-white/60 font-mono text-sm tracking-wider">Based in Assam, India</p>
              
              <div className="mt-auto pt-8 flex gap-3 flex-wrap justify-center">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/70">React</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/70">Node.js</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/70">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Floating Element 1 - Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ...springAnim }}
            className="absolute -left-4 md:left-4 lg:-left-12 top-10 glass-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center">
              <Sparkles className="text-[#06b6d4]" size={24} />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-white leading-none mb-1">10+</p>
              <p className="text-white/60 text-xs font-mono uppercase tracking-wider">Projects</p>
            </div>
          </motion.div>

          {/* Floating Element 2 - Projects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ...springAnim }}
            className="absolute -right-4 md:right-4 lg:-right-8 top-1/2 -translate-y-1/2 glass-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center">
              <Code2 className="text-[#8b5cf6]" size={24} />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-white leading-none mb-1">AI</p>
              <p className="text-white/60 text-xs font-mono uppercase tracking-wider">Integrated</p>
            </div>
          </motion.div>

          {/* Floating Element 3 - Code Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, ...springAnim }}
            className="absolute -left-2 lg:-left-6 bottom-20 w-16 h-16 glass-card rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300"
          >
            <Terminal className="text-white/80" size={28} />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

const UserAvatar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default Hero;
