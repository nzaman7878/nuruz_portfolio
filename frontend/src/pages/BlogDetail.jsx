import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();

  // In a real app, you would fetch this based on the ID.
  const post = {
    title: 'What does it take to become a web developer?',
    author: 'Nuruzzaman',
    date: '16 Oct, 2023',
    readTime: '10 Min',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="mb-6 font-mono text-white/70">Web development has become so accessible in recent years, which means anyone can learn at their own pace. Starting the journey may seem daunting at first, but taking it step by step makes it manageable.</p>
      
      <p class="mb-6 font-mono text-white/70">The basic tools involved are HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. However, there are a number of other programs used to "manage" or facilitate the construction of sites that would otherwise have to be done "from scratch" by writing code.</p>
      
      <h3 class="text-3xl text-white font-bold mb-6 font-sans mt-12">The Core Technologies</h3>
      <p class="mb-6 font-mono text-white/70">HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements.</p>
      
      <div class="p-8 bg-[#1a1c23] border border-[#00ffcc]/30 rounded-2xl my-10 shadow-[0_0_30px_rgba(0,255,204,0.1)]">
        <p class="text-[#00ffcc] font-mono italic text-lg leading-relaxed">
          "The best thing about being a web developer is that you can build something from nothing, using only logic, creativity, and your keyboard."
        </p>
      </div>
      
      <p class="mb-6 font-mono text-white/70">As the web has evolved, so have the tools. Today, developers use frameworks like React, Vue, or Angular to build complex user interfaces more efficiently.</p>
    `,
    tags: ['#HTML', '#CSS', '#JS']
  };

  return (
    <div className="min-h-screen bg-[#13151a] pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00ffcc]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-20 max-w-[1000px] relative z-10">
        
        {/* Back Button */}
        <Link to="/blogs" className="inline-flex items-center space-x-4 mb-12 group">
          <div className="w-12 h-12 bg-[#1a1c23] border border-white/10 rounded-xl flex items-center justify-center text-[#00ffcc] font-bold text-xl group-hover:border-[#00ffcc]/50 transition-colors">
            &lt;C/&gt;
          </div>
          <span className="font-mono text-white/80 group-hover:text-white transition-colors">&lt;p&gt; Back to Blogs &lt;/p&gt;</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#00ffcc] mb-10 tracking-tight font-sans leading-tight max-w-4xl"
          >
            {post.title}
          </motion.h1>
          
          {/* Meta Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-between border-t border-b border-white/10 py-6 font-mono text-sm"
          >
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="bg-[#2a2d36] px-4 py-2 rounded-lg text-white font-bold">
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
            
            <button className="flex items-center space-x-2 text-white/60 hover:text-[#00ffcc] transition-colors mt-4 sm:mt-0">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-[#00ffcc]/50 shadow-[0_0_30px_rgba(0,255,204,0.15)] mb-16 p-2 bg-[#13151a]"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-[1.5rem]" />
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="prose prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex items-center gap-4 mb-8 font-mono">
          <span className="text-white/60 mr-2">Tags:</span>
          {post.tags.map(tag => (
            <span key={tag} className="px-4 py-2 bg-[#1a1c23] border border-white/10 rounded-full text-[#00ffcc] text-sm hover:bg-[#00ffcc]/10 transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Author */}
        <div className="font-mono mb-16">
          <span className="text-[#00ffcc]">By:</span> <span className="text-white/80">{post.author}</span>
        </div>

        {/* Bottom Divider with 0 */}
        <div className="flex flex-col items-center mt-24 mb-10">
          <div className="text-3xl font-sans text-[#00ffcc] font-bold mb-2">0</div>
          <div className="w-[2px] h-12 border-l-2 border-dashed border-white/40"></div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
