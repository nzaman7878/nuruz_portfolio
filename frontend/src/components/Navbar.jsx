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
      <nav className="absolute top-0 w-full z-50 py-8 bg-transparent">
        <div className="container mx-auto px-5 lg:px-12 max-w-[1500px]">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <span className="text-[#00ffcc] font-mono font-bold text-2xl tracking-tighter">&lt;/&gt;</span>
              <span className="text-white font-sans font-medium text-xl tracking-wide">SinanTokanak</span>
            </div>

            {/* Middle Nav Links & Search */}
            <div className="hidden lg:flex items-center space-x-12 flex-1 justify-center pl-10">
              
              <Link to="/" className="relative flex flex-col items-center">
                <span className={`text-sm tracking-wider font-mono transition-colors hover:text-[#00ffcc] ${isHome ? 'text-[#00ffcc]' : 'text-white'}`}>
                  Home
                </span>
                {isHome && <div className="absolute -bottom-2 w-full h-[2px] bg-[#00ffcc] rounded-full"></div>}
              </Link>

              <Link to="/blogs" className="relative flex flex-col items-center">
                <span className={`text-sm tracking-wider font-mono transition-colors hover:text-[#00ffcc] ${!isHome ? 'text-[#00ffcc]' : 'text-white'}`}>
                  Blogs
                </span>
                {!isHome && <div className="absolute -bottom-2 w-full h-[2px] bg-[#00ffcc] rounded-full"></div>}
              </Link>

              {/* Search Bar */}
              <div className="relative w-48">
                <input 
                  type="text" 
                  className="w-full bg-white rounded-full py-1.5 pl-4 pr-8 text-black text-xs focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
                />
                <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800" />
              </div>
            </div>

            {/* Social Icons with Text */}
            <div className="hidden lg:flex items-center space-x-8 text-white/90">
              <a href="#" className="flex items-center space-x-2 hover:text-[#00ffcc] transition-colors text-xs font-mono">
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-[#00ffcc] transition-colors text-xs font-mono text-[#00ffcc]">
                <DiscordIcon />
                <span>Discord</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-[#00ffcc] transition-colors text-xs font-mono">
                <GithubIcon />
                <span>Github</span>
              </a>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#00ffcc]">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Vertical Sidebar (Home only) */}
      {isHome && (
        <nav className="fixed left-0 lg:left-8 top-auto bottom-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-14 z-50 flex lg:flex-col justify-center items-center px-6 lg:px-0 pointer-events-none">
          <div className="bg-[#1a1c23]/80 border border-white/20 rounded-[2rem] flex lg:flex-col items-center justify-between lg:justify-center space-x-6 lg:space-x-0 lg:space-y-6 p-4 lg:py-6 w-full max-w-md lg:max-w-none shadow-2xl pointer-events-auto">
            
            {/* Active Top Icon */}
            <a href="#home" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#00ffcc] transition-colors">
              <Command size={18} />
            </a>
            
            <a href="#about" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#00ffcc] transition-colors">
              <User size={18} />
            </a>
            
            <a href="#projects" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#00ffcc] transition-colors">
              <Code size={18} />
            </a>

            <a href="#blog" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#00ffcc] transition-colors">
              <MessageSquare size={18} />
            </a>

            <a href="#notes" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#00ffcc] transition-colors">
              <Edit3 size={18} />
            </a>

            <a href="#contact" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#00ffcc] transition-colors">
              <Mail size={18} />
            </a>

          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
