import React, { useState } from 'react';
import { Menu, X, Search, User, Code, MessageSquare, Edit3, Mail, Command } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    <path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    <path d="M19.46 5.37A17.9 17.9 0 0 0 14.54 3.7c-.24.42-.48.91-.68 1.34a17 17 0 0 0-3.72 0 12.33 12.33 0 0 0-.68-1.34 18.23 18.23 0 0 0-4.92 1.67A18.8 18.8 0 0 0 1 17.58a18.3 18.3 0 0 0 5.6 2.84 13.5 13.5 0 0 0 1.2-1.92 12.06 12.06 0 0 1-1.93-.9 1 1 0 0 1-.1-.13 14 14 0 0 0 11.23 0 1 1 0 0 1-.1.13 12.06 12.06 0 0 1-1.93.9 13.5 13.5 0 0 0 1.2 1.92 18.3 18.3 0 0 0 5.6-2.84 18.8 18.8 0 0 0-3.56-12.21z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Top Horizontal Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 glass rounded-full px-6 py-4 shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group">
            <span className="text-[#8b5cf6] font-mono font-bold text-xl tracking-tighter group-hover:text-[#d946ef] transition-colors">&lt;/&gt;</span>
            <span className="text-white font-display font-semibold text-lg tracking-wide">SinanTokanak</span>
          </Link>

          {/* Middle Nav Links & Search */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            
            <Link to="/" className="relative flex flex-col items-center px-4 py-2 group">
              <span className={`text-sm tracking-wide font-sans transition-colors ${isHome ? 'text-white font-semibold' : 'text-white/70 hover:text-white'}`}>
                Home
              </span>
              {isHome && <div className="absolute inset-0 bg-white/10 rounded-full -z-10"></div>}
            </Link>

            <Link to="/blogs" className="relative flex flex-col items-center px-4 py-2 group">
              <span className={`text-sm tracking-wide font-sans transition-colors ${!isHome ? 'text-white font-semibold' : 'text-white/70 hover:text-white'}`}>
                Blogs
              </span>
              {!isHome && <div className="absolute inset-0 bg-white/10 rounded-full -z-10"></div>}
            </Link>

            {/* Search Bar */}
            <div className="relative w-56 ml-6">
              <input 
                type="text"
                placeholder="Search..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-[#8b5cf6] focus:bg-white/10 transition-all placeholder-white/30 font-sans"
              />
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/70" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-6 text-white/70">
            <a href="#" className="hover:text-[#d946ef] transition-transform hover:scale-110">
              <InstagramIcon />
            </a>
            <a href="#" className="hover:text-[#8b5cf6] transition-transform hover:scale-110">
              <DiscordIcon />
            </a>
            <a href="#" className="hover:text-white transition-transform hover:scale-110">
              <GithubIcon />
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-white transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Vertical Sidebar (Home only) */}
      {isHome && (
        <nav className="fixed left-0 lg:left-8 top-auto bottom-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-16 z-50 flex lg:flex-col justify-center items-center px-6 lg:px-0 pointer-events-none">
          <div className="glass-card rounded-[2rem] flex lg:flex-col items-center justify-between lg:justify-center space-x-6 lg:space-x-0 lg:space-y-8 p-4 lg:py-8 w-full max-w-md lg:max-w-none pointer-events-auto">
            
            {/* Active Top Icon */}
            <a href="#home" className="w-10 h-10 bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform hover:scale-110">
              <Command size={18} />
            </a>
            
            <a href="#about" className="text-white/70 hover:text-white transition-all hover:scale-110">
              <User size={20} />
            </a>
            
            <a href="#projects" className="text-white/70 hover:text-white transition-all hover:scale-110">
              <Code size={20} />
            </a>

            <a href="#blog" className="text-white/70 hover:text-white transition-all hover:scale-110">
              <MessageSquare size={20} />
            </a>

            <a href="#notes" className="text-white/70 hover:text-white transition-all hover:scale-110">
              <Edit3 size={20} />
            </a>

            <a href="#contact" className="text-white/70 hover:text-white transition-all hover:scale-110">
              <Mail size={20} />
            </a>

          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
