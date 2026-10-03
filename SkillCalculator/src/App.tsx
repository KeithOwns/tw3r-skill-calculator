import { useState } from 'react';
import { BuildProvider, useBuild } from './context/BuildStateContext';
import { WitcherHudHeader } from './components/WitcherHudHeader';
import { DisciplineTabBar } from './components/DisciplineTabBar';
import { SkillTreeCanvas } from './components/SkillTreeCanvas';
import { SlottedMatrixPanel } from './components/SlottedMatrixPanel';
import { MutationsModal } from './components/MutationsModal';
import { EquipAbilityModal } from './components/EquipAbilityModal';
import { SkillTooltip } from './components/SkillTooltip';
import { BottomActionBar } from './components/BottomActionBar';
import './App.css';

function MainAppContent() {
  const [mobileTab, setMobileTab] = useState<'tree' | 'loadout'>('tree');
  const { toastMessage } = useBuild();

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#c89b3c]/30 selection:text-amber-200">
      <div>
        {/* Top Witcher HUD Header */}
        <WitcherHudHeader />

        {/* Toast Notification Banner */}
        {toastMessage && (
          <div className="hud-toast-banner">
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Mobile Viewport Toggle (Visible on smaller viewports) */}
        <div className="mobile-view-toggle">
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileTab === 'tree' ? 'active' : ''}`}
            onClick={() => setMobileTab('tree')}
          >
            🌿 Tree View
          </button>
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileTab === 'loadout' ? 'active' : ''}`}
            onClick={() => setMobileTab('loadout')}
          >
            ⚔️ Slotted Loadout
          </button>
        </div>

        {/* Symmetrical 16:9 Screen Viewport */}
        <main className="game-screen-viewport">
          {/* Left: Discipline Category Tabs & 2D Tree Canvas */}
          <section className={`tree-discipline-card ${mobileTab === 'tree' ? 'mobile-visible' : 'mobile-hidden'}`}>
            <DisciplineTabBar />
            <SkillTreeCanvas />
          </section>

          {/* Right: Symmetrical 4-Quadrant & Mutation Matrix */}
          <section className={`slotted-abilities-matrix ${mobileTab === 'loadout' ? 'mobile-visible' : 'mobile-hidden'}`}>
            <SlottedMatrixPanel />
          </section>
        </main>
      </div>

      {/* Bottom In-Game Action Bar with Presets */}
      <BottomActionBar />

      {/* Global Floating Tooltip */}
      <SkillTooltip />

      {/* Blood & Wine Mutations Modal */}
      <MutationsModal />

      {/* Equip Ability Modal */}
      <EquipAbilityModal />
    </div>
  );
}

export function App() {
  return (
    <BuildProvider>
      <MainAppContent />
    </BuildProvider>
  );
}

export default App;
