import type React from 'react';
import { useBuild } from '../context/BuildStateContext';

export const DisciplineTabBar: React.FC = () => {
  const {
    activeDiscipline,
    setActiveDiscipline,
    spentCombat,
    spentSigns,
    spentAlchemy,
    spentGeneral,
    setIsMutationsModalOpen
  } = useBuild();

  return (
    <div className="discipline-tabs-row">
      <div className="discipline-tabs-list">
        {/* Combat Tab */}
        <button
          className={`disc-tab-btn tab-combat ${activeDiscipline === 'combat' ? 'active' : ''}`}
          onClick={() => setActiveDiscipline('combat')}
          title="Combat Abilities"
        >
          <span className="disc-tab-icon">⚔️</span>
          <div className="disc-tab-bar" />
          <span className="disc-tab-points">{spentCombat}</span>
        </button>

        {/* Signs Tab */}
        <button
          className={`disc-tab-btn tab-signs ${activeDiscipline === 'signs' ? 'active' : ''}`}
          onClick={() => setActiveDiscipline('signs')}
          title="Signs Abilities (Magic)"
        >
          <span className="disc-tab-icon">👁️</span>
          <div className="disc-tab-bar" />
          <span className="disc-tab-points">{spentSigns}</span>
        </button>

        {/* Alchemy Tab */}
        <button
          className={`disc-tab-btn tab-alchemy ${activeDiscipline === 'alchemy' ? 'active' : ''}`}
          onClick={() => setActiveDiscipline('alchemy')}
          title="Alchemy Abilities"
        >
          <span className="disc-tab-icon">🧪</span>
          <div className="disc-tab-bar" />
          <span className="disc-tab-points">{spentAlchemy}</span>
        </button>

        {/* General Tab */}
        <button
          className={`disc-tab-btn tab-general ${activeDiscipline === 'general' ? 'active' : ''}`}
          onClick={() => setActiveDiscipline('general')}
          title="General Abilities"
        >
          <span className="disc-tab-icon">🐺</span>
          <div className="disc-tab-bar" />
          <span className="disc-tab-points">{spentGeneral}</span>
        </button>

        {/* Mutations Tab */}
        <button
          className="disc-tab-btn tab-mutations"
          onClick={() => setIsMutationsModalOpen(true)}
          title="Blood & Wine Mutation Matrix"
        >
          <span className="disc-tab-icon">🧬</span>
          <div className="disc-tab-bar" />
          <span className="disc-tab-points">958</span>
        </button>
      </div>

      <div className="disc-active-title">
        {activeDiscipline.toUpperCase()}
      </div>
    </div>
  );
};
