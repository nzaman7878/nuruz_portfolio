import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to server.');
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.05)] hover:border-white/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
                className="w-full bg-[#000000] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
                className="w-full bg-[#000000] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-on-surface-variant mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
                rows="5"
                className="w-full bg-[#000000] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] text-white rounded-xl font-medium transition-all"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
            
            {status && <p className="text-center text-sm mt-4 text-tertiary">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
