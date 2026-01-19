
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a 
            href="#" 
            className="text-2xl font-black text-primary tracking-tighter hover:opacity-80 transition-opacity"
          >
            CONSULTANT<span className="text-cta">.</span>PDM
          </a>
          <nav className="flex gap-8 text-sm font-bold text-textSub">
            <a 
              href="https://aiaffects.com/CompanyOverview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cta"
            >
              運営会社（Ai AFFECTS）
            </a>
          </nav>
          <div className="text-xs text-textSub/60 font-medium">
            © 2024 Ai AFFECTS Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
