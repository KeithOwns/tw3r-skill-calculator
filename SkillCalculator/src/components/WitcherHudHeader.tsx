import type React from 'react';
import { useBuild } from '../context/BuildStateContext';

export const WitcherHudHeader: React.FC = () => {
  const { level, resetEntireTree, copyShareableLink, currentView, setCurrentView } = useBuild();

  return (
    <header className="tw-hud-header">
      {/* Brand Title Logo & Level Indicator */}
      <div className="hud-left-group" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <a href="#top" title="The Witcher 3: Wild Hunt - REMASTERED v5.00c" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="./assets/brand/tw3r_logo.png"
            alt="The Witcher 3: Remastered"
            className="hud-brand-logo"
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.85))',
              cursor: 'pointer'
            }}
          />
        </a>
        <div className="hud-level-box">
          <span className="hud-level-label">LEVEL</span>
          <span className="hud-level-number">{level}</span>
          <div className="hud-xp-bar-container">
            <div className="hud-xp-frame">
              <div className="hud-xp-fill" style={{ width: '35%' }} />
            </div>
            <span className="hud-xp-text">0 / 2000</span>
          </div>
        </div>
      </div>

      {/* Center Navigation Tabs with In-Game Menu Icons */}
      <nav className="hud-nav-menu">
        <span className="hud-nav-arrow">&lt;</span>
        <div className="hud-nav-tab-item">
          <span className="hud-tab-icon">📖</span>
          <span className="hud-nav-tab">GLOSSARY</span>
        </div>
        <div className="hud-nav-tab-item">
          <span className="hud-tab-icon">⚗️</span>
          <span className="hud-nav-tab">ALCHEMY</span>
        </div>
        <div className="hud-nav-tab-item">
          <span className="hud-tab-icon">🎒</span>
          <span className="hud-nav-tab">INVENTORY</span>
        </div>
        <div className="hud-nav-tab-item">
          <span className="hud-tab-icon">🧭</span>
          <span className="hud-nav-tab">WORLD MAP</span>
        </div>
        <div className="hud-nav-tab-item">
          <span className="hud-tab-icon">📜</span>
          <span className="hud-nav-tab">QUESTS</span>
        </div>
        <div 
          className={`hud-nav-tab-item ${currentView === 'calculator' ? 'active-character-tab' : ''}`}
          onClick={() => setCurrentView('calculator')}
          style={{ cursor: 'pointer' }}
        >
          <span className="hud-tab-icon">👁️</span>
          <span className="hud-nav-tab">CHARACTER</span>
        </div>
        <div className="hud-nav-tab-item">
          <span className="hud-tab-icon">🔥</span>
          <span className="hud-nav-tab">MEDITATION</span>
        </div>
        <div 
          className={`hud-nav-tab-item ${currentView === 'guide' ? 'active-character-tab' : ''}`}
          onClick={() => setCurrentView('guide')}
          style={{ cursor: 'pointer' }}
        >
          <span className="hud-tab-icon">⚙️</span>
          <span className="hud-nav-tab">OPTIMIZATION</span>
        </div>
        <span className="hud-nav-arrow">&gt;</span>
      </nav>

      {/* Right Currency & Satchel Stats */}
      <div className="hud-right-stats">
        <div className="hud-stat-item" title="Crowns (Orens / Florens)">
          <span className="hud-stat-icon">👑</span>
          <span className="hud-stat-number">197501</span>
        </div>
        <div className="hud-stat-item" title="Inventory Weight / Maximum Capacity">
          <span className="hud-stat-icon">🎒</span>
          <span className="hud-stat-number">85 / 170</span>
        </div>
        <button
          className="hud-stat-item share-link-btn hover:brightness-125"
          title="Copy Shareable Build URL to Clipboard"
          onClick={copyShareableLink}
        >
          <span>🔗</span>
          <span>SHARE</span>
        </button>
        <button
          className="hud-btn-close"
          onClick={resetEntireTree}
          title="Reset All Allocations"
        >
          ✕
        </button>
      </div>
    </header>
  );
};
