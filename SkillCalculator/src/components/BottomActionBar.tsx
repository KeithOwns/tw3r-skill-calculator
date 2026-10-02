import type React from 'react';
import { useBuild } from '../context/BuildStateContext';

export const BottomActionBar: React.FC = () => {
  const {
    loadPreset,
    resetEntireTree,
    setIsMutationsModalOpen,
    activePresetKey
  } = useBuild();

  return (
    <footer className="tw-hud-footer">
      {/* Left: In-Game Controller / Mouse Hints */}
      <div className="footer-game-prompts">
        <div className="prompt-item">
          <kbd>🐭</kbd>
          <span>Description size</span>
        </div>
        <div className="prompt-item">
          <kbd>Space</kbd>
          <span>Activate / Equip</span>
        </div>
        <div
          className="prompt-item cursor-pointer hover:opacity-80"
          onClick={() => setIsMutationsModalOpen(true)}
        >
          <kbd>C</kbd>
          <span>Mutations</span>
        </div>
      </div>

      {/* Right: Presets & Reset */}
      <div className="footer-preset-buttons">
        <button
          className={`btn-preset-pill ${activePresetKey === 'cat_eyes_sniper' ? 'active' : ''}`}
          onClick={() => loadPreset('cat_eyes_sniper')}
          title="Load Cat Eyes Sniper (SwordsNCrossbowDPS + SwapOutFOA)"
        >
          🎯 Cat Eyes Hybrid (Snips)
        </button>

        <button
          className={`btn-preset-pill ${activePresetKey === 'bloodbath_melee' ? 'active' : ''}`}
          onClick={() => loadPreset('bloodbath_melee')}
          title="Load Bloodbath Pure Melee (+250% Attack Power)"
        >
          ⚔️ Bloodbath Melee (+250% AP)
        </button>

        <button
          className={`btn-preset-pill ${activePresetKey === 'swords_tank' ? 'active' : ''}`}
          onClick={() => loadPreset('swords_tank')}
          title="Load Mutated Skin Heavy Tank (-45% Damage Reduction)"
        >
          🛡️ Mutated Skin Tank (-45% DR)
        </button>

        <button
          className={`btn-preset-pill ${activePresetKey === 'archmage_pyromancer' ? 'active' : ''}`}
          onClick={() => loadPreset('archmage_pyromancer')}
          title="Load Piercing Cold Grandmaster (All 20 Signs Mastered + Piercing Cold +160% Signs)"
        >
          ❄️ Piercing Cold (+160% Signs)
        </button>

        <button
          className={`btn-preset-pill ${activePresetKey === 'max_toxicity_manticore' ? 'active' : ''}`}
          onClick={() => loadPreset('max_toxicity_manticore')}
          title="Load Max Toxicity Manticore Chemist (234 Max Toxicity | 15,902 HP | 4 Decoctions + Metamorphosis)"
        >
          🧪 Manticore Chemist (234 Tox)
        </button>

        <button
          className={`btn-preset-pill ${activePresetKey === 'euphoria_toxic' ? 'active' : ''}`}
          onClick={() => loadPreset('euphoria_toxic')}
          title="Load Euphoria Toxic Chemist (Euphoria Mutation + Maxed Alchemy & Toxicity)"
        >
          ☣️ Euphoria Chemist (+Toxic)
        </button>

        <button
          className={`btn-preset-pill ${activePresetKey === 'snips_titan' ? 'active' : ''}`}
          onClick={() => loadPreset('snips_titan')}
          title="Load Level 100 Titan Reference (60 pts combat maxed)"
        >
          👑 Level 100 Titan (Maxed)
        </button>

        <button
          className="btn-preset-pill gold-glow"
          onClick={resetEntireTree}
          title="Reset All Allocations"
        >
          🔄 Reset
        </button>
      </div>
    </footer>
  );
};
