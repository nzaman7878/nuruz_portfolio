import React from 'react';
import { motion } from 'framer-motion';

const springAnim = {
  type: "spring",
  stiffness: 100,
  damping: 15
};

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-[#050505] overflow-hidden font-sans">
      
      {/* Topographic Lines Background Pattern - Subtle Violet */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 50 150, 100 100 T 200 100' fill='none' stroke='%238b5cf6' stroke-width='0.5'/%3E%3Cpath d='M0 50 Q 50 100, 100 50 T 200 50' fill='none' stroke='%238b5cf6' stroke-width='0.5'/%3E%3Cpath d='M0 150 Q 50 200, 100 150 T 200 150' fill='none' stroke='%238b5cf6' stroke-width='0.5'/%3E%3C/svg%3E")`, 
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      <div className="container mx-auto px-5 lg:px-20 max-w-[1400px] relative z-10 flex flex-col items-center">
        
        {/* Top Divider */}
        <div className="flex flex-col items-center mb-20">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-[#8b5cf6]"></div>
          <div className="w-3 h-3 rounded-full bg-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.6)] mt-2"></div>
        </div>

        {/* Title Section */}
        <div className="w-full flex justify-start mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springAnim}
            className="inline-flex items-center px-10 py-4 glass-card rounded-full"
          >
            <h2 className="text-3xl font-extrabold text-white tracking-wider font-display uppercase">About Me</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Glass Text Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...springAnim, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden group">
              {/* Subtle hover gradient inside */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-white/80 leading-relaxed text-base md:text-lg font-sans space-y-6">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-4xl font-display font-bold mb-8">Hello!</h3>
                <p className="text-white/70">
                  I'm Nuruzzaman, based in <span className="text-white font-semibold font-display tracking-wide">Assam, India</span>. I am a passionate MERN Stack Developer with a strong interest in integrating <span className="text-white font-semibold font-display tracking-wide">Generative AI</span> to create smarter, highly scalable web applications.
                </p>
                <p className="text-white/70">
                  My academic foundation includes a Master of Science in Information Technology (MSc IT) from <span className="text-white font-semibold font-display tracking-wide">Gauhati University</span> and a BSc IT from B. Borooah College. As a fresher, I have already built 10+ practical projects gaining hands-on experience in full-stack architecture.
                </p>
                <p className="text-white/70">
                  I am currently seeking a role as a <span className="text-[#06b6d4] font-semibold font-display tracking-wide">Software Developer / MERN Stack Developer</span> where I can contribute, learn from real-world challenges, and grow as an engineer.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...springAnim, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center relative mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[450px]">
              
              {/* Image Container with Glow */}
              <div className="relative rounded-[2.5rem] p-1 bg-gradient-to-br from-[#8b5cf6]/50 via-white/10 to-[#06b6d4]/50 shadow-[0_20px_50px_rgba(139,92,246,0.15)] group hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)] transition-shadow duration-500">
                <div className="relative rounded-[2.3rem] overflow-hidden aspect-[4/5] bg-[#0a0a0a]">
                  <img 
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" 
                    alt="Workspace" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                  />
                  {/* Glass overlay on bottom edge */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
