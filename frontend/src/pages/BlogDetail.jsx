import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';

const springAnim = {
  type: "spring",
  stiffness: 100,
  damping: 15
};

const BlogDetail = () => {
  const { id } = useParams();

  // In a real app, you would fetch this based on the ID.
  const post = {
    title: 'What does it take to become a web developer?',
    author: 'Nuruzzaman',
    date: '16 Oct, 2026',
    readTime: '10 Min',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
    content: `
      <p class="mb-8 font-sans text-white/70 text-lg md:text-xl leading-relaxed">Web development has become incredibly accessible, meaning anyone can learn at their own pace. Starting the journey may seem daunting at first, but taking it step by step makes it manageable.</p>
      
      <p class="mb-8 font-sans text-white/70 text-lg md:text-xl leading-relaxed">The basic tools involved are HTML, CSS, and JavaScript. However, there are a number of other programs used to manage or facilitate the construction of sites that would otherwise have to be done from scratch by writing code.</p>
      
      <h3 class="text-3xl md:text-4xl text-white font-bold mb-8 font-display mt-16 tracking-tight">The Core Technologies</h3>
      <p class="mb-8 font-sans text-white/70 text-lg md:text-xl leading-relaxed">HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements.</p>
      
      <div class="glass-card p-10 md:p-14 rounded-[2.5rem] my-16 shadow-2xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 to-[#06b6d4]/5 z-0"></div>
        <p class="relative z-10 text-white font-display font-medium text-2xl md:text-3xl leading-snug">
          "The best thing about being a web developer is that you can build something from nothing, using only logic, creativity, and your keyboard."
        </p>
      </div>
      
      <p class="mb-8 font-sans text-white/70 text-lg md:text-xl leading-relaxed">As the web has evolved, so have the tools. Today, developers use frameworks like React, Vue, or Angular to build complex user interfaces more efficiently.</p>
    `,
    tags: ['Frontend', 'Career', 'Learning']
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-40 pb-32 relative overflow-hidden font-sans">
      
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#8b5cf6]/10 to-[#06b6d4]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-20 max-w-[900px] relative z-10">
        
        {/* Back Button */}
        <Link to="/blogs" className="inline-flex items-center space-x-3 mb-16 group text-white/70 hover:text-white transition-colors">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="font-sans font-medium">Back to Insights</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tighter font-display leading-[1.1]"
          >
            {post.title}
          </motion.h1>
          
          {/* Meta Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-between border-t border-b border-white/10 py-6 text-sm md:text-base font-sans"
          >
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-white/80 font-medium">
              <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-white/90 tracking-wide">
                {post.category}
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4]"></div>
                <span className="text-white/90">{post.author}</span>
              </div>
              <div>
                {post.date}
              </div>
              <div className="flex items-center space-x-2 text-[#8b5cf6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"></span>
                <span>{post.readTime} Read</span>
              </div>
            </div>
            
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors mt-6 sm:mt-0 px-4 py-2 rounded-full hover:bg-white/10">
              <Share2 size={18} />
              <span className="font-medium">Share</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ...springAnim }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-20 shadow-2xl relative"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="prose prose-invert max-w-none mb-20 prose-p:font-sans prose-headings:font-display prose-a:text-[#8b5cf6]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-16 font-sans">
          <span className="text-white/70 font-medium mr-2">Tags:</span>
          {post.tags.map(tag => (
            <span key={tag} className="px-5 py-2 glass-card rounded-full text-white/80 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
