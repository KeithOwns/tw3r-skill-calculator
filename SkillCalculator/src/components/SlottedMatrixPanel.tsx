import type React from 'react';
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

  const activeMutation = MUTATIONS_DATA[activeMutationId] || MUTATIONS_DATA.cat_eyes;

  const renderSlot = (slotIdx: number, isBonus = false) => {
    const skillId = slottedAbilities[slotIdx];
    const skill = skillId 
      ? (COMBAT_SKILLS_DATA[skillId] || SIGNS_SKILLS_DATA[skillId] || ALCHEMY_SKILLS_DATA[skillId] || GENERAL_SKILLS_DATA[skillId]) 
      : null;
    const iconPath = skill ? (skill.icon.startsWith('./') ? skill.icon : `./${skill.icon.replace(/^\//, '')}`) : null;

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
      else slotClass += ' filled';
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
        title={skill ? `${skill.name} (Click to change/unslot)` : `Empty Slot ${slotIdx + 1} (Click to equip ability)`}
      >
        {iconPath ? (
          <>
            <img
              src={iconPath}
              alt={skill?.name}
              className="ability-slot-img"
            />
            <span
              className="slot-remove-badge"
              title="Remove skill"
              onClick={(e) => {
                e.stopPropagation();
                unslotSkill(slotIdx);
              }}
            >
              ×
            </span>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-40 text-xs font-bold text-amber-200/60">
            +
          </div>
        )}
      </div>
    );
  };

  const renderQuadrant = (quadIdx: number, startSlot: number) => {
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

    return (
      <div className={`matrix-quadrant-block ${quadClass}`} key={quadIdx}>
        <div className="quad-ribbon-banner">
          <div className="ribbon-title-group">
            <span className="ribbon-swords-icon">{ribbonIcon}</span>
            <span className="ribbon-title">{bonus.label}</span>
          </div>
          <span className={`ribbon-ap-value ${valClass}`}>{valueDisplay}</span>
        </div>
        <div className="quad-socket-row">
          <div
            className={`mutagen-orb-socket ${socketClass}`}
            style={{ cursor: 'pointer' }}
            onClick={() => cycleMutagenSocket(quadIdx)}
            title={`${socketTitle} — Click to cycle Mutagen (Red / Green / Blue)`}
          >
            <div className={`mutagen-swirl-core ${swirlClass}`} />
          </div>
          <div className="slots-vertical-column">
            {renderSlot(startSlot)}
            {renderSlot(startSlot + 1)}
            {renderSlot(startSlot + 2)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="in-game-board-container">
      {/* LEFT WING: Quad 1 (Top), Mutation Bonus Slots (Mid), Quad 3 (Bottom) */}
      <div className="matrix-wing-column left-wing">
        {/* Quadrant 1 */}
        {renderQuadrant(0, 0)}

        {/* Mutation Bonus Slots (Left: 12, 13) */}
        <div className="mutation-middle-slots-row">
          {renderSlot(12, true)}
          {renderSlot(13, true)}
        </div>

        {/* Quadrant 3 */}
        {renderQuadrant(2, 6)}
      </div>

      {/* CENTER: Cosmic Blood and Wine Mutation Nexus */}
      <div className="center-mutation-nexus-column">
        <div className="nexus-heading-block">
          <div className="mutation-label-heading">
            {activeMutation.name.toUpperCase()}
          </div>
          <button
            className="btn-mutations-trigger"
            onClick={() => setIsMutationsModalOpen(true)}
            title="Press C or click to open advanced mutations matrix"
          >
            <kbd>C</kbd> MUTATIONS
          </button>
        </div>

        <div
          className="mutation-core-orb-wrapper"
          onClick={() => setIsMutationsModalOpen(true)}
          title="Click to view & select Mutations"
        >
          <div className="mutation-core-outer-ring" />
          {(activeMutation.iconOrb || activeMutation.icon) ? (
            <img
              src={`./${(activeMutation.iconOrb || activeMutation.icon)!.replace(/^\//, '')}`}
              alt={activeMutation.name}
              className="mutation-core-orb-img"
            />
          ) : (
            <div className="mutation-core-inner-orbs">
              <span className="mutagen-mini-dot red" />
              <span className="mutagen-mini-dot blue" />
              <span className="mutagen-mini-dot green" />
              <span className="mutagen-mini-dot yellow" />
            </div>
          )}
        </div>

        <div className="mutation-center-desc-box">
          <b>{activeMutation.name}:</b> {activeMutation.fullDesc}
        </div>
      </div>

      {/* RIGHT WING: Quad 2 (Top), Mutation Bonus Slots (Mid), Quad 4 (Bottom) */}
      <div className="matrix-wing-column right-wing">
        {/* Quadrant 2 */}
        {renderQuadrant(1, 3)}

        {/* Mutation Bonus Slots (Right: 14, 15) */}
        <div className="mutation-middle-slots-row">
          {renderSlot(14, true)}
          {renderSlot(15, true)}
        </div>

        {/* Quadrant 4 */}
        {renderQuadrant(3, 9)}
      </div>

      {/* Live Combat Telemetry & Weapon Loadout Dock */}
      <div className="telemetry-loadout-dock">
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
    </div>
  );
};
