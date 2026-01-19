# ProfileセクションのAi AFFECTSサイトへの埋め込みマニュアル

このランディングページのProfileセクションを、Ai AFFECTSのサイト（https://aiaffects.com/）のサービスページに埋め込む方法です。

## 📋 概要

Profileセクションは、API経由でデータを取得する仕組みになっています。このランディングページの文言を変更すると、Ai AFFECTSのサイトにも自動的に反映されます。

## 🔗 APIエンドポイント

```
GET https://consultantpdm.aiaffects.com/api/profile.json
```

**実際のURL**: このランディングページがデプロイされているURL + `/api/profile.json`

## 📦 データ構造

### レスポンス例

```json
{
  "title": "「技術」を「利益」に、\n実動型ビジネスパートナー",
  "description": "三菱UFJ銀行、デンソー、キヤノンといった大企業の新規事業部門での経験と、ユーザベースのようなスタートアップでのプロダクト/営業 事業責任者の経験の「両面を併せ持つ」コンサルタントです。「何をすべきか」の戦略策定から、「どう作るか」の要件定義、そして「どう売るか」のセールス戦略まで、事業の全フェーズをプロフェッショナルとして牽引します。",
  "image": "https://consultantpdm.aiaffects.com/images/profile.jpg",
  "years": "10+",
  "yearsLabel": "Years in Business Dev",
  "strengths": [
    {
      "title": "大企業 × スタートアップ",
      "description": "意思決定の複雑さとスピード感、両方の力学を理解し最適解を導きます。"
    },
    {
      "title": "ハンズオンの実行力",
      "description": "ドキュメント作成だけでなく、開発推進から営業まで自ら手を動かします。"
    },
    {
      "title": "AI・先端技術への精通",
      "description": "LLM、自動運転、AI、ドローン等、難解な技術を顧客価値へ翻訳可能です。"
    },
    {
      "title": "確かな調達実績",
      "description": "VCからのEquity調達や補助金申請など、ファイナンス面でも貢献します。"
    }
  ]
}
```

## 🚀 実装方法

### 方法1: JavaScriptで動的に取得して表示（推奨）

Ai AFFECTSのサイトのサービスページに、以下のコードを追加します。

#### HTML構造

```html
<section id="consultant-profile" class="profile-section">
  <!-- ここに動的にコンテンツが挿入されます -->
  <div class="loading">読み込み中...</div>
</section>
```

#### JavaScript実装

```javascript
async function loadConsultantProfile() {
  try {
    const response = await fetch('https://consultantpdm.aiaffects.com/api/profile.json');
    if (!response.ok) {
      throw new Error('Failed to fetch profile data');
    }
    const data = await response.json();
    
    // 画像URLを絶対URLに変換
    const imageUrl = data.image.startsWith('http') 
      ? data.image 
      : `https://consultantpdm.aiaffects.com${data.image}`;
    
    // HTMLを生成
    const titleLines = data.title.split('\n');
    const html = `
      <section class="pt-16 pb-32 bg-[#0A3D62] text-white overflow-hidden relative">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 transform translate-x-32"></div>
        
        <div class="max-w-7xl mx-auto px-4 relative">
          <div class="flex flex-col lg:flex-row gap-20 items-center">
            <div class="lg:w-2/5">
              <div class="relative group">
                <div class="absolute -inset-4 bg-[#22D3EE]/20 rounded-3xl blur-2xl group-hover:bg-[#22D3EE]/30 transition-all"></div>
                <div class="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src="${imageUrl}" 
                    alt="PdM Expert" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="absolute -bottom-8 -right-8 bg-[#0070F3] p-8 rounded-3xl shadow-2xl hidden md:block border-4 border-[#0A3D62]">
                  <div class="text-4xl font-black mb-1">${data.years}</div>
                  <div class="text-xs font-bold uppercase tracking-widest opacity-80">${data.yearsLabel}</div>
                </div>
              </div>
            </div>
            
            <div class="lg:w-3/5">
              <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                ${titleLines.map(line => line).join('<br />')}
              </h2>
              <p class="text-xl text-white/70 leading-relaxed mb-12 font-medium">
                ${data.description}
              </p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                ${data.strengths.map(item => `
                  <div class="group border-l-2 border-[#22D3EE]/30 pl-6 hover:border-[#22D3EE] transition-colors">
                    <h4 class="font-black text-xl text-[#22D3EE] mb-2">${item.title}</h4>
                    <p class="text-sm text-white/50 leading-relaxed">${item.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    
    // コンテンツを挿入
    const container = document.getElementById('consultant-profile');
    if (container) {
      container.innerHTML = html;
    }
  } catch (error) {
    console.error('Error loading consultant profile:', error);
    // エラー時のフォールバック表示
    const container = document.getElementById('consultant-profile');
    if (container) {
      container.innerHTML = '<div class="error">プロフィール情報の読み込みに失敗しました。</div>';
    }
  }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', loadConsultantProfile);
