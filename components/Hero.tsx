
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-[#FFFFFF]">
      {/* デザインの骨組みを感じさせる精密なガイドライン */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #0A3D62 1px, transparent 1px),
            linear-gradient(to bottom, #0A3D62 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px' 
        }}>
      </div>
      
      {/* 右側のビジュアル：高級感のあるテクスチャと建築的構図 */}
      <div className="absolute top-0 right-0 w-full lg:w-[48%] h-full z-0 hidden lg:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Structure" 
          className="w-full h-full object-cover grayscale opacity-90 contrast-125 transition-transform duration-[10s] hover:scale-110"
        />
        {/* デザインを締める垂直の「真鍮色」のようなアクセントライン */}
        <div className="absolute top-0 left-0 w-[1px] h-full bg-cta/20 z-20"></div>
        <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-cta z-20 transform -translate-y-1/2"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10 w-full">
        <div className="max-w-5xl">
          {/* 上部：メタデータの配置（デザイナーのこだわり） */}
          <div className="flex items-center gap-8 mb-20 animate-fade-up">
            <div className="flex flex-col">
              <span className="text-cta font-black text-[11px] tracking-[0.8em] uppercase leading-none">
                Core Execution Partner
              </span>
              <span className="text-primary/20 text-[10px] font-bold tracking-widest mt-2 uppercase">
                Ver. 2024 / Portfolio Release
              </span>
            </div>
            <div className="h-[40px] w-[1px] bg-primary/10 rotate-[25deg]"></div>
            <div className="text-4xl font-black text-primary/5 tracking-tighter leading-none select-none">
              #001
            </div>
          </div>

          {/* メインコピー：色彩とサイズの動的バランス（文言維持） */}
          <h1 className="text-6xl md:text-[135px] font-black leading-[0.8] mb-14 tracking-tighter animate-fade-up">
            <span className="text-primary block mb-2">事業を</span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cta to-accent" style={{ lineHeight: '1.1', paddingTop: '0.05em', paddingBottom: '0.05em' }}>
              「構想」
            </span>
            <span className="text-primary block mt-2 tracking-[-0.05em]">
              終わらせない<span className="text-cta opacity-50">。</span>
            </span>
          </h1>

          {/* リード文：階層化されたタイポグラフィ（文言維持） */}
          <div className="max-w-2xl mb-24 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cta to-transparent opacity-30"></div>
              <p className="text-xl md:text-3xl text-textSub leading-[1.4] font-medium tracking-tight">
                <span className="text-primary/60 block text-lg font-bold mb-4 uppercase tracking-[0.2em]">Our Domain</span>
                大手企業からスタートアップ、研究機関まで。<br />
                先端技術をビジネスに変え、<br />
                <span className="text-primary font-black border-b-[6px] border-cta/10 pb-1">PMFから2.8億の資金調達</span>まで導いた実績で、<br />
                貴社の新規事業を加速させます。
              </p>
            </div>
          </div>

          {/* CTA：インダストリアルな機能美 */}
          <div className="flex flex-col sm:flex-row items-center gap-14 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="group relative px-12 py-6 bg-primary text-white font-black text-xl tracking-tight rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,112,243,0.3)] hover:-translate-y-1"
            >
              {/* ホバー時のグラデーション背景 */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cta to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* 微細な光の効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">問い合わせる</span>
            </a>
            
            <div className="flex flex-col gap-1">
              <a 
                href="#cases" 
                className="group flex items-center gap-6 font-black text-xl text-primary hover:text-cta transition-colors"
              >
                <span className="relative">
                  実績を見る
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-cta transition-all duration-500 group-hover:w-full"></span>
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-primary/10 flex items-center justify-center group-hover:border-cta group-hover:rotate-45 transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
              <span className="text-[10px] font-black text-textSub/30 tracking-[0.4em] uppercase ml-1">Case Studies Detail</span>
            </div>
          </div>
        </div>
      </div>

      {/* 左下のデザイン署名 */}
      <div className="absolute left-10 bottom-10 hidden xl:block">
        <div className="flex items-center gap-4 opacity-20">
          <div className="text-[10px] font-black tracking-[1em] uppercase vertical-text" style={{ writingMode: 'vertical-rl' }}>
            Concrete Reality
          </div>
          <div className="h-24 w-[1px] bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
