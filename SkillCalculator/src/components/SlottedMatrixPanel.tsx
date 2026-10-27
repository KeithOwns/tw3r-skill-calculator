import React, { useState } from 'react';
import { useBuild } from '../context/BuildStateContext';
import {
  COMBAT_SKILLS_DATA,
  SIGNS_SKILLS_DATA,
  ALCHEMY_SKILLS_DATA,
  GENERAL_SKILLS_DATA,
  MUTATIONS_DATA
} from '../data/groundTruthData';

export const SlottedMatrixPanel: React.FC = () => {
  const {
    slottedAbilities,
    allocatedSkills,
    slotSkill,
    unslotSkill,
    activeMutationId,
    setIsMutationsModalOpen,
    getQuadrantBonus,
    mutagenSockets,
    cycleMutagenSocket,
    selectedSlotIndex,
    setSelectedSlotIndex,
    setIsEquipModalOpen,
    swapSlots,
    characterTelemetry,
    setWeaponProfile
  } = useBuild();

  const [isTelemetryOpen, setIsTelemetryOpen] = useState<boolean>(false);

  const activeMutation = MUTATIONS_DATA[activeMutationId] || MUTATIONS_DATA.euphoria || MUTATIONS_DATA.cat_eyes;

  // Render individual ability slot with rank pips & authentic Witcher borders
  const renderSlot = (slotIdx: number, isBonus = false) => {
    const skillId = slottedAbilities[slotIdx];
    const skill = skillId 
      ? (COMBAT_SKILLS_DATA[skillId] || SIGNS_SKILLS_DATA[skillId] || ALCHEMY_SKILLS_DATA[skillId] || GENERAL_SKILLS_DATA[skillId]) 
      : null;
    const iconPath = skill ? (skill.icon.startsWith('./') ? skill.icon : `./${skill.icon.replace(/^\//, '')}`) : null;
    const currentRank = skillId ? (allocatedSkills[skillId] || skill?.maxRank || 3) : 0;
    const maxRank = skill?.maxRank || 3;

    const isFilled = Boolean(skill);
    const isSelected = selectedSlotIndex === slotIdx;
    const isSigns = skill?.category === 'signs' || (!skill?.category && !!SIGNS_SKILLS_DATA[skillId!]);
    const isAlchemy = skill?.category === 'alchemy' || (!skill?.category && !!ALCHEMY_SKILLS_DATA[skillId!]);
    const isGeneral = skill?.category === 'general';

    let slotClass = isBonus ? 'bonus-slot-unit' : 'game-ability-slot';
    if (isSelected) slotClass += ' selected';
    if (isFilled) {
      if (isSigns) slotClass += ' filled filled-signs';
      else if (isAlchemy) slotClass += ' filled filled-alchemy';
      else if (isGeneral) slotClass += ' filled filled-general';
      else slotClass += ' filled filled-combat';
    }

    return (
      <div
        key={slotIdx}
        className={slotClass}
        draggable={isFilled}
        onDragStart={(e) => {
          e.dataTransfer.setData('fromSlot', slotIdx.toString());
          if (skillId) e.dataTransfer.setData('text/plain', skillId);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'copy';
        }}
        onDrop={(e) => {
          e.preventDefault();
          const fromSlot = e.dataTransfer.getData('fromSlot');
          const draggedSkillId = e.dataTransfer.getData('text/plain');
          if (fromSlot !== '') {
            swapSlots(parseInt(fromSlot, 10), slotIdx);
          } else if (draggedSkillId) {
            slotSkill(draggedSkillId, slotIdx);
          }
        }}
        onClick={() => {
          setSelectedSlotIndex(slotIdx);
          setIsEquipModalOpen(true);
        }}
        title={skill ? `${skill.name} (${currentRank}/${maxRank})\nClick to change / unslot` : `Empty Slot ${slotIdx + 1}\nClick to equip ability`}
      >
        {iconPath ? (
          <>
            <img
              src={iconPath}
              alt={skill?.name}
              className="ability-slot-img"
            />
            {/* Rank Diamond Pips on slotted ability */}
            <div className="slot-rank-pips">
              {Array.from({ length: maxRank }).map((_, pIdx) => (
                <div
                  key={pIdx}
                  className={`slot-pip ${pIdx < currentRank ? 'filled' : ''} ${
                    isSigns
                      ? 'pip-signs'
                      : isAlchemy
                      ? 'pip-alchemy'
                      : isGeneral
                      ? 'pip-general'
                      : 'pip-combat'
                  }`}
                />
              ))}
            </div>
            <span
              className="slot-remove-badge"
              title="Remove skill"
              onClick={(e) => {
                e.stopPropagation();
                unslotSkill(slotIdx);
              }}
            >
              ✕
            </span>
          </>
        ) : (
          <div className="slot-empty-cross">+</div>
        )}
      </div>
    );
  };

  // Render a Quadrant containing Mutagen Socket + 3 Vertical Slots + Conduits
  const renderQuadrant = (quadIdx: number, startSlot: number, side: 'left' | 'right') => {
    const bonus = getQuadrantBonus(quadIdx);
    const socketColor = mutagenSockets[quadIdx] || 'red';
    const isSignBonus = socketColor === 'blue';
    const isAlchemyBonus = socketColor === 'green';

    let quadClass = 'quad-combat';
    let ribbonIcon = '⚔️';
    let socketClass = 'socket-red';
    let swirlClass = 'swirl-red';
    let valClass = '';
    let valueDisplay = `+${bonus.value}%`;
    let socketTitle = `Greater Red Mutagen (+${bonus.value}% Attack power)`;

    if (isAlchemyBonus) {
      quadClass = 'quad-alchemy';
      ribbonIcon = '🧪';
      socketClass = 'socket-green';
      swirlClass = 'swirl-green';
      valClass = 'alchemy-val';
      valueDisplay = `+${bonus.value}`;
      socketTitle = `Greater Green Mutagen (+${bonus.value} Vitality)`;
    } else if (isSignBonus) {
      quadClass = 'quad-signs';
      ribbonIcon = '👁️';
      socketClass = 'socket-blue';
      swirlClass = 'swirl-blue';
      valClass = 'signs-val';
      valueDisplay = `+${bonus.value}%`;
      socketTitle = `Greater Blue Mutagen (+${bonus.value}% Sign intensity)`;
    }

    const mutagenComponent = (
      <div className="mutagen-diamond-bracket" key={`mut-${quadIdx}`}>
        <div
          className={`mutagen-orb-socket ${socketClass}`}
          onClick={() => cycleMutagenSocket(quadIdx)}
          title={`${socketTitle} — Click to cycle Red / Green / Blue`}
        >
          <div className={`mutagen-swirl-core ${swirlClass}`} />
        </div>
      </div>
    );

    const slotsComponent = (
      <div className="quad-slots-column" key={`slots-${quadIdx}`}>
        {renderSlot(startSlot)}
        {renderSlot(startSlot + 1)}
        {renderSlot(startSlot + 2)}
      </div>
    );

    // SVG Conduits connecting mutagen to the 3 slots
    const isSlot0Match = Boolean(slottedAbilities[startSlot] && (
      (socketColor === 'red' && COMBAT_SKILLS_DATA[slottedAbilities[startSlot]!]) ||
      (socketColor === 'blue' && SIGNS_SKILLS_DATA[slottedAbilities[startSlot]!]) ||
      (socketColor === 'green' && ALCHEMY_SKILLS_DATA[slottedAbilities[startSlot]!])
    ));
    const isSlot1Match = Boolean(slottedAbilities[startSlot + 1] && (
      (socketColor === 'red' && COMBAT_SKILLS_DATA[slottedAbilities[startSlot + 1]!]) ||
      (socketColor === 'blue' && SIGNS_SKILLS_DATA[slottedAbilities[startSlot + 1]!]) ||
      (socketColor === 'green' && ALCHEMY_SKILLS_DATA[slottedAbilities[startSlot + 1]!])
    ));
    const isSlot2Match = Boolean(slottedAbilities[startSlot + 2] && (
      (socketColor === 'red' && COMBAT_SKILLS_DATA[slottedAbilities[startSlot + 2]!]) ||
      (socketColor === 'blue' && SIGNS_SKILLS_DATA[slottedAbilities[startSlot + 2]!]) ||
      (socketColor === 'green' && ALCHEMY_SKILLS_DATA[slottedAbilities[startSlot + 2]!])
    ));

    const conduitsSvg = (
      <svg className={`quad-conduits-svg ${side}`} viewBox="0 0 34 180" key={`svg-${quadIdx}`}>
        {side === 'left' ? (
          <>
            <path
              d="M 2 90 L 16 90 L 32 30"
              className={`conduit-line ${isSlot0Match ? `active-${socketColor}` : ''}`}
            />
            <path
              d="M 2 90 L 32 90"
              className={`conduit-line ${isSlot1Match ? `active-${socketColor}` : ''}`}
            />
            <path
              d="M 2 90 L 16 90 L 32 150"
              className={`conduit-line ${isSlot2Match ? `active-${socketColor}` : ''}`}
            />
          </>
        ) : (
          <>
            <path
              d="M 32 90 L 18 90 L 2 30"
              className={`conduit-line ${isSlot0Match ? `active-${socketColor}` : ''}`}
            />
            <path
              d="M 32 90 L 2 90"
              className={`conduit-line ${isSlot1Match ? `active-${socketColor}` : ''}`}
            />
            <path
              d="M 32 90 L 18 90 L 2 150"
              className={`conduit-line ${isSlot2Match ? `active-${socketColor}` : ''}`}
            />
          </>
        )}
      </svg>
    );

    return (
      <div className={`matrix-quadrant-block ${quadClass} quad-${side}`} key={quadIdx}>
        {/* Ribbon Banner */}
        <div className={`quad-ribbon-banner ${side}`}>
          {side === 'left' ? (
            <>
              <div className="ribbon-title-group">
                <span className="ribbon-swords-icon">{ribbonIcon}</span>
                <span className="ribbon-title">{bonus.label}</span>
              </div>
              <span className={`ribbon-ap-value ${valClass}`}>{valueDisplay}</span>
            </>
          ) : (
            <>
              <div className="ribbon-title-group">
                <span className="ribbon-title">{bonus.label}</span>
              </div>
              <div className="ribbon-title-group">
                <span className={`ribbon-ap-value ${valClass}`}>{valueDisplay}</span>
                <span className="ribbon-swords-icon">{ribbonIcon}</span>
              </div>
            </>
          )}
        </div>

        {/* Mutagen Socket + Conduits + 3 Slots */}
        <div className={`quad-elements-row ${side}`}>
          {side === 'left' ? (
            <>
              {mutagenComponent}
              {conduitsSvg}
              {slotsComponent}
            </>
          ) : (
            <>
              {slotsComponent}
              {conduitsSvg}
              {mutagenComponent}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="in-game-board-container">
      {/* Symmetrical In-Game Matrix Display */}
      <div className="in-game-matrix-symmetrical-view">
        {/* LEFT COLUMN: Quad 1 (Top-Left) and Quad 3 (Bottom-Left) */}
        <div className="matrix-quadrants-column left-column">
          {renderQuadrant(0, 0, 'left')}
          {renderQuadrant(2, 6, 'left')}
        </div>

        {/* CENTER COLUMN: Left Bonus Slots (12, 13), Euphoria Nexus, Right Bonus Slots (14, 15) */}
        <div className="matrix-center-nexus-column">
          {/* Header above nexus */}
          <div className="nexus-heading-block">
            <div className="mutation-label-heading">
              {activeMutation.name}
            </div>
            <button
              type="button"
              className="btn-mutations-trigger"
              onClick={() => setIsMutationsModalOpen(true)}
              title="Press C or click to open advanced mutations matrix"
            >
              <kbd>C</kbd> Mutations
            </button>
          </div>

          <div className="nexus-flanking-body">
            {/* 2 Bonus Slots on LEFT of orb */}
            <div className="nexus-flanking-slots-column left-flank">
              {renderSlot(12, true)}
              {renderSlot(13, true)}
            </div>

            {/* Glowing Central Mutation Nexus Orb */}
            <div
              className={`mutation-core-orb-wrapper mutation-${activeMutationId}`}
              onClick={() => setIsMutationsModalOpen(true)}
              title={`${activeMutation.name} — Click to switch mutations`}
            >
              <div className="mutation-core-outer-ring" />
              <div className="mutation-core-energy-vortex" />
              <div className="mutation-core-inner-orbs">
                <span className="mutagen-mini-dot green" />
                <span className="mutagen-mini-dot blue" />
                <span className="mutagen-mini-dot blue-dark" />
                <span className="mutagen-mini-dot purple" />
              </div>
            </div>

            {/* 2 Bonus Slots on RIGHT of orb */}
            <div className="nexus-flanking-slots-column right-flank">
              {renderSlot(14, true)}
              {renderSlot(15, true)}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Quad 2 (Top-Right) and Quad 4 (Bottom-Right) */}
        <div className="matrix-quadrants-column right-column">
          {renderQuadrant(1, 3, 'right')}
          {renderQuadrant(3, 9, 'right')}
        </div>

        {/* FLOATING DESCRIPTION TO THE RIGHT (As seen in the screenshot) */}
        <div className="matrix-floating-desc-container">
          <p className="matrix-mutation-desc-text">
            {activeMutation.fullDesc}
          </p>
        </div>
      </div>

      {/* DOCKABLE COMBAT TELEMETRY DRAWER */}
      <div className="telemetry-collapsible-bar">
        <button
          type="button"
          className="telemetry-drawer-toggle-btn"
          onClick={() => setIsTelemetryOpen(!isTelemetryOpen)}
          title="Toggle live weapon telemetry, crit damage multipliers, and equipment build details"
        >
          <span className="toggle-left">
            <span>⚔️</span>
            <span className="toggle-title">LIVE COMBAT TELEMETRY & WEAPON LOADOUT</span>
            <span className="toggle-badge gold">Fast Crit: {characterTelemetry.fastCritDmg.toLocaleString()}</span>
            <span className="toggle-badge red">Rend: {characterTelemetry.strongCritDmg.toLocaleString()}</span>
            <span className="toggle-badge blue">{characterTelemetry.critChance}% Crit</span>
          </span>
          <span className="toggle-right">{isTelemetryOpen ? '▲ COLLAPSE' : '▼ EXPAND DETAILS'}</span>
        </button>

        {isTelemetryOpen && (
          <div className="telemetry-expanded-drawer">
            <div className="telemetry-profile-selector">
              <div className="profile-label">EQUIPPED LOADOUT:</div>
              <button
                type="button"
                className={`btn-weapon-toggle ${characterTelemetry.weaponProfile === 'primary' ? 'active' : ''}`}
                onClick={() => setWeaponProfile('primary')}
                title="Toggle Primary: Toussaint Knight's Steel + Viper Venomous Silver (Preservation & Morana Runestones)"
              >
                ⚔️ Primary: TKSS + Viper Silver
              </button>
              <button
                type="button"
                className={`btn-weapon-toggle ${characterTelemetry.weaponProfile === 'reserve' ? 'active' : ''}`}
                onClick={() => setWeaponProfile('reserve')}
                title="Toggle Reserve: Iris + Aerondight (Severance 10-Stack Critical Engine)"
              >
                🗡️ Reserve: Iris + Aerondight
              </button>
            </div>

            <div className="telemetry-stats-grid">
              <div className="telemetry-stat-cell">
                <span className="telemetry-stat-label">FAST CRIT HIT</span>
                <span className="telemetry-stat-val val-gold">{characterTelemetry.fastCritDmg.toLocaleString()}</span>
              </div>
              <div className="telemetry-stat-cell">
                <span className="telemetry-stat-label">STRONG CRIT / REND</span>
                <span className="telemetry-stat-val val-red">{characterTelemetry.strongCritDmg.toLocaleString()}</span>
              </div>
              <div className="telemetry-stat-cell">
                <span className="telemetry-stat-label">CRIT CHANCE</span>
                <span className="telemetry-stat-val val-blue">{characterTelemetry.critChance}% (Overflow)</span>
              </div>
              <div className="telemetry-stat-cell">
                <span className="telemetry-stat-label">ACTIVE TOXICITY</span>
                <span className="telemetry-stat-val val-green">{characterTelemetry.activeToxicity} / {characterTelemetry.maxToxicity}</span>
              </div>
              <div className="telemetry-stat-cell">
                <span className="telemetry-stat-label">ARMOR RATING</span>
                <span className="telemetry-stat-val val-steel">{characterTelemetry.armor}</span>
              </div>
              <div className="telemetry-stat-cell">
                <span className="telemetry-stat-label">VITALITY POOL</span>
                <span className="telemetry-stat-val val-green">{characterTelemetry.vitality.toLocaleString()} HP</span>
              </div>
            </div>

            <div className="telemetry-gear-footer">
              <span className="telemetry-gear-badge">Steel: {characterTelemetry.steelWeaponName}</span>
              <span className="telemetry-gear-badge">Silver: {characterTelemetry.silverWeaponName}</span>
              <span className="telemetry-gear-badge gold">Runeword: {characterTelemetry.runeword}</span>
              <span className="telemetry-gear-badge purple">Rotation: {characterTelemetry.rotationStep}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
