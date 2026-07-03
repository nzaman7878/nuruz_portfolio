import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Briefcase, Link2, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-5 lg:px-20 lg:pl-32 flex flex-col justify-center relative font-mono bg-[#13151a]">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ffcc]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-[1500px] mx-auto w-full z-10">
        
        {/* Left Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-4"
        >
          <div 
            className="bg-[#1a1c23]/80 p-8 border-l-[3px] border-t-[3px] border-[#00ffcc] shadow-[-10px_-10px_30px_-10px_rgba(0,255,204,0.3)] backdrop-blur-sm"
            style={{ borderRadius: '100px 0px 100px 0px' }}
          >
            <div className="flex flex-col items-center mb-8">
              <div className="w-24 h-24 rounded-full border-4 border-[#00ffcc] overflow-hidden mb-4 p-1">
                {/* Fallback avatar */}
                <div className="w-full h-full bg-[#00ffcc]/20 rounded-full flex items-center justify-center">
                  <UserAvatar />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white font-sans tracking-wide">Nuruzzaman</h2>
              <p className="text-white/60 text-xs tracking-widest uppercase mt-1">Full-Stack Developer</p>
            </div>

            <div className="space-y-4 mb-8 text-xs text-white/80 font-sans tracking-wide">
              <div className="flex items-center space-x-4">
                <Mail size={16} className="text-[#00ffcc]" />
                <span>nuruzzaman@examplemail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={16} className="text-[#00ffcc]" />
                <span>Turkey</span>
              </div>
              <div className="flex items-center space-x-4">
                <Briefcase size={16} className="text-[#00ffcc]" />
                <span>Full-Time / Freelancer</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link2 size={16} className="text-[#00ffcc]" />
                <span>www.nuruzzaman.com</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['HTML', 'CSS', 'JS', 'React'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#00ffcc] text-black text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="flex items-center space-x-3 bg-white text-black px-6 py-3 rounded-full hover:bg-[#00ffcc] transition-colors font-bold text-sm shadow-lg">
                <span>Download CV</span>
                <Download size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Middle Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-sans font-bold text-[#00ffcc] tracking-tight">
              Developer
            </h1>
          </div>

          <div className="text-white/50 text-xs mb-2 tracking-widest">&lt;h1&gt;</div>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white leading-tight mb-2 pl-4">
            Hey <br/>
            I'm <span className="text-[#00ffcc]">Nuruzzaman</span>, <br/>
            Full-Stack Developer <span className="text-white/50 text-xs font-mono font-normal tracking-widest">&lt;/h1&gt;</span>
          </h2>

          <div className="text-white/50 text-xs mb-2 mt-6 tracking-widest">&lt;p&gt;</div>
          <p className="text-white/80 leading-relaxed text-sm md:text-base font-sans pl-4">
            I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done.
          </p>
          <div className="text-white/50 text-xs mt-2 tracking-widest">&lt;/p&gt;</div>

          <div className="mt-8 pl-4">
            <a href="#contact" className="inline-flex items-center space-x-2 text-[#00ffcc] font-sans font-bold text-xl hover:text-white transition-colors group">
              <span>Let's Talk</span>
              <ChevronRight size={24} className="border-2 border-[#00ffcc] rounded-full p-0.5 group-hover:border-white transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3 flex lg:justify-end mt-10 lg:mt-0"
        >
          <div className="bg-[#1a1c23] border border-white/10 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(0,255,204,0.05)] w-full lg:w-64 space-y-10">
            
            <div className="flex items-center space-x-4">
              <span className="text-5xl font-sans font-bold text-[#00ffcc]">4</span>
              <span className="text-white/80 text-xs uppercase font-sans font-bold tracking-widest leading-tight">Programming<br/>Language</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-5xl font-sans font-bold text-[#00ffcc]">6</span>
              <span className="text-white/80 text-xs uppercase font-sans font-bold tracking-widest leading-tight">Development<br/>Tools</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-5xl font-sans font-bold text-[#00ffcc]">8</span>
              <span className="text-white/80 text-xs uppercase font-sans font-bold tracking-widest leading-tight">Years of<br/>Experience</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

const UserAvatar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00ffcc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default Hero;
