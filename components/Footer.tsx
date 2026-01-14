
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black text-primary tracking-tighter">
            CONSULTANT<span className="text-cta">.</span>PDM
          </div>
          <nav className="flex gap-8 text-sm font-bold text-textSub">
            <a href="#" className="hover:text-cta">プライバシーポリシー</a>
            <a href="#" className="hover:text-cta">特定商取引法に基づく表記</a>
            <a href="https://twitter.com" className="hover:text-cta">X (Twitter)</a>
          </nav>
          <div className="text-xs text-textSub/60 font-medium">
            © 2024 PdM Professional Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
