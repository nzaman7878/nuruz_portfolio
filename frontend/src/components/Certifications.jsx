import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services" },
    { title: "Google AI Professional Certificate", issuer: "Google" },
    { title: "MongoDB Node.js Developer Path", issuer: "MongoDB University" },
    { title: "React Native Specialist", issuer: "Meta" }
  ];

  return (
    <section id="certifications" className="py-24 border-t border-white/5">
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.05)] hover:border-white/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all p-6 flex flex-col items-center text-center hover:-translate-y-2 duration-300"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-white font-semibold mb-2">{cert.title}</h3>
            <p className="text-on-surface-variant text-sm">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
