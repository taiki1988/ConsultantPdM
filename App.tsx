
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Profile from './components/Profile';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cta selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <LogoCloud />
        
        <Services />
        
        {/* Why Choose Section - 高級感と構造美を強化 */}
        <section className="pt-16 pb-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary rounded-[5rem] p-12 md:p-32 text-white flex flex-col lg:flex-row items-center gap-24 shadow-3xl relative overflow-hidden">
              {/* 背景のグラフィックレイヤー */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,112,243,0.15),transparent)]"></div>
              <div className="absolute top-10 left-10 text-[200px] font-black text-white/[0.03] leading-none select-none pointer-events-none">WHY</div>
              
              <div className="lg:w-1/2 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-[2px] w-12 bg-accent"></span>
                  <span className="text-accent font-black text-sm tracking-[0.4em] uppercase">Core Strength</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black leading-[1] mb-16 tracking-tighter">
                  その事業に、<br />
                  <span className="text-accent">「確信」</span>を
                </h2>
                <div className="space-y-16">
                  {[
                    { t: "構想から「事業化」まで", d: "コンサルティングに留まらず、プロダクト開発の現場に深く入り込み、事業が自走する仕組みを構築します。" },
                    { t: "技術的理解を伴う意思決定", d: "AI、Web3、IoT。先端技術の要件を理解した上で、ビジネスインパクトを最大化するプロダクト仕様を定義します。" },
                    { t: "大企業・スタートアップのハイブリッド", d: "上場企業の大規模事業から、シード期のスタートアップまで。全フェーズの力学を熟知しています。" }
                  ].map((item, i) => (
                    <div key={i} className="group relative pl-16 border-l border-white/10 hover:border-accent transition-colors">
                      <div className="absolute left-[-1px] top-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-500"></div>
                      <div className="text-sm font-black text-accent/40 mb-3 tracking-widest">PHASE_0{i+1}</div>
                      <h4 className="text-3xl font-black mb-4 tracking-tight">{item.t}</h4>
                      <p className="text-white/50 font-medium text-lg leading-relaxed max-w-md">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative z-10">
                <div className="relative">
                  {/* 装飾用の建築的なフレーム */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 border-t-2 border-l-2 border-accent/30 rounded-tl-[3rem]"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-2 border-r-2 border-accent/30 rounded-br-[3rem]"></div>
                  
                  <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] transform rotate-1 hover:rotate-0 transition-transform duration-1000">
                    <img 
                      src="/images/hero-background.jpg" 
                      alt="Office Strategy" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CaseStudies />
        <Profile />
        <Pricing />
        
        {/* Final CTA - より洗練されたコンバージョンエリア */}
        <section id="contact" className="pt-16 pb-32 bg-neutralBg scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="bg-white rounded-[5rem] p-12 md:p-32 border border-gray-100 shadow-[0_100px_200px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cta/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="inline-block px-8 py-3 bg-cta/10 text-cta rounded-full text-xs font-black tracking-[0.3em] uppercase mb-12">
                Launch your next project
              </div>
              <h2 className="text-5xl md:text-[80px] font-black text-primary mb-12 tracking-tighter leading-[0.9]">
                事業の加速に、<br />伴走が必要ですか？
              </h2>
              <p className="text-textSub text-xl md:text-2xl font-medium mb-20 max-w-2xl mx-auto leading-relaxed opacity-80">
                壁打ち、要件定義の代行、PMO支援など。<br />
                現在の課題を30分の無料セッションで整理しましょう。
              </p>
              
              <div className="flex flex-col items-center gap-10">
                <a 
                  href="https://aiaffects.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-20 py-10 bg-cta text-white rounded-[2.5rem] font-black text-2xl shadow-[0_30px_70px_rgba(0,112,243,0.4)] hover:shadow-[0_40px_90px_rgba(0,112,243,0.5)] hover:-translate-y-2 transition-all duration-500 inline-block"
                >
                  <span className="relative z-10 tracking-tight">面談を相談する</span>
                </a>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3 text-primary/40 font-black text-xs tracking-widest uppercase">
                    <div className="w-8 h-[1px] bg-primary/20"></div>
                    リンク先の問い合わせフォームからご連絡ください（24時間以内に返信します）
                    <div className="w-8 h-[1px] bg-primary/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API経由で取得するProfileセクション（テスト用） */}
        <Profile dataUrl="/api/profile.json" />
      </main>

      <Footer />
    </div>
  );
};

export default App;
