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
    <div className="discipline-header-container">
      {/* 5 In-Game Tree Icons Strip (Top-Left) */}
      <div className="discipline-icons-strip">
        {/* Combat */}
        <button
          type="button"
          className={`disc-mini-tab tab-combat ${activeDiscipline === 'combat' ? 'active' : ''}`}
          onClick={() => setActiveDiscipline('combat')}
          title="Combat Abilities (Swordplay & Melee)"
        >
          <span className="disc-icon">⚔️</span>
          <div className="disc-underline combat" />
          <span className="disc-points-count">{spentCombat}</span>
        </button>

        {/* Signs */}
        <button
          type="button"
          className={`disc-mini-tab tab-signs ${activeDiscipline === 'signs' ? 'active' : ''}`}
          onClick={() => setActiveDiscipline('signs')}
          title="Signs Abilities (Magic & Runes)"
        >
          <span className="disc-icon">👁️</span>
          <div className="disc-underline signs" />
          <span className="disc-points-count">{spentSigns}</span>
        </button>

        {/* Alchemy */}
        <button
          type="button"
          className={`disc-mini-tab tab-alchemy ${activeDiscipline === 'alchemy' ? 'active' : ''}`}
          onClick={() => setActiveDiscipline('alchemy')}
          title="Alchemy Abilities (Potions, Oils & Decoctions)"
        >
          <span className="disc-icon">🧪</span>
          <div className="disc-underline alchemy" />
          <span className="disc-points-count">{spentAlchemy}</span>
        </button>

        {/* General */}
        <button
          type="button"
          className={`disc-mini-tab tab-general ${activeDiscipline === 'general' ? 'active' : ''}`}
          onClick={() => setActiveDiscipline('general')}
          title="General Abilities (Techniques & Survival)"
        >
          <span className="disc-icon">🐺</span>
          <div className="disc-underline general" />
          <span className="disc-points-count">{spentGeneral}</span>
        </button>

        {/* Mutations / Mutagens */}
        <button
          type="button"
          className="disc-mini-tab tab-mutations"
          onClick={() => setIsMutationsModalOpen(true)}
          title="Blood & Wine Mutation Matrix (Press C)"
        >
          <span className="disc-icon">🧬</span>
          <div className="disc-underline mutations" />
          <span className="disc-points-count">869</span>
        </button>
      </div>

      {/* Centered Active Tree Title */}
      <div className="discipline-centered-title">
        {activeDiscipline.toUpperCase()}
      </div>
    </div>
  );
};
