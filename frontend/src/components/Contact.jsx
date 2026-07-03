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
    <section id="contact" className="py-24 border-t border-ide-border">
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-syntax-keyword rounded-full"></div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-ide-surface backdrop-blur-xl border border-ide-border rounded-2xl shadow-md hover:border-syntax-variable hover:shadow-lg hover:border-syntax-variable transition-all p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-syntax-comment mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
                className="w-full bg-ide-bg text-on-background border-ide-border border border-ide-border rounded-lg px-4 py-3 text-on-background focus:outline-none focus:border-syntax-variable focus:ring-1 focus:ring-syntax-variable transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-syntax-comment mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
                className="w-full bg-ide-bg text-on-background border-ide-border border border-ide-border rounded-lg px-4 py-3 text-on-background focus:outline-none focus:border-syntax-variable focus:ring-1 focus:ring-syntax-variable transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-syntax-comment mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
                rows="5"
                className="w-full bg-ide-bg text-on-background border-ide-border border border-ide-border rounded-lg px-4 py-3 text-on-background focus:outline-none focus:border-syntax-variable focus:ring-1 focus:ring-syntax-variable transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full inline-flex justify-center items-center px-8 py-4 bg-syntax-keyword hover:shadow-lg text-on-background rounded-xl font-medium transition-all"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
            
            {status && <p className="text-center text-sm mt-4 text-syntax-comment">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
