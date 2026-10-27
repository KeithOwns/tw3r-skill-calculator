import React, { useState } from 'react';
import { useBuild } from '../context/BuildStateContext';
import { PRESETS_DATA } from '../data/groundTruthData';

export const BottomActionBar: React.FC = () => {
  const {
    loadPreset,
    resetEntireTree,
    setIsMutationsModalOpen,
    activePresetKey,
    copyShareableLink,
    copyBuildSummary
  } = useBuild();

  const [isPresetsDrawerOpen, setIsPresetsDrawerOpen] = useState<boolean>(false);

  return (
    <footer className="tw-hud-footer">
      {/* Center / Left: In-Game Controller / Mouse Prompts (Matches Screenshot) */}
      <div className="footer-game-prompts">
        <div className="prompt-item" title="Rotate mouse wheel over tooltips to resize description box">
          <kbd>🐭</kbd>
          <span>Description size</span>
        </div>
        <div className="prompt-item" title="Press Space to activate or slot the selected ability">
          <kbd>Space</kbd>
          <span>Activate / Equip</span>
        </div>
        <div
          className="prompt-item cursor-pointer hover:opacity-80"
          onClick={() => setIsMutationsModalOpen(true)}
          title="Press C to open advanced Mutations matrix"
        >
          <kbd>C</kbd>
          <span>Mutations</span>
        </div>
      </div>

      {/* Right: Presets Drawer Trigger & Quick Controls */}
      <div className="footer-preset-controls">
        <button
          type="button"
          className={`btn-preset-pill ${activePresetKey === 'in_game_screenshot' ? 'active' : ''}`}
          onClick={() => loadPreset('in_game_screenshot')}
          title="Load Authentic In-Game Build from Screenshot (13 Combat, 7 Alchemy, 4 General, 4 Red Mutagens)"
        >
          👑 In-Game Screenshot (Euphoria)
        </button>

        <button
          type="button"
          className={`btn-preset-pill ${activePresetKey === 'alpha_strike_boss' ? 'active' : ''}`}
          onClick={() => loadPreset('alpha_strike_boss')}
          title="Load Alpha-Strike Boss Executioner (164%+ Overflow Crit | 43,608 Peak Hit | TKSS + Viper / Iris & Aerondight)"
        >
          ⚡ Alpha-Strike (43k Crit)
        </button>

        <button
          type="button"
          className="btn-preset-pill gold-glow"
          onClick={() => setIsPresetsDrawerOpen(!isPresetsDrawerOpen)}
          title="Open complete library of 11 verified build presets"
        >
          <span>📜 ALL PRESETS ({Object.keys(PRESETS_DATA).length})</span>
          <span>{isPresetsDrawerOpen ? '▲' : '▾'}</span>
        </button>

        <button
          type="button"
          className="btn-preset-pill share-glow"
          onClick={copyShareableLink}
          title="Copy Shareable Build URL to Clipboard"
        >
          🔗 Share Link
        </button>

        <button
          type="button"
          className="btn-preset-pill share-glow"
          onClick={copyBuildSummary}
          title="Copy Complete Build Summary to Clipboard"
        >
          📋 Copy Summary
        </button>

        <button
          type="button"
          className="btn-preset-pill red-glow"
          onClick={resetEntireTree}
          title="Reset All Allocations"
        >
          🔄 Reset
        </button>
      </div>

      {/* Expanded Presets Drawer Modal / Overlay */}
      {isPresetsDrawerOpen && (
        <div className="presets-drawer-overlay" onClick={() => setIsPresetsDrawerOpen(false)}>
          <div className="presets-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="presets-drawer-header">
              <h3>THE WITCHER 3: REMASTERED — BUILD PRESETS</h3>
              <button
                type="button"
                className="btn-close-drawer"
                onClick={() => setIsPresetsDrawerOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="presets-drawer-grid">
              {Object.entries(PRESETS_DATA).map(([pKey, preset]) => (
                <div
                  key={pKey}
                  className={`preset-card-item ${activePresetKey === pKey ? 'active' : ''}`}
                  onClick={() => {
                    loadPreset(pKey);
                    setIsPresetsDrawerOpen(false);
                  }}
                >
                  <div className="preset-card-title">{preset.name}</div>
                  <div className="preset-card-subtitle">{preset.subtitle}</div>
                  <div className="preset-card-mutation">Mutation: {preset.mutation?.toUpperCase() || 'NONE'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
