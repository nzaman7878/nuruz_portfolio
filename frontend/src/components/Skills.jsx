import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-ide-bg overflow-hidden font-mono">
      <div className="container mx-auto px-5 lg:px-20 max-w-[1000px] relative z-10">
        
        {/* Section Header */}
        <div className="w-full mb-12 flex items-center space-x-4">
          <span className="text-[#a855f7] font-bold text-xl">cat</span>
          <h2 className="text-3xl font-bold text-[#f0f6fc]">package.json</h2>
        </div>

        <div className="ide-window w-full text-sm md:text-base">
          <div className="ide-header">
            <div className="flex items-center text-syntax-comment">
              <Package size={16} className="mr-2 text-[#ff5f56]" />
              <span>package.json</span>
            </div>
          </div>

          <div className="p-6 md:p-8 flex">
            {/* Line Numbers */}
            <div className="hidden sm:flex flex-col text-syntax-comment pr-6 select-none text-right border-r border-ide-border mr-6">
              {Array.from({length: 36}).map((_, i) => <span key={i}>{i+1}</span>)}
            </div>

            <div className="flex-1 overflow-x-auto">
              <div className="text-on-background">&#123;</div>
              <div className="pl-4 md:pl-8">
                <div><span className="text-syntax-variable">"name"</span><span className="text-on-background">: </span><span className="text-syntax-string">"@nuruzzaman/skills"</span><span className="text-on-background">,</span></div>
                <div><span className="text-syntax-variable">"version"</span><span className="text-on-background">: </span><span className="text-syntax-string">"1.0.0"</span><span className="text-on-background">,</span></div>
                <div><span className="text-syntax-variable">"description"</span><span className="text-on-background">: </span><span className="text-syntax-string">"Technical arsenal and capabilities"</span><span className="text-on-background">,</span></div>
                
                <div className="mt-4"><span className="text-syntax-variable">"dependencies"</span><span className="text-on-background">: &#123;</span></div>
                
                {/* Frontend */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="pl-4 md:pl-8 mt-2">
                  <div><span className="text-syntax-variable">"@stack/frontend"</span><span className="text-on-background">: &#123;</span></div>
                  <div className="pl-4 md:pl-8">
                    <div><span className="text-syntax-variable">"react.js"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^18.2.0"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"next.js"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^14.0.0"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"tailwind.css"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^3.4.0"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"javascript"</span><span className="text-on-background">: </span><span className="text-syntax-string">"ES6+"</span></div>
                  </div>
                  <div><span className="text-on-background">&#125;,</span></div>
                </motion.div>

                {/* Backend */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="pl-4 md:pl-8 mt-2">
                  <div><span className="text-syntax-variable">"@stack/backend"</span><span className="text-on-background">: &#123;</span></div>
                  <div className="pl-4 md:pl-8">
                    <div><span className="text-syntax-variable">"node.js"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^20.0.0"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"express.js"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^4.18.0"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"mongodb"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^6.0.0"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"typescript"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^5.0.0"</span></div>
                  </div>
                  <div><span className="text-on-background">&#125;,</span></div>
                </motion.div>

                {/* AI */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="pl-4 md:pl-8 mt-2">
                  <div><span className="text-syntax-variable">"@stack/generative-ai"</span><span className="text-on-background">: &#123;</span></div>
                  <div className="pl-4 md:pl-8">
                    <div><span className="text-syntax-variable">"rag-architecture"</span><span className="text-on-background">: </span><span className="text-syntax-string">"latest"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"langchain"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^0.1.0"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"langgraph"</span><span className="text-on-background">: </span><span className="text-syntax-string">"latest"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"vector-dbs"</span><span className="text-on-background">: </span><span className="text-syntax-string">"latest"</span></div>
                  </div>
                  <div><span className="text-on-background">&#125;,</span></div>
                </motion.div>

                {/* Tools */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="pl-4 md:pl-8 mt-2">
                  <div><span className="text-syntax-variable">"@stack/dev-tools"</span><span className="text-on-background">: &#123;</span></div>
                  <div className="pl-4 md:pl-8">
                    <div><span className="text-syntax-variable">"git"</span><span className="text-on-background">: </span><span className="text-syntax-string">"^2.40.0"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"vs-code"</span><span className="text-on-background">: </span><span className="text-syntax-string">"latest"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"postman"</span><span className="text-on-background">: </span><span className="text-syntax-string">"latest"</span><span className="text-on-background">,</span></div>
                    <div><span className="text-syntax-variable">"cursor"</span><span className="text-on-background">: </span><span className="text-syntax-string">"latest"</span></div>
                  </div>
                  <div><span className="text-on-background">&#125;</span></div>
                </motion.div>

                <div><span className="text-on-background">&#125;</span></div>
              </div>
              <div className="text-on-background">&#125;</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
