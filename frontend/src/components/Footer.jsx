import React from 'react';
import { GitBranch, Wifi, CheckCircle2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] font-mono text-xs text-[#8b949e]">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <div className="flex items-center hover:text-[#c9d1d9] transition-colors cursor-pointer">
            <GitBranch size={14} className="mr-1" />
            <span>main*</span>
          </div>
          <div className="flex items-center hover:text-[#c9d1d9] transition-colors cursor-pointer">
            <CheckCircle2 size={14} className="mr-1" />
            <span>0 errors, 0 warnings</span>
          </div>
          <div className="hidden sm:flex items-center text-[#ff7b72]">
            <span>admin@nuruzzaman</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#c9d1d9] transition-colors">
            <Github size={14} className="mr-1" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#c9d1d9] transition-colors">
            <Linkedin size={14} className="mr-1" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:hello@example.com" className="flex items-center hover:text-[#c9d1d9] transition-colors">
            <Mail size={14} className="mr-1" />
            <span>Contact</span>
          </a>
        </div>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <div className="hidden md:block">UTF-8</div>
          <div className="hidden md:block">CRLF</div>
          <div className="flex items-center text-[#7ee787]">
            <Wifi size={14} className="mr-1" />
            <span>Online</span>
          </div>
          <div>&copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
