import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'What does it take to become a web developer?',
      description: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet...',
      tag: 'Web Developer',
      author: 'Nuruzzaman',
      date: '10 Oct 2023',
      read: '1 Min',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Building a Full-Stack MERN App',
      description: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet...',
      tag: 'MERN Stack',
      author: 'Nuruzzaman',
      date: '15 Nov 2023',
      read: '3 Min',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Mastering Tailwind CSS v4',
      description: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet...',
      tag: 'CSS',
      author: 'Nuruzzaman',
      date: '02 Jan 2024',
      read: '2 Min',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-[#1a1c23] border-t border-white/5">
      <div className="container mx-auto px-5 md:px-20 max-w-[900px]">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-medium text-primary mb-4 tracking-wide">Projects</h2>
            <p className="text-on-surface-variant text-sm mb-6 max-w-md">My thoughts on technology and business, welcome to subscribe</p>
            <button className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-colors rounded-full text-sm font-medium">
              Subscribe My Updates
            </button>
          </motion.div>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 pb-8 border-b border-white/10 group"
            >
              <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              </div>
              
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-xl font-display font-medium text-primary mb-2 group-hover:text-white transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <a href="#" className="text-primary text-xs font-mono mb-4 hover:underline">Read More &gt;&gt;</a>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant">
                  <span className="bg-surface-bright px-3 py-1 rounded text-white">{project.tag}</span>
                  <span className="flex items-center space-x-1"><span>Text:</span><span className="text-white">{project.author}</span></span>
                  <span className="flex items-center space-x-1"><span>Date:</span><span className="text-white">{project.date}</span></span>
                  <span className="flex items-center space-x-1"><span>Read:</span><span className="text-white">{project.read}</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
