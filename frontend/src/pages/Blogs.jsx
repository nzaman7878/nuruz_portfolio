import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'What does it take to become a web developer?',
      description: 'Web development has become so accessible in recent years, which means anyone can learn at their own pace. Starting the journey may seem...',
      category: 'Web Development',
      author: 'Nuruzzaman',
      date: '16 Oct, 2023',
      readTime: '10 Min',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      title: 'What does it take to become a web developer?',
      description: 'Web development has become so accessible in recent years, which means anyone can learn at their own pace. Starting the journey may seem...',
      category: 'Web Development',
      author: 'Nuruzzaman',
      date: '16 Oct, 2023',
      readTime: '10 Min',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      title: 'What does it take to become a web developer?',
      description: 'Web development has become so accessible in recent years, which means anyone can learn at their own pace. Starting the journey may seem...',
      category: 'Web Development',
      author: 'Nuruzzaman',
      date: '16 Oct, 2023',
      readTime: '10 Min',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#13151a] pt-32 pb-24 font-mono relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ffcc]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-20 max-w-[1000px] relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-[#00ffcc] mb-4 tracking-tight font-sans"
          >
            Blogs
          </motion.h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00ffcc] to-[#00ffcc] relative mb-8 rounded-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#00ffcc]"></div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 mb-10 text-sm md:text-base tracking-widest max-w-md mx-auto leading-relaxed"
          >
            My thoughts on web development and memes, welcome to Subscribe
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-3 px-8 py-3 border border-[#00ffcc] bg-transparent text-white rounded-full hover:bg-[#00ffcc]/10 transition-colors font-sans"
          >
            <Mail size={18} className="text-[#00ffcc]" />
            <span className="text-sm tracking-wide">Subscribe My Blogs</span>
          </motion.button>
        </div>

        {/* Blog List */}
        <div className="space-y-8 w-full">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1a1c23] border border-white/5 rounded-[1rem] p-6 flex flex-col md:flex-row gap-8 shadow-xl items-center"
            >
              {/* Image Box */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="aspect-square rounded-[1rem] overflow-hidden border border-[#00ffcc]/50 shadow-[0_0_20px_rgba(0,255,204,0.15)] p-1 bg-[#13151a]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover rounded-[0.8rem]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1 w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-[#00ffcc] font-sans mb-4 leading-tight">{post.title}</h2>
                <p className="text-white/70 leading-relaxed mb-6 font-mono text-sm max-w-xl">
                  {post.description}
                </p>
                
                <Link to={`/blog/${post.id}`} className="inline-flex items-center space-x-2 text-[#00ffcc] text-sm mb-6 hover:text-white transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </Link>

                <div className="w-full h-px bg-white/10 mb-4"></div>

                {/* Meta info row */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-white/80 font-mono">
                  <div className="bg-[#2a2d36] px-3 py-1.5 rounded-md text-white">
                    {post.category}
                  </div>
                  <div>
                    <span className="text-[#00ffcc]">By:</span> {post.author}
                  </div>
                  <div>
                    {post.date}
                  </div>
                  <div>
                    <span className="text-[#00ffcc]">Read</span> • {post.readTime}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-4 mt-16 font-mono text-xs">
          <span className="text-[#00ffcc] tracking-[0.3em]">........</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#00ffcc]">1</div>
          <span className="text-[#00ffcc] tracking-[0.3em]">........</span>
        </div>

      </div>
    </div>
  );
};

export default Blogs;
