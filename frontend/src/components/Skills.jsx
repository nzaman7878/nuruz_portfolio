import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone } from 'lucide-react';

const HtmlIcon = () => (
  <svg viewBox="0 0 384 512" width="28" height="28" fill="currentColor">
    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 384 512" width="28" height="28" fill="currentColor">
    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 448 512" width="28" height="28" fill="currentColor">
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 31.3 0 53.2 13.2 65.6 37.6l-33.4 20.1c-8.7-14.1-18.1-20.1-32.8-20.1-13.8 0-23.8 7.8-23.8 19.8 0 12.3 8.1 17.1 27.4 25.5l10.5 4.5c34.3 14.7 54.4 31.6 54.4 66.4 0 35.8-26.2 55.8-66.1 55.8z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 512 512" width="28" height="28" fill="currentColor">
    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 62.3-22 121.9 1 5.2 2.1 10.4 3.4 15.5-5.8 1.9-11.6 3.9-17.3 6.1-55 21.6-86.8 53.4-89.9 86.8-3.1 34.6 25 72.3 75.3 95.8 4 1.9 8.2 3.7 12.4 5.3-1 4.5-2 9.1-2.9 13.7-12.1 59.9-3.7 107.9 23.7 123.7 26 15 68.3-.3 111.3-37.5 4.9-4.2 9.6-8.7 14.1-13.3 2.7 2.5 5.4 5.1 8.2 7.5 45.4 39.8 90.7 56.6 117.8 41 26.6-15.3 34.7-63.5 22.3-124-.9-4.5-2-9-3.1-13.5 6.1-2.1 12.1-4.4 18.1-6.8 53.9-21.7 85.1-52.9 88.3-85.7 3.3-34.1-23.9-70.6-72.9-94.2zm-289 119.5c-37.4-13.9-63.1-38.3-64.8-60.8-1.5-19.4 17.5-44 56.4-62.1 6.5-3 13.3-5.8 20.3-8.3 1.7 12.6 4.3 25.2 7.7 37.6-43.2 20-72.3 47.9-72.9 66-.4 10.7 7.7 23.8 24.3 36 2-10 4.2-20.2 6.8-30.3 7.3-1 14.8-1.8 22.2-2.5zm199.1-16.7c-13.3 22-31.5 44-53.7 63.8-21.8 19.3-46.1 36.3-70.7 48.7-3-12.7-5.5-25.5-7.4-38.5 23-11.4 44.8-25.4 64.1-41.2 19.7-16.1 37.1-34 50.8-52.3-1-10.4-2.3-20.9-4-31.4 12-7.1 23.2-14.9 33.5-23.5-5 13.4-9.3 26-12.6 34.4zm-127.3-66.2c-5.8-31-4.7-61.9 2.5-91.1 15-37 36.6-67.6 61.5-84.6 10.9-7.5 20.4-10.3 27-10.3 27.2 0 49 53 49 114.7 0 7.8-.5 15.6-1.5 23.5-18.7-14.8-39.7-27.5-61.8-37.4-25.7-11.3-52.5-19.6-76.7-24.8zm97.7 215.1c-14.3 35.8-35 65.3-59 81.9-10.8 7.5-20.3 10.3-26.8 10.3-27.2 0-48.9-53-48.9-114.7 0-9.8.7-19.5 2-29 19.7 15.6 41.5 29.1 64.8 39.8 25.1 11.2 51.2 19.4 74.8 24.6-2 3.1-4 5.9-6.9 7.1zm-86.7-130.6c-27-8-55.2-12.2-83.3-12.2-26.7 0-52.5 3.7-76.2 10.8-19.9-20-33.8-43.1-40-66.8-5.7-21.7-6.2-43.3-1.6-64 26.6 6.8 52.4 17.5 76.5 31.6 18.5 10.9 35.4 23.8 50.2 38.4l11.1-15.6c-17.7-17-38.3-31.5-60.6-43.1-23.3-12-48-21.2-73.1-26.9 8.2-18 20.3-33.2 36-44.5 19.2-13.8 41.9-19.9 61.5-16.1 41.9 8.2 82.2 40.5 117.8 93.9-3.9 11.9-7.4 23.8-10.2 35.8-21-13-43-23.7-65.4-31.7zm156.4-2.8c-23.9 9.1-49.2 14.8-75 16.7 2.1 12 3.5 24.2 4.1 36.3 43.6-20.1 73.1-48.2 73.6-66.7.4-10.8-7.7-24-24.4-36.4-1.9 9.8-4.2 19.7-6.8 29.7-3.9.1-7.8.2-11.5.4zm34.2 66c-18.7 19.3-32.3 41.9-38.3 64.9-5.8 22.3-6.1 44.5-1.3 65.8-25-6.7-49.5-16.6-72.2-29.7-18.9-10.9-36.2-24.1-51.4-39.2 1.9-1.9 14.8-18.4 14.8-18.4 18.2 17.1 39.5 32 62.4 44 24.4 12.8 50.3 22.5 76.8 28.5-8.2 18-20.3 33.3-36.1 44.6-19.2 13.8-42 19.8-61.6 16-41.9-8.3-82.2-40.8-117.9-94.4 4.1-12.4 7.7-25 10.7-37.6 21.3 13.2 43.7 24 66.8 32-23.6-9.1-48.6-14.7-74-16.4-2.2-12.6-3.8-25.2-4.5-37.9 26.8 8.1 54.8 12.3 82.9 12.3 26.6 0 52.4-3.7 75.9-10.7z"/>
  </svg>
);

