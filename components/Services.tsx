
import React from 'react';
import { SERVICES } from '../constants';

// プロフェッショナルで抽象度の高い高品質イメージの選定（URLを最新の有効なものに更新）
const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200", // 事業構想: 洗練されたビジネス・プランニングの空気感
  "https://images.unsplash.com/photo-1531403001835-4c9c94a73ade?auto=format&fit=crop&q=80&w=1200", // PdM: UI/UX設計とチームビルディング（信頼性の高いURL）
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200", // AI: 先端技術・ネットワーク
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200", // 資金調達: 近代的な建築と光（成長のメタファー）
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cta/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* ヘッダー部分 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-cta"></span>
              <span className="text-cta font-black text-xs tracking-[0.4em] uppercase">Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter leading-[0.95]">
              不確実性を、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cta to-accent">価値に変える。</span>
            </h2>
          </div>
          <p className="text-lg text-textSub font-medium max-w-sm leading-relaxed border-l border-gray-200 pl-8 mb-2">
            先端技術の理解と、泥臭い現場の実行力。<br />
            相反する要素を高度に融合させ、事業を成功へと導きます。
          </p>
        </div>
        
        {/* サービスカードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col h-[320px] md:h-[380px] rounded-[3rem] overflow-hidden bg-neutralBg border border-gray-100 shadow-sm hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {/* ビジュアルイメージ背景 */}
              <div className="absolute inset-0 z-0 bg-primary/10">
                <img 
                  src={SERVICE_IMAGES[idx]} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    // 万が一画像が読み込めない場合のフォールバック
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
                {/* 
                  グラデーションオーバーレイ: 
                  初期状態は少し明るめに、ホバー時に深みを出すことで高級感を演出 
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* カード内の装飾番号 */}
              <div className="absolute top-10 right-10 text-8xl font-black text-white/10 select-none transition-all duration-700 group-hover:text-accent/20 group-hover:-translate-y-2">
                0{idx + 1}
              </div>

              {/* テキストコンテンツ */}
              <div className="mt-auto p-10 md:p-12 relative z-10">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                  <span className="text-accent text-[10px] font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase">Expertise_{idx + 1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed font-medium transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {service.desc}
                </p>
              </div>

              {/* ホバー時のボトムアクセントライン */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cta via-accent to-cta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          ))}
        </div>

        {/* 下部デコレーションエリア */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/10"></div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-cta animate-pulse"></div>
            <div className="text-[10px] font-black tracking-[0.6em] text-primary/60 uppercase whitespace-nowrap">
              Precision meets Innovation
            </div>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
