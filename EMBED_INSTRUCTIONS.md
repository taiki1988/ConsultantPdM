# Profileセクションの埋め込み方法

このランディングページのProfileセクションを、Ai AFFECTSのサイト（https://aiaffects.com/）に埋め込む方法です。

## 方法1: iframeで埋め込む（推奨）

### 1. 埋め込み用のページを作成

このランディングページがデプロイされたURL（例: `https://consultant-pdm.example.com`）に、Profileセクションのみを表示するページを作成します。

```html
<!-- Ai AFFECTSのサイトに追加 -->
<iframe 
  src="https://consultant-pdm.example.com/profile-embed" 
  width="100%" 
  height="800" 
  frameborder="0"
  scrolling="no"
  style="border: none;"
></iframe>
```

### 2. 埋め込み用ページの作成

`App.tsx`に新しいルートを追加するか、専用の埋め込みページを作成します。

## 方法2: API経由でデータを取得して表示

### 1. Profileデータの取得

Ai AFFECTSのサイトから、以下のAPIエンドポイントからデータを取得できます：

```
GET https://consultant-pdm.example.com/api/profile.json
```

### 2. レスポンス例

```json
{
  "title": "「技術」を「利益」に、\n実動型ビジネスパートナー",
  "description": "三菱UFJ銀行、デンソー、キヤノンといった大企業の新規事業部門での経験と、ユーザベースのようなスタートアップでのプロダクト/営業 事業責任者の経験の「両面を併せ持つ」コンサルタントです。...",
  "image": "/images/profile.jpg",
  "years": "10+",
  "yearsLabel": "Years in Business Dev",
  "strengths": [
    {
      "title": "大企業 × スタートアップ",
      "description": "意思決定の複雑さとスピード感、両方の力学を理解し最適解を導きます。"
    },
    ...
  ]
}
```

### 3. Ai AFFECTSのサイトで使用

```javascript
// Ai AFFECTSのサイトで実行
async function loadProfileSection() {
  try {
    const response = await fetch('https://consultant-pdm.example.com/api/profile.json');
    const data = await response.json();
    
    // データを使用してProfileセクションをレンダリング
    renderProfileSection(data);
  } catch (error) {
    console.error('Error loading profile:', error);
  }
}
```

## 方法3: Reactコンポーネントとして埋め込む

Ai AFFECTSのサイトがReactを使用している場合、Profileコンポーネントを直接インポートして使用できます。

```tsx
import Profile from 'https://consultant-pdm.example.com/components/Profile';

function ServicesPage() {
  return (
    <div>
      {/* 他のコンテンツ */}
      <Profile dataUrl="https://consultant-pdm.example.com/api/profile.json" />
    </div>
  );
}
```

## データの更新について

Profileセクションの文言を変更する場合：

1. `/public/api/profile.json` ファイルを編集
2. 変更をデプロイ
3. Ai AFFECTSのサイトに自動的に反映されます（iframeの場合）または、次回のAPIリクエスト時に反映されます

## 注意事項

- 画像パスは絶対URLに変更する必要がある場合があります
- CORS設定が必要な場合があります
- レスポンシブデザインを考慮してください
