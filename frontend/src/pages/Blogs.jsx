import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const springAnim = {
  type: "spring",
  stiffness: 100,
  damping: 15
};

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'What does it take to become a web developer?',
      description: 'Web development has become incredibly accessible, meaning anyone can learn at their own pace. However, mastering the modern stack requires a focus on fundamentals, architecture, and continuous adaptation to new UI/UX trends.',
      category: 'Web Development',
      author: 'Nuruzzaman',
      date: '16 Oct, 2026',
      readTime: '10 Min',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'The Rise of Spatial UIs in Modern Applications',
      description: 'With the advent of AR headsets and advanced web capabilities, glassmorphism and depth-based UI are no longer just trends—they are the new standard for premium web applications.',
      category: 'Design Trends',
      author: 'Nuruzzaman',
      date: '02 Nov, 2026',
      readTime: '8 Min',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Mastering Framer Motion for React Apps',
      description: 'Animation on the web used to be painful. Now, with physics-based spring animations, developers can bring interfaces to life with just a few lines of code, significantly boosting user engagement.',
      category: 'React Ecosystem',
      author: 'Nuruzzaman',
      date: '12 Dec, 2026',
      readTime: '12 Min',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-40 pb-32 font-sans relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-20 max-w-[1200px] relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-extrabold text-gradient mb-6 tracking-tighter font-display"
          >
            Insights
          </motion.h1>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent relative mb-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#8b5cf6] rounded-full shadow-[0_0_15px_#8b5cf6]"></div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 mb-12 text-base md:text-lg tracking-wide max-w-lg mx-auto leading-relaxed"
          >
            My thoughts on modern web development, UI/UX trends, and the ever-evolving frontend ecosystem.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...springAnim }}
            className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white rounded-full hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all font-display font-bold hover:-translate-y-1"
          >
            <Mail size={18} />
            <span className="tracking-wide">Subscribe to Newsletter</span>
          </motion.button>
        </div>

        {/* Blog List */}
        <div className="space-y-12 w-full">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, ...springAnim }}
              className="glass-card rounded-[2.5rem] p-6 lg:p-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center group hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Image Box */}
              <div className="w-full md:w-[40%] shrink-0">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#0a0a0a] shadow-2xl relative">
                  <div className="absolute inset-0 bg-[#8b5cf6]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1 w-full py-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white font-display mb-4 leading-tight group-hover:text-[#06b6d4] transition-colors">{post.title}</h2>
                <p className="text-white/80 leading-relaxed mb-8 font-sans text-base lg:text-lg max-w-2xl">
                  {post.description}
                </p>
                
                <Link to={`/blog/${post.id}`} className="inline-flex items-center space-x-2 text-[#8b5cf6] font-display font-semibold text-lg mb-8 hover:text-[#d946ef] transition-colors w-max">
                  <span>Read Full Article</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>

                <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                {/* Meta info row */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/70 font-sans font-medium">
                  <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-white/80 text-xs tracking-wider uppercase">
                    {post.category}
                  </div>
                  <div>
                    <span className="text-[#8b5cf6]">By:</span> {post.author}
                  </div>
                  <div>
                    {post.date}
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]"></span>
                    <span>{post.readTime} Read</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-6 mt-24 font-display text-sm font-bold">
          <span className="text-white/30 tracking-[0.3em]">•••</span>
          <div className="w-10 h-10 rounded-full bg-[#8b5cf6] flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">1</div>
          <span className="text-white/30 tracking-[0.3em]">•••</span>
        </div>

      </div>
    </div>
  );
};

export default Blogs;
