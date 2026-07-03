import React, { useState } from 'react';
import { Terminal, Folder, GitBranch, Code, Play } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Top IDE Window Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161b22] border-b border-[#30363d] font-mono text-sm">
        <div className="flex items-center justify-between px-4 py-2">
          
          {/* Left: Window Controls & Title */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="flex items-center space-x-2 text-[#8b949e]">
              <Terminal size={14} />
              <span className="select-none">nuruzzaman-portfolio — bash</span>
            </div>
          </div>

          {/* Center: File Tabs */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`px-4 py-1 flex items-center space-x-2 border-t-2 transition-colors ${isHome ? 'border-[#79c0ff] bg-[#0d1117] text-[#c9d1d9]' : 'border-transparent text-[#8b949e] hover:bg-[#21262d]'}`}>
              <Code size={14} className={isHome ? 'text-[#79c0ff]' : 'text-[#8b949e]'} />
              <span>index.jsx</span>
            </Link>
            <Link to="/projects" className={`px-4 py-1 flex items-center space-x-2 border-t-2 transition-colors ${!isHome ? 'border-[#79c0ff] bg-[#0d1117] text-[#c9d1d9]' : 'border-transparent text-[#8b949e] hover:bg-[#21262d]'}`}>
              <Folder size={14} className={!isHome ? 'text-[#79c0ff]' : 'text-[#8b949e]'} />
              <span>projects/</span>
            </Link>
          </div>

          {/* Right: Status Icons */}
          <div className="flex items-center space-x-4 text-[#8b949e]">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-[#c9d1d9] transition-colors">
              <GitBranch size={14} />
              <span>main</span>
            </a>
            <div className="hidden sm:flex items-center space-x-2">
              <Play size={14} className="text-[#7ee787]" />
              <span>Running: PORT 3000</span>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
