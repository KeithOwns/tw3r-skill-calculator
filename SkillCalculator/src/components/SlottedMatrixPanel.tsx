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
    unslotSkill,
    activeMutationId,
    setIsMutationsModalOpen,
    getQuadrantBonus
  } = useBuild();

  const activeMutation = MUTATIONS_DATA[activeMutationId] || MUTATIONS_DATA.cat_eyes;

  const renderSlot = (slotIdx: number, isBonus = false) => {
    const skillId = slottedAbilities[slotIdx];
    const skill = skillId 
      ? (COMBAT_SKILLS_DATA[skillId] || SIGNS_SKILLS_DATA[skillId] || ALCHEMY_SKILLS_DATA[skillId] || GENERAL_SKILLS_DATA[skillId]) 
      : null;
    const iconPath = skill ? (skill.icon.startsWith('./') ? skill.icon : `./${skill.icon.replace(/^\//, '')}`) : null;

    const isFilled = Boolean(skill);
    const isSigns = skill?.category === 'signs' || (!skill?.category && !!SIGNS_SKILLS_DATA[skillId!]);
    const isAlchemy = skill?.category === 'alchemy' || (!skill?.category && !!ALCHEMY_SKILLS_DATA[skillId!]);
    const isGeneral = skill?.category === 'general';
    let slotClass = isBonus ? 'bonus-slot-unit' : 'game-ability-slot';
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
        onClick={() => skillId && unslotSkill(slotIdx)}
        title={skill ? `${skill.name} (Click to unslot)` : `Empty Slot ${slotIdx + 1}`}
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
              onClick={(e) => {
                e.stopPropagation();
                unslotSkill(slotIdx);
              }}
            >
              ×
            </span>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-20 text-xs">
            +
          </div>
        )}
      </div>
    );
  };

  const renderQuadrant = (quadIdx: number, startSlot: number) => {
    const bonus = getQuadrantBonus(quadIdx);
    const isSignBonus = bonus.type === 'sign_intensity';
    const isAlchemyBonus = bonus.type === 'vitality';

    let quadClass = 'quad-combat';
    let ribbonIcon = '⚔️';
    let socketClass = '';
    let swirlClass = '';
    let valClass = '';
    let valueDisplay = `+${bonus.value}%`;
    let socketTitle = `Greater Red Mutagen (+10% base + 10% per Combat skill = +${bonus.value}%)`;

    if (isAlchemyBonus) {
      quadClass = 'quad-alchemy';
      ribbonIcon = '🧪';
      socketClass = 'socket-green';
      swirlClass = 'swirl-green';
      valClass = 'alchemy-val';
      valueDisplay = `+${bonus.value}`;
      socketTitle = `Greater Green Mutagen (+150 base + 150 per Alchemy skill = +${bonus.value} Vitality)`;
    } else if (isSignBonus) {
      quadClass = 'quad-signs';
      ribbonIcon = '👁️';
      socketClass = 'socket-blue';
      swirlClass = 'swirl-blue';
      valClass = 'signs-val';
      valueDisplay = `+${bonus.value}%`;
      socketTitle = `Greater Blue Mutagen (+10% base + 10% per Signs skill = +${bonus.value}%)`;
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
            title={socketTitle}
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
    </div>
  );
};
