
import React from 'react';
import { Service, CaseStudy, PricingPlan } from './types';

export const LOGOS = [
  "AquaAge", "Pathfinder", "NewsPicks", "Speeda", "DENSO", "Canon", "MUFG", "UZABASE",
  "AquaAge", "Pathfinder", "NewsPicks", "Speeda", "DENSO", "Canon", "MUFG", "UZABASE"
];

export const SERVICES: Service[] = [
  { 
    title: '新規事業開発・事業構想', 
    desc: '市場課題の特定からビジネスモデル設計、収益シミュレーションまで。単なる「アイデア」を「事業計画」へ昇華させます。',
    icon: '🎯'
  },
  { 
    title: 'プロダクトマネジメント', 
    desc: '要件定義、ロードマップ策定、開発チーム統括。技術とビジネスの橋渡し役として、最短距離でのPMFを目指します。',
    icon: '🚀'
  },
  { 
    title: 'AI / 先端技術活用支援', 
    desc: '生成AI・LLM・空間ID等の先端技術をどう事業に組み込むか。PoC設計から実戦投入までを技術的理解に基づき支援します。',
    icon: '🧠'
  },
  { 
    title: '資金調達・補助金支援', 
    desc: 'スタートアップのEquity調達（累計2.8億の実績）や、研究開発型補助金の獲得を見据えた事業計画策定をサポート。',
    icon: '💳'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pathfinder',
    company: 'Pathfinder株式会社',
    role: 'PdM / 事業責任者 / プロダクト統括',
    results: [
      '片道レンタカー「カタレン」のサービス立ち上げから統括',
      '累計 約2.8億円の資金調達をリード',
      '日経トレンディ「スタートアップ大賞」優秀賞受賞'
    ],
    tags: ['Scaling', 'Funding', 'PdM'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aquaage',
    company: 'AquaAge株式会社',
    role: '新規事業企画 / AI × 空間ID × ドローン',
    results: [
      '空間IDを活用した物流自動化の事業構想策定',
      '研究開発型補助金獲得を見据えたR&D計画の立案',
      'PoC設計の確立と実行フェーズへの移行'
    ],
    tags: ['AI', 'Spatial-ID', 'R&D'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'uzabase',
    company: '株式会社ユーザベース',
    role: 'Speeda R&D PdM / セールス責任者',
    results: [
      'ARR20億円規模SaaSのプロダクトマネジメント',
      '機械学習・生成AIを活用した新機能の実装',
      '大手企業向けエンタープライズ営業チームの統括'
    ],
    tags: ['SaaS', 'Enterprise', 'GenAI'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: 'アドバイザリー',
    price: '¥200,000〜',
    features: ['週1回のオンライン定例', '戦略・事業アイデアの壁打ち', '随時チャット相談', '月10時間程度の稼働'],
  },
  {
    name: 'ハンズオン伴走',
    price: '¥600,000〜',
    features: ['週2〜3日の実働コミット', '要件定義・仕様書作成代行', '開発チームとの定例参加', 'ステークホルダー調整'],
    recommended: true
  },
  {
    name: '事業責任者代行',
    price: 'Custom',
    features: ['週4日以上のフルコミット', '事業KPIの策定と責任', '採用・チームビルディング支援', '中長期の経営戦略策定'],
  }
];
