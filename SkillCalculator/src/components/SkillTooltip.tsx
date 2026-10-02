import type React from 'react';
import { useBuild } from '../context/BuildStateContext';
import { COMBAT_SKILLS_DATA, SIGNS_SKILLS_DATA, ALCHEMY_SKILLS_DATA, GENERAL_SKILLS_DATA } from '../data/groundTruthData';

export const SkillTooltip: React.FC = () => {
  const { hoveredSkillId, hoverPos, allocatedSkills, slotSkill, slottedAbilities, selectedSlotIndex } = useBuild();

  if (!hoveredSkillId) return null;

  const skill = COMBAT_SKILLS_DATA[hoveredSkillId] || SIGNS_SKILLS_DATA[hoveredSkillId] || ALCHEMY_SKILLS_DATA[hoveredSkillId] || GENERAL_SKILLS_DATA[hoveredSkillId];
  if (!skill) return null;

  const currentRank = allocatedSkills[skill.id] || 0;
  const currentRankData = currentRank > 0 ? skill.ranks[currentRank - 1] : null;
  const nextRankData = currentRank < skill.maxRank ? skill.ranks[currentRank] : null;
  const isSlotted = slottedAbilities.includes(skill.id);

  // Position tooltip safely within viewport
  const left = hoverPos ? Math.min(window.innerWidth - 350, Math.max(20, hoverPos.x)) : 100;
  const top = hoverPos ? Math.min(window.innerHeight - 300, Math.max(80, hoverPos.y)) : 150;

  return (
    <div
      id="inGameFloatingTooltip"
      style={{
        display: 'block',
        position: 'fixed',
        left: `${left}px`,
        top: `${top}px`,
        zIndex: 9999
      }}
    >
      <div className="tooltip-title-row">
        <span className="tooltip-name">{skill.name}</span>
        <span className="tooltip-rank">{currentRank}/{skill.maxRank}</span>
      </div>

      {currentRankData && (
        <div id="tipCurrentBlock">
          <div className="tooltip-section-header">Current Level:</div>
          <div className="tooltip-desc-body">{currentRankData.desc}</div>
        </div>
      )}

      {nextRankData && (
        <div id="tipNextBlock">
          <div className="tooltip-section-header">
            {currentRank === 0 ? 'Description:' : 'Next Level:'}
          </div>
          <div className="tooltip-desc-body">{nextRankData.desc}</div>
        </div>
      )}

      {currentRankData?.bonus && (
        <div className="tooltip-bonus-stat">
          <span>⚡</span> <span>{currentRankData.bonus}</span>
        </div>
      )}

      {skill.tacticalTip && (
        <div className="tooltip-tip">{skill.tacticalTip}</div>
      )}

      <div
        className="tooltip-action-row"
        style={{
          marginTop: '8px',
          paddingTop: '6px',
          borderTop: '1px solid rgba(229, 184, 57, 0.25)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <button
          className="btn-action-stone"
          style={{
            padding: '3px 10px',
            fontSize: '11px',
            borderColor: 'var(--tw-gold-primary)',
            color: '#facc15',
            cursor: 'pointer'
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            slotSkill(skill.id, selectedSlotIndex !== null ? selectedSlotIndex : undefined);
          }}
        >
          {isSlotted
            ? '⇄ Move Slot'
            : (selectedSlotIndex !== null ? `⚡ Equip to Slot ${selectedSlotIndex + 1}` : '⚡ Equip Ability')}
        </button>
        {isSlotted && (
          <span style={{ fontSize: '10px', color: '#4ade80', fontWeight: 'bold' }}>
            ✓ Slotted
          </span>
        )}
      </div>
    </div>
  );
};
