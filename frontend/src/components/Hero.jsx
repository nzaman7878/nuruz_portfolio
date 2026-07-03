import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Terminal } from 'lucide-react';

const Hero = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [hasCleared, setHasCleared] = useState(false);
  const inputRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = null;

      if (cmd === 'clear') {
        setHasCleared(true);
        setHistory([]);
        setInput('');
        return;
      } else if (cmd === 'whoami') {
        output = <div className="text-syntax-variable mb-4 font-bold text-xl md:text-3xl tracking-tight">Nuruzzaman</div>;
      } else if (cmd === './get_role.sh' || cmd === 'get_role.sh') {
        output = (
          <div className="text-syntax-keyword mb-4 flex items-center">
            <span className="mr-2 text-xl font-bold">&gt;</span> 
            <span className="text-lg md:text-xl font-bold">MERN Stack & GenAI Developer</span>
          </div>
        );
      } else if (cmd === 'cat mission.txt' || cmd === 'mission.txt') {
        output = (
          <div className="text-on-background font-sans text-lg mb-4 max-w-lg leading-relaxed border-l-2 border-syntax-variable pl-4">
            I engineer scalable web applications and integrate AI-powered features to create smarter user experiences.
          </div>
        );
      } else if (cmd === 'help') {
        output = <div className="text-on-background mb-4 text-sm md:text-base">Available commands:<br/><span className="text-syntax-variable">whoami</span>, <span className="text-syntax-variable">./get_role.sh</span>, <span className="text-syntax-variable">cat mission.txt</span>, <span className="text-syntax-variable">clear</span>, <span className="text-syntax-variable">help</span></div>;
      } else if (cmd !== '') {
        output = <div className="text-red-500 mb-4">command not found: {cmd}</div>;
      }

      if (cmd !== '') {
        setHistory([...history, { command: input, output }]);
      }
      setInput('');
      
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-20 px-5 lg:px-20 flex flex-col justify-center relative font-mono overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-ide-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-ide-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-syntax-variable/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1400px] mx-auto w-full z-10 mt-10">
        
        {/* Left Column - Terminal Boot Sequence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          
          <div className="ide-window w-full mb-8 shadow-2xl">
            <div className="ide-header">
              <div className="mac-dots">
                <div className="mac-dot dot-red"></div>
                <div className="mac-dot dot-yellow"></div>
                <div className="mac-dot dot-green"></div>
              </div>
              <span className="text-syntax-comment text-xs flex items-center"><Terminal size={12} className="mr-2" /> nuruzzaman@system: ~</span>
            </div>
            
            <div 
              className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed h-[380px] overflow-y-auto no-scrollbar"
              onClick={() => inputRef.current && inputRef.current.focus()}
            >
              
              {!hasCleared && (
                <>
                  {/* Boot Sequence 1 */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <div className="flex mb-1">
                      <span className="text-syntax-string-green mr-3 shrink-0">nuruzzaman@system:~$</span> 
                      <span className="text-on-background">whoami</span>
                    </div>
                    <div className="text-syntax-variable mb-6 font-bold text-xl md:text-3xl tracking-tight">Nuruzzaman</div>
                  </motion.div>

                  {/* Boot Sequence 2 */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                    <div className="flex mb-1">
                      <span className="text-syntax-string-green mr-3 shrink-0">nuruzzaman@system:~$</span> 
                      <span className="text-on-background">./get_role.sh</span>
                    </div>
                    <div className="text-syntax-keyword mb-6 flex items-center">
                      <span className="mr-2 text-xl font-bold">&gt;</span> 
                      <span className="text-lg md:text-xl font-bold">MERN Stack & GenAI Developer</span>
                    </div>
                  </motion.div>

                  {/* Boot Sequence 3 */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                    <div className="flex mb-1">
                      <span className="text-syntax-string-green mr-3 shrink-0">nuruzzaman@system:~$</span> 
                      <span className="text-on-background">cat mission.txt</span>
                    </div>
                    <div className="text-on-background font-sans text-lg mb-6 max-w-lg leading-relaxed border-l-2 border-[#79c0ff] pl-4">
                      I engineer scalable web applications and integrate AI-powered features to create smarter user experiences.
                    </div>
                  </motion.div>
                </>
              )}

              {history.map((item, index) => (
                <div key={index}>
                  <div className="flex mb-1">
                    <span className="text-syntax-string-green mr-3 shrink-0">nuruzzaman@system:~$</span> 
                    <span className="text-on-background">{item.command}</span>
                  </div>
                  {item.output}
                </div>
              ))}

              {/* Interactive Cursor Input */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 2.6 }} 
                className="flex items-center mt-2"
              >
                <span className="text-syntax-string-green mr-3 shrink-0">nuruzzaman@system:~$</span>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="bg-transparent border-none outline-none text-on-background flex-1 caret-white"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
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
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#f0f6fc] text-[#0d1117] px-6 py-3 rounded-md font-sans font-bold hover:bg-gray-300 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] group">
              <span>Contact Me</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" download className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-ide-surface text-on-background px-6 py-3 rounded-md font-sans font-semibold hover:bg-ide-border transition-colors border border-ide-border hover:border-[#79c0ff]/50 hover:text-syntax-variable">
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
              className="absolute w-[400px] h-[400px] border border-dashed border-ide-border rounded-full"
            ></motion.div>
            
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] border border-ide-border rounded-full"
            ></motion.div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
              <div className="text-syntax-variable text-[10rem] font-bold font-mono tracking-tighter opacity-80 mix-blend-screen select-none">
                &lt;/&gt;
              </div>
              <div className="absolute top-[20%] right-[10%] text-syntax-function text-5xl font-mono font-bold select-none opacity-60">
                &#123; &#125;
              </div>
              <div className="absolute bottom-[20%] left-[10%] text-syntax-keyword text-6xl font-mono font-bold select-none opacity-60">
                =&gt;
              </div>
              <div className="absolute top-[10%] left-[20%] text-syntax-constant text-4xl font-mono font-bold select-none opacity-60">
                ()
              </div>
            </div>

            {/* Floating stats badges */}
            <div className="absolute top-1/4 -right-4 bg-ide-surface border border-ide-border px-4 py-2 rounded flex flex-col text-xs font-mono shadow-xl z-20">
              <span className="text-syntax-comment mb-1">Status:</span>
              <span className="text-syntax-string-green">10+ Projects Compiled</span>
            </div>

            <div className="absolute bottom-1/4 -left-4 bg-ide-surface border border-ide-border px-4 py-2 rounded flex flex-col text-xs font-mono shadow-xl z-20">
              <span className="text-syntax-comment mb-1">Modules:</span>
              <span className="text-syntax-string">MERN, AI_Agents</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
