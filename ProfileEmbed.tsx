import React from 'react';
import Profile from './components/Profile';

// 埋め込み用のProfileセクションのみを表示するページ
const ProfileEmbed: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A3D62' }}>
      <Profile />
    </div>
  );
};

export default ProfileEmbed;
