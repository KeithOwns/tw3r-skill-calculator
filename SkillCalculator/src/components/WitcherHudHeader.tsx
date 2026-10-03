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

      {/* Center Navigation Tabs */}
      <nav className="hud-nav-menu">
        <span className="hud-nav-arrow">&lt;</span>
        <span className="hud-nav-tab">INVENTORY</span>
        <span className="hud-nav-tab">WORLD MAP</span>
        <span className="hud-nav-tab">QUESTS</span>
        <div 
          className={`hud-nav-tab ${currentView === 'calculator' ? 'active-character' : ''}`}
          onClick={() => setCurrentView('calculator')}
          style={{ cursor: 'pointer' }}
        >
          CHARACTER
        </div>
        <div 
          className={`hud-nav-tab ${currentView === 'guide' ? 'active-character' : ''}`}
          onClick={() => setCurrentView('guide')}
          style={{ cursor: 'pointer' }}
        >
          OPTIMIZATION
        </div>
        <span className="hud-nav-arrow">&gt;</span>
      </nav>

      {/* Right Currency & Satchel Stats */}
      <div className="hud-right-stats">
        <div className="hud-stat-item">
          <span className="hud-stat-icon">👑</span>
          <span>223,369</span>
        </div>
        <div className="hud-stat-item">
          <span className="hud-stat-icon">🎒</span>
          <span>142 / 170</span>
        </div>
        <button
          className="hud-stat-item hover:brightness-125"
          style={{
            background: 'linear-gradient(180deg, rgba(212, 169, 69, 0.22) 0%, rgba(125, 89, 29, 0.35) 100%)',
            border: '1px solid rgba(229, 184, 57, 0.45)',
            borderRadius: '3px',
            padding: '0.22rem 0.65rem',
            color: 'var(--tw-gold-light)',
            cursor: 'pointer',
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: '0.74rem',
            letterSpacing: '0.06em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
          title="Copy Shareable Build URL to Clipboard"
          onClick={copyShareableLink}
        >
          <span>🔗</span>
          <span>SHARE BUILD</span>
        </button>
        <button
          className="hud-btn-close"
          onClick={resetEntireTree}
          title="Reset All Allocations"
        >
          &times;
        </button>
      </div>
    </header>
  );
};
