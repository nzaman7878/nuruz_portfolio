import React from 'react';
import { motion } from 'framer-motion';
import { FileJson, Copy, Check } from 'lucide-react';

const About = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nuruzzaman@example.com"); // Replace with actual email
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative bg-ide-bg overflow-hidden font-mono">
      
      <div className="container mx-auto px-5 lg:px-20 max-w-[1200px] relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full mb-12 flex items-center space-x-4">
          <span className="text-[#a855f7] font-bold text-xl">const</span>
          <h2 className="text-3xl font-bold text-[#f0f6fc]">AboutMe</h2>
          <span className="text-on-background text-3xl">=</span>
          <span className="text-[#ffbd2e] text-3xl">&#123;</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          
          {/* Left Column: Code Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="ide-window w-full h-full text-sm md:text-base leading-relaxed">
              
              <div className="ide-header justify-between">
                <div className="flex items-center text-syntax-comment">
                  <FileJson size={16} className="mr-2 text-syntax-constant" />
                  <span>profile.json</span>
                </div>
                <button onClick={handleCopy} className="text-syntax-comment hover:text-on-background transition-colors" title="Copy Contact Info">
                  {copied ? <Check size={16} className="text-syntax-string-green" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="p-6 flex">
                {/* Line Numbers */}
                <div className="hidden sm:flex flex-col text-syntax-comment pr-6 select-none text-right border-r border-ide-border mr-6">
                  {Array.from({length: 18}).map((_, i) => <span key={i}>{i+1}</span>)}
                </div>

                {/* Code Content */}
                <div className="flex-1 overflow-x-auto">
                  <div className="text-on-background">&#123;</div>
                  
                  <div className="pl-4 md:pl-8">
                    <div>
                      <span className="text-syntax-variable">"name"</span><span className="text-on-background">: </span>
                      <span className="text-syntax-string">"Nuruzzaman"</span><span className="text-on-background">,</span>
                    </div>
                    
                    <div>
                      <span className="text-syntax-variable">"based_in"</span><span className="text-on-background">: </span>
                      <span className="text-syntax-string">"Assam, India"</span><span className="text-on-background">,</span>
                    </div>

                    <div>
                      <span className="text-syntax-variable">"role"</span><span className="text-on-background">: </span>
                      <span className="text-syntax-string">"Software Developer / MERN Stack"</span><span className="text-on-background">,</span>
                    </div>

                    <div className="mt-2">
                      <span className="text-syntax-variable">"education"</span><span className="text-on-background">: [</span>
                    </div>
                    <div className="pl-4 md:pl-8">
                      <div><span className="text-syntax-string">"MSc IT @ Gauhati University"</span><span className="text-on-background">,</span></div>
                      <div><span className="text-syntax-string">"BSc IT @ B. Borooah College"</span></div>
                    </div>
                    <div><span className="text-on-background">],</span></div>

                    <div className="mt-2">
                      <span className="text-syntax-variable">"bio"</span><span className="text-on-background">: </span>
                      <span className="text-syntax-string font-sans text-base leading-relaxed inline-block mt-1 border-l-2 border-ide-border pl-3 py-1 bg-ide-surface/50 rounded-r">
                        "I am a passionate MERN Stack Developer with a strong interest in integrating Generative AI to create smarter, highly scalable web applications. As a fresher, I have built 10+ practical projects to strengthen my development skills. I am currently seeking a role where I can contribute, learn from real-world challenges, and grow as an engineer."
                      </span>
                    </div>
                  </div>

                  <div className="text-on-background">&#125;</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[350px] aspect-[3/4] ide-window overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#79c0ff]/30 transition-colors duration-500 pointer-events-none"></div>
              {/* Overlay lines to look like a terminal monitor */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)' }}></div>
            </div>
          </motion.div>

        </div>
        
        {/* Section Footer */}
        <div className="w-full mt-4 flex justify-end">
          <span className="text-[#ffbd2e] text-3xl">&#125;</span><span className="text-on-background text-3xl">;</span>
        </div>

      </div>
    </section>
  );
};

export default About;
