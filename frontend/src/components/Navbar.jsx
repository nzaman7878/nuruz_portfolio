import React, { useState, useEffect } from 'react';
import { Terminal, Folder, GitBranch, Code, Play, Sun, Moon } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Top IDE Window Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ide-surface border-b border-ide-border font-mono text-sm">
        <div className="flex items-center justify-between px-4 py-2">
          
          {/* Left: Window Controls & Title */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center space-x-2 text-syntax-comment">
              <Terminal size={14} />
              <span className="select-none">nuruzzaman-portfolio — bash</span>
            </div>
          </div>

          {/* Center: File Tabs */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`px-4 py-1 flex items-center space-x-2 border-t-2 transition-colors ${isHome ? 'border-[#79c0ff] bg-ide-bg text-on-background' : 'border-transparent text-syntax-comment hover:bg-ide-panel'}`}>
              <Code size={14} className={isHome ? 'text-syntax-variable' : 'text-syntax-comment'} />
              <span>index.jsx</span>
            </Link>
            <Link to="/projects" className={`px-4 py-1 flex items-center space-x-2 border-t-2 transition-colors ${!isHome ? 'border-[#79c0ff] bg-ide-bg text-on-background' : 'border-transparent text-syntax-comment hover:bg-ide-panel'}`}>
              <Folder size={14} className={!isHome ? 'text-syntax-variable' : 'text-syntax-comment'} />
              <span>projects/</span>
            </Link>
          </div>

          {/* Right: Status Icons */}
          <div className="flex items-center space-x-4 text-syntax-comment">
            <button 
              onClick={toggleTheme}
              className="p-1 rounded-md hover:bg-ide-panel hover:text-on-background transition-colors flex items-center justify-center"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-on-background transition-colors">
              <GitBranch size={14} />
              <span>main</span>
            </a>
            <div className="hidden sm:flex items-center space-x-2">
              <Play size={14} className="text-syntax-string-green" />
              <span>Running: PORT 3000</span>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
