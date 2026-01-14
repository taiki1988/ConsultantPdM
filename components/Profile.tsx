
import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 transform translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-all"></div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="PdM Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-cta p-8 rounded-3xl shadow-2xl hidden md:block border-4 border-primary">
                <div className="text-4xl font-black mb-1">7+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years in Business Dev</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              「技術」を「利益」に変える、<br />
              実動型のビジネスパートナー。
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12 font-medium">
              三菱UFJ銀行、キヤノン、デンソーといった大企業の新規事業部門での経験と、スタートアップの事業責任者（資金調達2.8億）の両面を併せ持つ数少ないPdMです。
              「何をすべきか」の戦略策定から、「どう作るか」の要件定義、そして「どう売るか」のセールス戦略まで、事業の全フェーズをプロフェッショナルとして牽引します。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "大企業 × スタートアップ", text: "意思決定の複雑さとスピード感、両方の力学を理解し最適解を導きます。" },
                { title: "AI・先端技術への精通", d: "LLM、空間ID、ロボティクス等、難解な技術を顧客価値へ翻訳可能です。" },
                { title: "ハンズオンの実行力", d: "ドキュメント作成だけでなく、開発推進から営業まで自ら手を動かします。" },
                { title: "確かな調達実績", d: "VCからのEquity調達や補助金申請など、ファイナンス面でも貢献します。" }
              ].map((item, i) => (
                <div key={i} className="group border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                  <h4 className="font-black text-xl text-accent mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.text || item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
