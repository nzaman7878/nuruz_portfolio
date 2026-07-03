import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#0d1117] overflow-hidden font-mono">
      <div className="container mx-auto px-5 lg:px-20 max-w-[1000px] relative z-10">
        
        {/* Section Header */}
        <div className="w-full mb-12 flex items-center space-x-4">
          <span className="text-[#a855f7] font-bold text-xl">cat</span>
          <h2 className="text-3xl font-bold text-[#f0f6fc]">package.json</h2>
        </div>

        <div className="ide-window w-full text-sm md:text-base">
          <div className="ide-header">
            <div className="flex items-center text-[#8b949e]">
              <Package size={16} className="mr-2 text-[#ff5f56]" />
              <span>package.json</span>
            </div>
          </div>

          <div className="p-6 md:p-8 flex">
            {/* Line Numbers */}
            <div className="hidden sm:flex flex-col text-[#8b949e] pr-6 select-none text-right border-r border-[#30363d] mr-6">
              {Array.from({length: 36}).map((_, i) => <span key={i}>{i+1}</span>)}
            </div>

            <div className="flex-1 overflow-x-auto">
              <div className="text-[#c9d1d9]">&#123;</div>
              <div className="pl-4 md:pl-8">
                <div><span className="text-[#79c0ff]">"name"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"@nuruzzaman/skills"</span><span className="text-[#c9d1d9]">,</span></div>
                <div><span className="text-[#79c0ff]">"version"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"1.0.0"</span><span className="text-[#c9d1d9]">,</span></div>
                <div><span className="text-[#79c0ff]">"description"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Technical arsenal and capabilities"</span><span className="text-[#c9d1d9]">,</span></div>
                
                <div className="mt-4"><span className="text-[#79c0ff]">"dependencies"</span><span className="text-[#c9d1d9]">: &#123;</span></div>
                
                {/* Frontend */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="pl-4 md:pl-8 mt-2">
                  <div><span className="text-[#79c0ff]">"@stack/frontend"</span><span className="text-[#c9d1d9]">: &#123;</span></div>
                  <div className="pl-4 md:pl-8">
                    <div><span className="text-[#79c0ff]">"react.js"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^18.2.0"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"next.js"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^14.0.0"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"tailwind.css"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^3.4.0"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"javascript"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"ES6+"</span></div>
                  </div>
                  <div><span className="text-[#c9d1d9]">&#125;,</span></div>
                </motion.div>

                {/* Backend */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="pl-4 md:pl-8 mt-2">
                  <div><span className="text-[#79c0ff]">"@stack/backend"</span><span className="text-[#c9d1d9]">: &#123;</span></div>
                  <div className="pl-4 md:pl-8">
                    <div><span className="text-[#79c0ff]">"node.js"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^20.0.0"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"express.js"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^4.18.0"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"mongodb"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^6.0.0"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"typescript"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^5.0.0"</span></div>
                  </div>
                  <div><span className="text-[#c9d1d9]">&#125;,</span></div>
                </motion.div>

                {/* AI */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="pl-4 md:pl-8 mt-2">
                  <div><span className="text-[#79c0ff]">"@stack/generative-ai"</span><span className="text-[#c9d1d9]">: &#123;</span></div>
                  <div className="pl-4 md:pl-8">
                    <div><span className="text-[#79c0ff]">"rag-architecture"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"latest"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"langchain"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^0.1.0"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"langgraph"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"latest"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"vector-dbs"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"latest"</span></div>
                  </div>
                  <div><span className="text-[#c9d1d9]">&#125;,</span></div>
                </motion.div>

                {/* Tools */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="pl-4 md:pl-8 mt-2">
                  <div><span className="text-[#79c0ff]">"@stack/dev-tools"</span><span className="text-[#c9d1d9]">: &#123;</span></div>
                  <div className="pl-4 md:pl-8">
                    <div><span className="text-[#79c0ff]">"git"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"^2.40.0"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"vs-code"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"latest"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"postman"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"latest"</span><span className="text-[#c9d1d9]">,</span></div>
                    <div><span className="text-[#79c0ff]">"cursor"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"latest"</span></div>
                  </div>
                  <div><span className="text-[#c9d1d9]">&#125;</span></div>
                </motion.div>

                <div><span className="text-[#c9d1d9]">&#125;</span></div>
              </div>
              <div className="text-[#c9d1d9]">&#125;</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
