import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import { motion } from 'framer-motion';

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    <path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    <path d="M19.46 5.37A17.9 17.9 0 0 0 14.54 3.7c-.24.42-.48.91-.68 1.34a17 17 0 0 0-3.72 0 12.33 12.33 0 0 0-.68-1.34 18.23 18.23 0 0 0-4.92 1.67A18.8 18.8 0 0 0 1 17.58a18.3 18.3 0 0 0 5.6 2.84 13.5 13.5 0 0 0 1.2-1.92 12.06 12.06 0 0 1-1.93-.9 1 1 0 0 1-.1-.13 14 14 0 0 0 11.23 0 1 1 0 0 1-.1.13 12.06 12.06 0 0 1-1.93.9 13.5 13.5 0 0 0 1.2 1.92 18.3 18.3 0 0 0 5.6-2.84 18.8 18.8 0 0 0-3.56-12.21z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home', active: false },
    { name: 'Blogs', href: '#blogs', active: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-5 md:px-20 max-w-[1400px]">
        <div className="flex items-center justify-between">
          
          <div className="flex-shrink-0 flex items-center space-x-2">
            <span className="text-primary font-mono font-bold text-xl">&lt;C/&gt;</span>
            <span className="text-white font-sans font-medium text-xl tracking-wide">Nuruzzaman</span>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-12 flex-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${link.active ? 'text-primary' : 'text-on-surface-variant'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6 text-on-surface-variant">
            <button className="hover:text-primary transition-colors"><Search size={20} /></button>
            <a href="#" className="hover:text-primary transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-primary transition-colors"><DiscordIcon /></a>
            <a href="#" className="hover:text-primary transition-colors"><GithubIcon /></a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-on-surface hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/5 absolute w-full left-0 top-full">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block text-sm uppercase tracking-wider ${link.active ? 'text-primary' : 'text-on-surface-variant'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-white/5 text-on-surface-variant">
              <Search size={20} />
              <InstagramIcon />
              <DiscordIcon />
              <GithubIcon />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
