import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "2024 - Present",
      description: "Developing and maintaining scalable MERN stack applications. Integrating generative AI features to automate user workflows."
    },
    {
      role: "Junior Web Developer",
      company: "Creative Agency",
      duration: "2022 - 2024",
      description: "Built responsive frontend interfaces using React and Tailwind CSS. Collaborated with designers to ensure pixel-perfect implementation."
    },
    {
      role: "B.Sc. in Computer Science",
      company: "University Name",
      duration: "2018 - 2022",
      description: "Focus on Software Engineering, Data Structures, and Web Technologies. Graduated with honors."
    }
  ];

  return (
    <section id="experience" className="py-24 border-t border-white/5">
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Journey</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-6">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-10 ml-8 relative"
          >
            <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.05)] hover:border-white/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all p-6 inline-block w-full max-w-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-primary font-mono text-sm mt-1 md:mt-0">{exp.duration}</span>
              </div>
              <h4 className="text-secondary font-medium mb-4">{exp.company}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
