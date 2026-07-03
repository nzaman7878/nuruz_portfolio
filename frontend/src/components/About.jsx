import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-background border-t border-white/5 overflow-hidden">
      
      {/* Topographic Lines Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #00ffcc 2px, transparent 2px)', 
          backgroundSize: '50px 50px' 
        }}
      ></div>

      <div className="container mx-auto px-5 md:px-20 max-w-[1200px] relative z-10">
        
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl font-display font-medium text-white px-8 py-2 border border-primary rounded-full relative">
              About Me
              {/* Decorative nodes */}
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-primary rounded-full"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
            </h2>
          </motion.div>
          {/* Vertical connecting line */}
          <div className="w-[1px] h-12 bg-white/10 mt-4 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-primary rounded-full bg-background"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1e2029] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
              
              {/* Terminal Header */}
              <div className="bg-[#2d313a] px-4 py-3 flex items-center space-x-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="flex-1 text-center text-on-surface-variant text-xs font-sans">
                  about-me.txt
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 text-on-surface-variant leading-relaxed">
                <p className="text-primary mb-4">&gt; Hello!</p>
                <p className="mb-4">
                  My name is <span className="text-white">Nuruzzaman</span> and I specialize in web development that utilizes <span className="text-primary">HTML, CSS, JS, and REACT</span> etc.
                </p>
                <p className="mb-4">
                  I am a highly motivated individual and eternal optimist dedicated to writing clean, concise, robust code that works. Striving to never stop learning and improving.
                </p>
                <p className="mb-4">
                  When I'm not coding, I am <span className="text-primary border-b border-primary/30">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-primary border-b border-primary/30">photography</span>.
                </p>
                <p>
                  I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                </p>
                <p className="text-primary mt-4 animate-pulse">_</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background box */}
            <div className="absolute inset-0 border border-primary/30 rounded-2xl translate-x-4 translate-y-4"></div>
            
            <div className="relative bg-surface rounded-2xl overflow-hidden aspect-video border border-white/10">
              {/* Placeholder for the user coding image */}
              <div className="w-full h-full bg-[#252830] flex items-center justify-center">
                <span className="text-on-surface-variant flex flex-col items-center">
                  <span className="text-4xl mb-2">💻</span>
                  <span>Workspace Image</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
