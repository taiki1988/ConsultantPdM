
import React from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="pt-16 pb-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">支援先（ケーススタディ）</h2>
          <p className="text-textSub font-medium">課題解決と確かな成果を</p>
        </div>

        <div className="space-y-20">
          {CASE_STUDIES.map((item, idx) => (
            <div 
              key={item.id} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                {item.url ? (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
                  >
                    <img 
                      src={item.image} 
                      alt={item.company} 
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </a>
                ) : (
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={item.image} 
                      alt={item.company} 
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl font-black text-primary mb-4">{item.company}</h3>
                <div className="inline-block px-4 py-1.5 bg-accent/10 text-primary font-bold text-sm rounded-lg mb-6">
                  {item.role}
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-lg text-primary">主な成果:</h4>
                  <ul className="space-y-3">
                    {item.results.map((res, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cta mr-3 mt-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-textSub font-medium">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
