import { BuildProvider } from './context/BuildStateContext';
import { WitcherHudHeader } from './components/WitcherHudHeader';
import { DisciplineTabBar } from './components/DisciplineTabBar';
import { SkillTreeCanvas } from './components/SkillTreeCanvas';
import { SlottedMatrixPanel } from './components/SlottedMatrixPanel';
import { MutationsModal } from './components/MutationsModal';
import { EquipAbilityModal } from './components/EquipAbilityModal';
import { SkillTooltip } from './components/SkillTooltip';
import { BottomActionBar } from './components/BottomActionBar';
import './App.css';

export function App() {
  return (
    <BuildProvider>
      <div className="min-h-screen flex flex-col justify-between selection:bg-[#c89b3c]/30 selection:text-amber-200">
        <div>
          {/* Top Witcher HUD Header */}
          <WitcherHudHeader />

          {/* Symmetrical 16:9 Screen Viewport */}
          <main className="game-screen-viewport">
            {/* Left: Discipline Category Tabs & 2D Tree Canvas */}
            <section className="tree-discipline-card">
              <DisciplineTabBar />
              <SkillTreeCanvas />
            </section>

            {/* Right: Symmetrical 4-Quadrant & Mutation Matrix */}
            <section className="slotted-abilities-matrix">
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
    </BuildProvider>
  );
}

export default App;
