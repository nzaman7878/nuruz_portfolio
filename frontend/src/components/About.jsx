import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-[#13151a] overflow-hidden font-mono">
      
      {/* Topographic Lines Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 50 150, 100 100 T 200 100' fill='none' stroke='%2300ffcc' stroke-width='0.5'/%3E%3Cpath d='M0 50 Q 50 100, 100 50 T 200 50' fill='none' stroke='%2300ffcc' stroke-width='0.5'/%3E%3Cpath d='M0 150 Q 50 200, 100 150 T 200 150' fill='none' stroke='%2300ffcc' stroke-width='0.5'/%3E%3C/svg%3E")`, 
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      <div className="container mx-auto px-5 lg:px-20 max-w-[1200px] relative z-10 flex flex-col items-center">
        
        {/* Top Divider with 0 */}
        <div className="flex flex-col items-center mb-16">
          <div className="text-3xl font-sans text-[#00ffcc] font-bold mb-2">0</div>
          <div className="w-[2px] h-12 border-l-2 border-dashed border-white/40"></div>
        </div>

        {/* Title Section */}
        <div className="w-full flex justify-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-10 py-3 bg-[#0a0b0e] border-2 border-[#00ffcc] rounded-[1.5rem] shadow-[0_0_20px_rgba(0,255,204,0.2)]"
          >
            <h2 className="text-3xl font-bold text-white tracking-widest font-sans">About Me</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#1a1c23] rounded-[2rem] p-10 shadow-2xl relative">
              
              <div className="text-white/80 leading-relaxed text-sm md:text-base font-mono">
                <div className="text-white/40 text-xs mb-4 tracking-widest">&lt;p&gt;</div>
                <h3 className="text-[#00ffcc] text-3xl font-bold mb-6 font-sans">Hello!</h3>
                <p className="mb-6 font-sans text-white/90">
                  I'm Nuruzzaman and I specialize in web development that utilizes <span className="text-[#00ffcc] font-bold font-mono">HTML, CSS, JS,</span> and <span className="text-[#00ffcc] font-bold font-mono">REACT</span>.
                </p>
                <p className="mb-6 font-sans text-white/90">
                  I am a highly motivated individual and eternal optimist dedicated to coding clean, efficient and user-friendly web experiences.
                </p>
                <p className="mb-6 font-sans text-white/90">
                  I like to keep perspective and build systems challenged to that I see the world through.
                </p>
                <div className="text-white/40 text-xs mt-4 tracking-widest">&lt;/p&gt;</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[400px]">
              
              {/* Image Container with Right/Bottom Cyan border */}
              <div 
                className="relative bg-[#252830] rounded-[2rem] overflow-hidden aspect-square z-10 shadow-2xl"
                style={{
                  borderRight: '4px solid #00ffcc',
                  borderBottom: '4px solid #00ffcc',
                  boxShadow: '10px 10px 30px rgba(0,255,204,0.15)'
                }}
              >
                {/* Fallback image if real asset is missing */}
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" 
                  alt="Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
