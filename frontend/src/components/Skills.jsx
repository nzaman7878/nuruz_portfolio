import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Database, Wrench } from 'lucide-react';

const springAnim = {
  type: "spring",
  stiffness: 100,
  damping: 15
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-[#0a0a0a] overflow-hidden font-sans z-0">
      
      {/* Background Code Snippet Pattern - Very faint violet */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden select-none whitespace-pre text-[10px] md:text-sm font-mono text-[#8b5cf6] p-10 leading-loose">
        {`function calculateLayout(nodes, edges) {
  let graph = new Graph();
  nodes.forEach(n => graph.addNode(n.id, n));
  edges.forEach(e => graph.addEdge(e.source, e.target));
  
  return graph.forceDirected({
    iterations: 300,
    attraction: 0.05,
    repulsion: 400
  });
}
class WebDeveloper {
  constructor() {
    this.skills = ['MERN Stack', 'GenAI', 'TypeScript'];
    this.status = 'Learning';
  }
  upgrade() {
    this.status = 'Mastery';
  }
}
function init() {
  console.log("Welcome to my portfolio!");
  const dev = new WebDeveloper();
  dev.upgrade();
}
init();`}
      </div>

      <div className="container mx-auto px-5 lg:px-20 max-w-[1400px] relative z-10">
        
        {/* Top Divider */}
        <div className="flex flex-col items-center mb-24">
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#0a0a0a] via-[#8b5cf6]/20 to-[#8b5cf6]"></div>
          <div className="w-3 h-3 rounded-full bg-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.6)] mt-2"></div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="text-7xl md:text-9xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/5 to-white/0 mb-4 tracking-tighter select-none">&lt;/&gt;</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 -mt-16">Technical Arsenal</h2>
          <p className="text-white/70 font-sans text-base max-w-lg">I am committed to lifelong learning, constantly refining my toolset to build scalable digital experiences and integrate smarter AI features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {/* Frontend Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springAnim}
            className="glass-card rounded-[2rem] p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#06b6d4]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Monitor size={32} className="text-[#06b6d4]" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'HTML/CSS', 'JavaScript', 'Tailwind'].map(skill => (
                <span key={skill} className="text-white/70 font-mono text-xs tracking-wider px-3 py-1 bg-white/5 rounded-full">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Backend Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...springAnim, delay: 0.1 }}
            className="glass-card rounded-[2rem] p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#8b5cf6]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Database size={32} className="text-[#8b5cf6]" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'REST APIs'].map(skill => (
                <span key={skill} className="text-white/70 font-mono text-xs tracking-wider px-3 py-1 bg-white/5 rounded-full">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* GenAI Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...springAnim, delay: 0.2 }}
            className="glass-card rounded-[2rem] p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#d946ef]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Cpu size={32} className="text-[#d946ef]" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">Generative AI</h3>
            <div className="flex flex-wrap gap-2">
              {['RAG', 'LangChain', 'LangGraph', 'Vector DBs'].map(skill => (
                <span key={skill} className="text-white/70 font-mono text-xs tracking-wider px-3 py-1 bg-white/5 rounded-full">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Tools Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...springAnim, delay: 0.3 }}
            className="glass-card rounded-[2rem] p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Wrench size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">Dev Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'Git', 'GitHub', 'Postman', 'Cursor', 'Antigravity'].map(skill => (
                <span key={skill} className="text-white/70 font-mono text-xs tracking-wider px-3 py-1 bg-white/5 rounded-full">{skill}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