```

#### 必要なCSS（Tailwind CSSを使用している場合）

上記のコードはTailwind CSSのクラスを使用しています。Tailwind CSSを使用していない場合は、以下のカスタムCSSを追加してください：

```css
.profile-section {
  background-color: #0A3D62;
  color: white;
  padding: 4rem 0 8rem;
  position: relative;
  overflow: hidden;
}

.profile-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.02);
  transform: skewX(-12deg) translateX(8rem);
}
```

### 方法2: Reactコンポーネントとして使用

Ai AFFECTSのサイトがReactを使用している場合：

```tsx
import React, { useState, useEffect } from 'react';

interface ProfileData {
  title: string;
  description: string;
  image: string;
  years: string;
  yearsLabel: string;
  strengths: {
    title: string;
    description: string;
  }[];
}

const ConsultantProfile: React.FC = () => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://consultantpdm.aiaffects.com/api/profile.json');
        const profileData = await response.json();
        setData(profileData);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (!data) return <div>エラーが発生しました</div>;

  const titleLines = data.title.split('\n');
  const imageUrl = data.image.startsWith('http') 
    ? data.image 
    : `https://consultantpdm.aiaffects.com${data.image}`;

  return (
    <section className="pt-16 pb-32 bg-[#0A3D62] text-white overflow-hidden relative">
      {/* 既存のProfileコンポーネントと同じ構造 */}
      {/* ... */}
    </section>
  );
};

export default ConsultantProfile;
```

### 方法3: iframeで埋め込む

シンプルな方法として、iframeで埋め込むことも可能です：

```html
<iframe 
  src="https://consultantpdm.aiaffects.com/#profile" 
  width="100%" 
  height="800" 
  frameborder="0"
  scrolling="no"
  style="border: none; width: 100%; min-height: 800px;"
></iframe>
```

## 🔄 データの更新方法

Profileセクションの文言を変更する場合：

1. このリポジトリの `/public/api/profile.json` ファイルを編集
2. 変更をコミット・プッシュ
3. デプロイを実行
4. Ai AFFECTSのサイトに自動的に反映されます（次回のAPIリクエスト時）

### 更新例

```json
{
  "title": "新しいタイトル",
  "description": "新しい説明文...",
  // ...
}
```

## 🎨 カスタマイズ

### 色の変更

Profileセクションで使用されている色：

- **背景色**: `#0A3D62` (primary)
- **アクセント色**: `#22D3EE` (accent)
- **CTA色**: `#0070F3` (cta)

これらの色をAi AFFECTSのサイトのデザインに合わせて調整できます。

### レスポンシブ対応

既にレスポンシブデザインに対応しています：
- モバイル: 縦並び表示
- デスクトップ: 横並び表示（画像左、テキスト右）

## ⚠️ 注意事項

1. **CORS設定**: 必要に応じて、サーバー側でCORSヘッダーを設定してください
2. **画像パス**: 画像は絶対URLで指定することを推奨します
3. **エラーハンドリング**: API取得に失敗した場合のフォールバック表示を実装してください
4. **キャッシュ**: ブラウザキャッシュを考慮し、必要に応じてキャッシュバスティングを実装してください

## 🐛 トラブルシューティング

### APIが取得できない場合

1. ブラウザのコンソールでエラーを確認
2. ネットワークタブでリクエストのステータスを確認
3. CORSエラーの場合は、サーバー側の設定を確認

### 画像が表示されない場合

1. 画像のURLが絶対URLになっているか確認
2. 画像ファイルが正しくデプロイされているか確認

## 📞 サポート

問題が発生した場合は、このリポジトリのIssueで報告してください。
