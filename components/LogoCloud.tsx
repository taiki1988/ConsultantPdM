
import React from 'react';
import { LOGOS } from '../constants';

const LogoCloud: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-bold text-textSub/50 uppercase tracking-[0.3em] mb-10">
          Trusted by Industry Leaders & Innovators
        </p>
        <div className="relative overflow-hidden scroll-mask">
          <div className="flex space-x-12 whitespace-nowrap animate-infinite-scroll">
            {LOGOS.map((name, idx) => (
              <div 
                key={`${name}-${idx}`} 
                className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <span className="text-xl md:text-2xl font-bold tracking-tighter text-primary">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
