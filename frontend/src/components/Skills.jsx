import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCircles = [
    { name: 'HTML', color: '#ff6d00', bg: 'rgba(255,109,0,0.1)' },
    { name: 'CSS', color: '#2965f1', bg: 'rgba(41,101,241,0.1)' },
    { name: 'JS', color: '#f7df1e', bg: 'rgba(247,223,30,0.1)' },
    { name: 'REACT', color: '#00ffcc', bg: 'rgba(0,255,204,0.1)' },
  ];

  return (
    <section id="skills" className="py-20 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-5 md:px-20 max-w-[1000px] relative z-10 text-center">
        
        {/* Floating Code Symbol */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary font-mono text-5xl font-bold mb-4 opacity-80"
        >
          &lt;/&gt;
        </motion.div>

        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-3xl font-display font-medium text-white mb-2">Skills</h2>
          <p className="text-on-surface-variant text-sm">I am striving to never stop learning and improving</p>
        </motion.div>

        {/* Domains */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 mb-16">
          <div className="bg-primary/10 border border-primary/30 px-6 py-3 rounded-lg flex items-center space-x-3 text-white">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-medium text-sm">Web Development</span>
            <span className="text-on-surface-variant text-xs ml-2 uppercase font-mono">HTML CSS JS REACT</span>
          </div>
          <div className="bg-[#252830] border border-white/10 px-6 py-3 rounded-lg flex items-center space-x-3 text-white">
            <span className="font-medium text-sm">App Development</span>
            <span className="text-on-surface-variant text-xs ml-2 uppercase font-mono">IOS Android</span>
          </div>
        </div>

        {/* Circular Skill Nodes */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {skillCircles.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 relative"
                style={{ backgroundColor: skill.bg, boxShadow: `0 0 20px ${skill.bg}` }}
              >
                <div 
                  className="absolute inset-0 rounded-full opacity-50 border border-transparent"
                  style={{ borderColor: skill.color }}
                ></div>
                {/* Fallback text icon since we don't have SVGs handy */}
                <span className="font-display font-bold" style={{ color: skill.color }}>
                  {skill.name.substring(0, 2)}
                </span>
              </div>
              <span className="text-primary font-mono text-sm tracking-widest">{skill.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
