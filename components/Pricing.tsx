
import React from 'react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-neutralBg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">料金プラン</h2>
          <p className="text-textSub">事業フェーズやご要望の支援度合いに合わせて柔軟に対応します</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-10 rounded-3xl border ${plan.recommended ? 'border-cta shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-sm'} transition-all`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Recommended
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-black text-primary mb-2">{plan.name}</h3>
                <div className="text-3xl font-black text-cta">{plan.price}</div>
                <div className="text-xs text-textSub mt-1">※支援内容により変動</div>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-textSub font-medium">
                    <span className="text-cta mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block text-center py-4 rounded-xl font-black transition-all ${
                  plan.recommended 
                    ? 'bg-cta text-white hover:bg-cta-hover shadow-lg shadow-cta/20' 
                    : 'bg-primary/5 text-primary hover:bg-primary/10'
                }`}
              >
                このプランを相談する
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center text-textSub text-sm mt-12 italic">
          ※上記の金額はあくまで目安です。プロジェクトの規模・難易度・期間により個別にお見積もりいたします。
        </p>
      </div>
    </section>
  );
};

export default Pricing;
