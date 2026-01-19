
import React, { useState, useEffect } from 'react';
import { ProfileData } from '../types';

interface ProfileProps {
  dataUrl?: string;
  data?: ProfileData;
}

const Profile: React.FC<ProfileProps> = ({ dataUrl = '/api/profile.json', data: propData }) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(propData || null);
  const [loading, setLoading] = useState(!propData);

  useEffect(() => {
    if (propData) {
      setLoading(false);
      return;
    }
    
    const fetchData = async () => {
      try {
        // 絶対URLまたは相対URLを処理
        const url = dataUrl.startsWith('http') ? dataUrl : `${window.location.origin}${dataUrl}`;
        console.log('Fetching profile data from:', url);
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-cache'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Profile data loaded:', data);
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        console.error('Failed URL:', dataUrl);
        // フォールバックデータ
        setProfileData({
          title: '「技術」を「利益」に、\n実動型ビジネスパートナー',
          description: '三菱UFJ銀行、デンソー、キヤノンといった大企業の新規事業部門での経験と、ユーザベースのようなスタートアップでのプロダクト/営業 事業責任者の経験の「両面を併せ持つ」コンサルタントです。「何をすべきか」の戦略策定から、「どう作るか」の要件定義、そして「どう売るか」のセールス戦略まで、事業の全フェーズをプロフェッショナルとして牽引します。',
          image: '/images/profile.jpg',
          years: '10+',
          yearsLabel: 'Years in Business Dev',
          strengths: [
            { title: '大企業 × スタートアップ', description: '意思決定の複雑さとスピード感、両方の力学を理解し最適解を導きます。' },
            { title: 'ハンズオンの実行力', description: 'ドキュメント作成だけでなく、開発推進から営業まで自ら手を動かします。' },
            { title: 'AI・先端技術への精通', description: 'LLM、自動運転、AI、ドローン等、難解な技術を顧客価値へ翻訳可能です。' },
            { title: '確かな調達実績', description: 'VCからのEquity調達や補助金申請など、ファイナンス面でも貢献します。' }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataUrl, propData]);

  if (loading || !profileData) {
    return (
      <section id="profile" className="pt-16 pb-32 bg-primary text-white overflow-hidden relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">読み込み中...</div>
        </div>
      </section>
    );
  }

  const titleLines = profileData.title.split('\n');

  return (
    <section id="profile" className="pt-16 pb-32 bg-primary text-white overflow-hidden relative scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 transform translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-all"></div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src={profileData.image} 
                  alt="PdM Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-cta p-8 rounded-3xl shadow-2xl hidden md:block border-4 border-primary">
                <div className="text-4xl font-black mb-1">{profileData.years}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">{profileData.yearsLabel}</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              {titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12 font-medium">
              {profileData.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {profileData.strengths.map((item, i) => (
                <div key={i} className="group border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors">
                  <h4 className="font-black text-xl text-accent mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
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
