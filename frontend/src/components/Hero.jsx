import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageSquare, MapPin, Mail, Briefcase, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-5 flex items-center bg-background relative overflow-hidden">
      
      {/* Topographic Lines Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #00ffcc 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium text-white tracking-wide">Developer</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: ID Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#252830] rounded-[2rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full"></div>
              
              <div className="flex flex-col items-center mb-8 relative z-10">
                <div className="w-24 h-24 rounded-[2rem] bg-[#2d313a] mb-4 border border-white/10 p-1 rounded-tl-none overflow-hidden relative">
                  {/* Placeholder for Profile Picture */}
                  <div className="w-full h-full bg-surface-bright rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                </div>
                <h2 className="text-2xl font-display font-bold text-white">Nuruzzaman</h2>
                <p className="text-on-surface-variant text-sm mt-1">Full-Stack Developer</p>
              </div>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center space-x-3 text-sm text-on-surface-variant">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-on-surface-variant">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Remote / Earth</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-on-surface-variant">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span>Available for work</span>
                </div>
              </div>

              <button className="w-full py-3 px-4 rounded-xl border border-primary text-primary hover:bg-primary hover:text-[#003329] transition-all font-medium flex items-center justify-center space-x-2 relative z-10 group">
                <span>Download CV</span>
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Side: Intro & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col justify-center h-full pt-4"
          >
            <div className="flex flex-col md:flex-row gap-12">
              
              {/* Intro Text */}
              <div className="flex-1">
                <p className="text-white text-lg mb-2">&lt; h1 &gt;</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 pl-4 border-l border-white/10">
                  Hey<br/>
                  I'm <span className="text-primary">Nuruzzaman</span>,<br/>
                  Full-Stack Developer
                </h2>
                <p className="text-white text-lg mb-6">&lt;/ h1 &gt;</p>
                
                <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
                  I help businesses grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done.
                </p>

                <a href="#contact" className="inline-flex items-center space-x-2 text-primary font-medium group text-lg">
                  <span>Let's Talk</span>
                  <MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-col space-y-8 md:w-48">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-display font-bold text-primary">4</span>
                  <span className="text-sm text-on-surface-variant leading-tight">Programming<br/>Language</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-display font-bold text-primary">6</span>
                  <span className="text-sm text-on-surface-variant leading-tight">Development<br/>Tools</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-display font-bold text-primary">8</span>
                  <span className="text-sm text-on-surface-variant leading-tight">Years of<br/>Experience</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
