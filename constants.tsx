
import React from 'react';
import { Service, CaseStudy, PricingPlan } from './types';

export const LOGOS = [
  "AquaAge", "Pathfinder", "UZABASE", "Speeda", "DENSO", "Canon", "MUFG", "東京工業大学大学院",
  "AquaAge", "Pathfinder", "UZABASE", "Speeda", "DENSO", "Canon", "MUFG", "東京工業大学大学院"
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
    desc: 'スタートアップのEquity調達や、研究開発型補助金の獲得を見据えた事業計画策定をサポート。',
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
      '累計 約2.8億円の資金調達を実現するサービスの立ち上げとPMF',
      '日経トレンディ「スタートアップ大賞」優秀賞受賞'
    ],
    tags: ['Scaling', 'Funding', 'PdM'],
    image: '/images/case-pathfinder.jpg',
    url: 'https://prtimes.jp/main/html/rd/p/000000009.000067457.html?fbclid=IwAR2OiTVml1slJHfoqw3wmREgW8K9zs8IwzW0-CApilDHztO5GXDGnbqfStE'
  },
  {
    id: 'aquaage',
    company: 'AquaAge株式会社',
    role: '新規事業企画  × 自律飛行 × ドローン',
    results: [
      '自律飛行ドローンを活用した物流自動化の事業構想策定',
      '研究開発型補助金獲得を見据えたR&D計画の立案',
      'PoC設計の確立と実行フェーズへの移行'
    ],
    tags: ['Drone', 'Usecase', 'R&D'],
    image: '/images/case-aquaage.jpg'
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
    image: '/images/case-uzabase.jpg'
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
