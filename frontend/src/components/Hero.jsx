import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Briefcase, Link2, ChevronRight } from 'lucide-react';

const springAnim = {
  type: "spring",
  stiffness: 100,
  damping: 15
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-40 pb-20 px-5 lg:px-20 lg:pl-32 flex flex-col justify-center relative font-sans">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-[1400px] mx-auto w-full z-10">
        
        {/* Left Card - Profile Bento Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={springAnim}
          className="lg:col-span-4"
        >
          <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center">
            
            <div className="relative mb-8 group">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] p-1 shadow-[0_0_30px_rgba(139,92,246,0.4)] group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center overflow-hidden">
                   <UserAvatar />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white font-display tracking-tight mb-2">Nuruzzaman</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-sm tracking-widest uppercase font-semibold mb-8">Full-Stack Developer</p>

            <div className="space-y-4 mb-10 w-full text-sm text-white/70 font-sans">
              <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                <Mail size={18} className="text-[#8b5cf6]" />
                <span className="truncate">nuruzzaman@examplemail.com</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                <MapPin size={18} className="text-[#8b5cf6]" />
                <span>Turkey</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                <Briefcase size={18} className="text-[#8b5cf6]" />
                <span>Full-Time / Freelancer</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                <Link2 size={18} className="text-[#8b5cf6]" />
                <span>www.nuruzzaman.com</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['HTML', 'CSS', 'JS', 'React'].map((skill) => (
                <span key={skill} className="px-4 py-1.5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] text-xs font-mono rounded-full tracking-wider hover:bg-[#8b5cf6] hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>

            <div className="w-full flex justify-center">
              <button className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white px-6 py-4 rounded-xl font-display font-bold hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all hover:-translate-y-1">
                <span>Download CV</span>
                <Download size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Middle Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ...springAnim }}
          className="lg:col-span-5 flex flex-col justify-center px-4 lg:px-8"
        >
          <div className="mb-6">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-gradient tracking-tighter leading-none">
              Developer
            </h1>
          </div>

          <div className="text-white/30 text-xs mb-4 tracking-widest font-mono">&lt;h1&gt;</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4 pl-4 border-l-2 border-white/10">
            Hey <br/>
            I'm <span className="text-[#06b6d4]">Nuruzzaman</span>, <br/>
            Full-Stack Developer <span className="text-white/30 text-xs font-mono font-normal tracking-widest">&lt;/h1&gt;</span>
          </h2>

          <div className="text-white/30 text-xs mb-4 mt-8 tracking-widest font-mono">&lt;p&gt;</div>
          <p className="text-white/80 leading-relaxed text-base md:text-lg font-sans pl-4 border-l-2 border-white/20 max-w-prose">
            I help businesses grow by crafting amazing, fluid web experiences. If you're looking for a developer that focuses on premium aesthetics and robust architecture, let's connect.
          </p>
          <div className="text-white/30 text-xs mt-4 tracking-widest font-mono">&lt;/p&gt;</div>

          <div className="mt-12 pl-4">
            <a href="#contact" className="inline-flex items-center space-x-3 text-white font-display font-semibold text-lg hover:text-[#d946ef] transition-colors group">
              <span>Let's Talk</span>
              <ChevronRight size={24} className="bg-white/10 rounded-full p-1 group-hover:bg-[#d946ef] group-hover:text-white transition-all group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Stats - Bento Minis */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, ...springAnim }}
          className="lg:col-span-3 flex lg:justify-end mt-10 lg:mt-0"
        >
          <div className="flex flex-col space-y-6 w-full lg:w-64">
            
            <div className="glass-card rounded-3xl p-6 flex items-center space-x-6 hover:scale-105 transition-transform">
              <span className="text-5xl font-display font-bold text-[#8b5cf6]">4</span>
              <span className="text-white/80 text-xs uppercase font-sans font-bold tracking-widest leading-relaxed">Programming<br/>Language</span>
            </div>

            <div className="glass-card rounded-3xl p-6 flex items-center space-x-6 hover:scale-105 transition-transform">
              <span className="text-5xl font-display font-bold text-[#d946ef]">6</span>
              <span className="text-white/80 text-xs uppercase font-sans font-bold tracking-widest leading-relaxed">Development<br/>Tools</span>
            </div>

            <div className="glass-card rounded-3xl p-6 flex items-center space-x-6 hover:scale-105 transition-transform">
              <span className="text-5xl font-display font-bold text-[#06b6d4]">8</span>
              <span className="text-white/80 text-xs uppercase font-sans font-bold tracking-widest leading-relaxed">Years of<br/>Experience</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

const UserAvatar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
