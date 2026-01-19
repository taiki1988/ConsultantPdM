
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-black text-primary tracking-tighter hover:opacity-80 transition-opacity"
        >
          CONSULTANT<span className="text-cta">.</span>PDM
        </a>
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#services" className="hover:text-cta transition-colors">サービス</a>
          <a href="#cases" className="hover:text-cta transition-colors">実績</a>
          <a href="#profile" className="hover:text-cta transition-colors">プロフィール</a>
          <a href="#pricing" className="hover:text-cta transition-colors">料金</a>
          <a 
            href="#contact" 
            className="bg-cta text-white px-6 py-2.5 rounded-full hover:bg-cta-hover transition-all shadow-lg shadow-cta/20 font-bold"
          >
            無料相談する
          </a>
        </nav>
        <button className="md:hidden text-primary">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
