import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-20 px-5 lg:px-20 flex flex-col justify-center relative font-mono overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-ide-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-ide-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#79c0ff]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1400px] mx-auto w-full z-10 mt-10">
        
        {/* Left Column - Terminal Boot Sequence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          
          <div className="ide-window w-full mb-8">
            <div className="ide-header">
              <div className="mac-dots">
                <div className="mac-dot dot-red"></div>
                <div className="mac-dot dot-yellow"></div>
                <div className="mac-dot dot-green"></div>
              </div>
              <span className="text-[#8b949e] text-xs flex items-center"><Terminal size={12} className="mr-2" /> nuruzzaman@system: ~</span>
            </div>
            
            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed">
              
              {/* Boot Sequence 1 */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="flex mb-1">
                  <span className="text-[#7ee787] mr-3 shrink-0">nuruzzaman@system:~$</span> 
                  <span className="text-[#c9d1d9]">whoami</span>
                </div>
                <div className="text-[#79c0ff] mb-6 font-bold text-xl md:text-3xl tracking-tight">Nuruzzaman</div>
              </motion.div>

              {/* Boot Sequence 2 */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                <div className="flex mb-1">
                  <span className="text-[#7ee787] mr-3 shrink-0">nuruzzaman@system:~$</span> 
                  <span className="text-[#c9d1d9]">./get_role.sh</span>
                </div>
                <div className="text-[#ff7b72] mb-6 flex items-center">
                  <span className="mr-2 text-xl font-bold">&gt;</span> 
                  <span className="text-lg md:text-xl font-bold">MERN Stack & GenAI Developer</span>
                </div>
              </motion.div>

              {/* Boot Sequence 3 */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                <div className="flex mb-1">
                  <span className="text-[#7ee787] mr-3 shrink-0">nuruzzaman@system:~$</span> 
                  <span className="text-[#c9d1d9]">cat mission.txt</span>
                </div>
                <div className="text-[#c9d1d9] font-sans text-lg mb-6 max-w-lg leading-relaxed border-l-2 border-[#79c0ff] pl-4">
                  I engineer scalable web applications and integrate AI-powered features to create smarter user experiences.
                </div>
              </motion.div>

              {/* Cursor */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} className="flex items-center mt-2">
                <span className="text-[#7ee787] mr-3 shrink-0">nuruzzaman@system:~$</span>
                <span className="w-2.5 h-5 bg-[#c9d1d9] animate-blink inline-block"></span>
              </motion.div>
              
            </div>
          </div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-sans font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] group">
              <span>Contact Me</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" download className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#161b22] text-[#c9d1d9] px-6 py-3 rounded-md font-sans font-semibold hover:bg-[#30363d] transition-colors border border-[#30363d] hover:border-[#79c0ff]/50 hover:text-white">
              <span>Download Resume</span>
              <Download size={18} />
            </a>
          </motion.div>

        </motion.div>

        {/* Right Column - Code Motif Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-5 hidden lg:flex items-center justify-center relative h-[500px]"
        >
          {/* Abstract Code Symbol Composition */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border border-dashed border-[#30363d] rounded-full"
            ></motion.div>
            
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] border border-[#30363d] rounded-full"
            ></motion.div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
              <div className="text-[#79c0ff] text-[10rem] font-bold font-mono tracking-tighter opacity-80 mix-blend-screen select-none">
                &lt;/&gt;
              </div>
              <div className="absolute top-[20%] right-[10%] text-[#d2a8ff] text-5xl font-mono font-bold select-none opacity-60">
                &#123; &#125;
              </div>
              <div className="absolute bottom-[20%] left-[10%] text-[#ff7b72] text-6xl font-mono font-bold select-none opacity-60">
                =&gt;
              </div>
              <div className="absolute top-[10%] left-[20%] text-[#f2cc60] text-4xl font-mono font-bold select-none opacity-60">
                ()
              </div>
            </div>

            {/* Floating stats badges */}
            <div className="absolute top-1/4 -right-4 bg-[#161b22] border border-[#30363d] px-4 py-2 rounded flex flex-col text-xs font-mono shadow-xl z-20">
              <span className="text-[#8b949e] mb-1">Status:</span>
              <span className="text-[#7ee787]">10+ Projects Compiled</span>
            </div>

            <div className="absolute bottom-1/4 -left-4 bg-[#161b22] border border-[#30363d] px-4 py-2 rounded flex flex-col text-xs font-mono shadow-xl z-20">
              <span className="text-[#8b949e] mb-1">Modules:</span>
              <span className="text-[#a5d6ff]">MERN, AI_Agents</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
