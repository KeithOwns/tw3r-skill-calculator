import type React from 'react';
import { useBuild } from '../context/BuildStateContext';

export const BottomActionBar: React.FC = () => {
  const {
    loadPreset,
    resetEntireTree,
    setIsMutationsModalOpen,
    activePresetKey,
    copyShareableLink,
    copyBuildSummary
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
          className={`btn-preset-pill ${activePresetKey === 'euphoria_best_build' ? 'active' : ''}`}
          onClick={() => loadPreset('euphoria_best_build')}
          title="Load Euphoria BestBuild (8216+ Silver DPS | 4 Red Mutagens +169% AP | Synergy in Quad 3 Slot 1)"
        >
          👑 Euphoria BestBuild (8216+ DPS)
        </button>

        <button
          className={`btn-preset-pill ${activePresetKey === 'euphoria_roaming_riposte' ? 'active' : ''}`}
          onClick={() => loadPreset('euphoria_roaming_riposte')}
          title="Load Euphoria Roaming / Riposte (Counterattack 3/3 + Razor Focus 3/3 + Resolve 3/3 + Fleet Footed 3/3)"
        >
          ⚔️ Euphoria Roaming / Riposte
        </button>

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
          className="btn-preset-pill share-glow"
          onClick={copyShareableLink}
          title="Copy Shareable Build URL to Clipboard"
        >
          🔗 Share Link
        </button>

        <button
          className="btn-preset-pill share-glow"
          onClick={copyBuildSummary}
          title="Copy Complete Build Summary to Clipboard"
        >
          📋 Copy Summary
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