const Skills = () => {
  return (
    <section id="projects" className="py-24 relative bg-[#13151a] overflow-hidden font-mono z-0">
      
      {/* Background Code Snippet Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden select-none whitespace-pre text-[10px] md:text-sm font-mono text-[#00ffcc] p-10">
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
    this.skills = ['HTML', 'CSS', 'JS', 'React'];
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
        <br/><br/>
        {`const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect", error);
  }
};
connectToDatabase();`}
      </div>

      <div className="container mx-auto px-5 lg:px-20 max-w-[1200px] relative z-10">
        
        {/* Top Divider with 0 */}
        <div className="flex flex-col items-center mb-16">
          <div className="text-3xl font-sans text-[#00ffcc] font-bold mb-2">0</div>
          <div className="w-[2px] h-12 border-l-2 border-dashed border-white/40"></div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="text-7xl md:text-9xl font-mono text-[#00ffcc] font-bold mb-6 tracking-tighter opacity-90">&lt;/&gt;</div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4">Skills</h2>
          <p className="text-white/60 font-sans tracking-wide text-sm">I am sticking to never stop learning and improving!</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-24">
          
          {/* Web Development Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#00ffcc] rounded-[2rem] p-8 w-full max-w-sm flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,255,204,0.3)] hover:scale-105 transition-transform duration-300"
          >
            <Monitor size={48} className="text-black mb-4" />
            <h3 className="text-2xl font-bold font-sans text-black mb-2">Web Development</h3>
            <p className="text-black/80 font-mono text-sm tracking-widest font-bold">HTML, CSS, JS, REACT</p>
          </motion.div>

          {/* App Development Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#00ffcc] rounded-[2rem] p-8 w-full max-w-sm flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,255,204,0.3)] hover:scale-105 transition-transform duration-300"
          >
            <Smartphone size={48} className="text-black mb-4" />
            <h3 className="text-2xl font-bold font-sans text-black mb-2">App Development</h3>
            <p className="text-black/80 font-mono text-sm tracking-widest font-bold">IOS, Android</p>
          </motion.div>

        </div>

        {/* Skill Spheres */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-[#E44D26] shadow-[0_0_40px_rgba(228,77,38,0.6)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <HtmlIcon />
            </div>
            <span className="text-[#E44D26] font-sans font-bold text-xl tracking-widest">HTML</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-[#264DE4] shadow-[0_0_40px_rgba(38,77,228,0.6)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <CssIcon />
            </div>
            <span className="text-[#264DE4] font-sans font-bold text-xl tracking-widest">CSS</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-[#F7DF1E] shadow-[0_0_40px_rgba(247,223,30,0.6)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <JsIcon />
            </div>
            <span className="text-[#F7DF1E] font-sans font-bold text-xl tracking-widest">JS</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-[#00D8FF] shadow-[0_0_40px_rgba(0,216,255,0.6)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <ReactIcon />
            </div>
            <span className="text-[#00D8FF] font-sans font-bold text-xl tracking-widest">REACT</span>
          </motion.div>

        </div>

        {/* Bottom Divider with 0 */}
        <div className="flex flex-col items-center mt-24">
          <div className="text-3xl font-sans text-[#00ffcc] font-bold mb-2">0</div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
