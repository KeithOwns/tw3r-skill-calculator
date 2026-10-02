import type React from 'react';
import { useBuild } from '../context/BuildStateContext';
import {
  COMBAT_SKILLS_DATA,
  SIGNS_SKILLS_DATA,
  ALCHEMY_SKILLS_DATA,
  GENERAL_SKILLS_DATA,
  COMBAT_TREE_CONNECTIONS,
  SIGNS_TREE_CONNECTIONS,
  ALCHEMY_TREE_CONNECTIONS,
  GENERAL_TREE_CONNECTIONS
} from '../data/groundTruthData';

export const SkillTreeCanvas: React.FC = () => {
  const {
    activeDiscipline,
    allocatedSkills,
    pointsAvailable,
    isSkillAvailable,
    investSkill,
    slotSkill,
    setHoveredSkillId,
    setHoverPos
  } = useBuild();

  const skillsDict = 
    activeDiscipline === 'combat' 
      ? COMBAT_SKILLS_DATA 
      : (activeDiscipline === 'signs' 
          ? SIGNS_SKILLS_DATA 
          : (activeDiscipline === 'alchemy' ? ALCHEMY_SKILLS_DATA : GENERAL_SKILLS_DATA));

  const connections = 
    activeDiscipline === 'combat' 
      ? COMBAT_TREE_CONNECTIONS 
      : (activeDiscipline === 'signs' 
          ? SIGNS_TREE_CONNECTIONS 
          : (activeDiscipline === 'alchemy' ? ALCHEMY_TREE_CONNECTIONS : GENERAL_TREE_CONNECTIONS));

  const handleNodeClick = (e: React.MouseEvent, skillId: string) => {
    e.preventDefault();
    if (e.shiftKey) {
      // Shift+Click equips skill
      slotSkill(skillId);
    } else {
      investSkill(skillId, 1);
    }
  };

  const handleContextMenu = (e: React.MouseEvent, skillId: string) => {
    e.preventDefault();
    investSkill(skillId, -1);
  };

  const handleMouseEnter = (e: React.MouseEvent, skillId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredSkillId(skillId);
    setHoverPos({ x: rect.right + 12, y: rect.top });
  };

  const handleMouseLeave = () => {
    setHoveredSkillId(null);
    setHoverPos(null);
  };

  const watermarkBg = 
    activeDiscipline === 'combat'
      ? "url('./assets/fully_upgraded_clean.png')"
      : (activeDiscipline === 'signs' 
          ? "url('./assets/signs_tree_bg.png')" 
          : (activeDiscipline === 'alchemy' 
              ? "url('./assets/alchemy_tree_bg.png')" 
              : "url('./assets/general_tree_bg.png')"));

  return (
    <>
      <div className="tree-box-frame" id="treeBoxFrame">
        <div className="corner-bottom-left" />
        <div className="corner-bottom-right" />
        
        {/* Background Watermark */}
        <div
          className="tree-canvas-watermark"
          style={{
            backgroundImage: watermarkBg
          }}
        />

        {/* SVG Connecting Conduits */}
        <svg className="tree-lines-svg" viewBox="0 0 780 900">
          {connections.map(([fromId, toId], idx) => {
            const fromSkill = skillsDict[fromId];
            const toSkill = skillsDict[toId];
            if (!fromSkill || !toSkill) return null;

            const isParentAllocated = (allocatedSkills[fromId] || 0) > 0;
            const isChildAllocated = (allocatedSkills[toId] || 0) > 0;

            let lineClass = 'tree-connector-line';
            if (isParentAllocated && isChildAllocated) {
              if (activeDiscipline === 'combat') lineClass += ' active';
              else if (activeDiscipline === 'signs') lineClass += ' active-signs';
              else if (activeDiscipline === 'alchemy') lineClass += ' active-alchemy';
              else lineClass += ' active-general';
            } else if (isParentAllocated || (activeDiscipline === 'general' && isChildAllocated)) {
              lineClass += ' unlocked';
            }

            return (
              <line
                key={`${fromId}-${toId}-${idx}`}
                x1={fromSkill.x}
                y1={fromSkill.y}
                x2={toSkill.x}
                y2={toSkill.y}
                className={lineClass}
              />
            );
          })}
        </svg>

        {/* Interactive Skill Nodes Layer */}
        <div id="treeNodesLayer">
          {Object.values(skillsDict).map(skill => {
            const rank = allocatedSkills[skill.id] || 0;
            const unlocked = isSkillAvailable(skill.id);
            const isSigns = activeDiscipline === 'signs';
            const isAlchemy = activeDiscipline === 'alchemy';
            const isGeneral = activeDiscipline === 'general';

            let nodeClass = 'game-skill-node';
            if (isSigns) nodeClass += ' signs-node';
            if (isAlchemy) nodeClass += ' alchemy-node';
            if (isGeneral) nodeClass += ' general-node';
            if (unlocked) nodeClass += ' unlocked';
            if (rank > 0) nodeClass += ' active';
            if (rank === skill.maxRank) nodeClass += ' maxed';

            // Relative path for subfolder/pages portability
            const iconPath = skill.icon.startsWith('./') ? skill.icon : `./${skill.icon.replace(/^\//, '')}`;

            return (
              <div
                key={skill.id}
                id={`node-${skill.id}`}
                className={nodeClass}
                style={{ left: `${skill.x}px`, top: `${skill.y}px` }}
                onClick={e => handleNodeClick(e, skill.id)}
                onContextMenu={e => handleContextMenu(e, skill.id)}
                onMouseEnter={e => handleMouseEnter(e, skill.id)}
                onMouseLeave={handleMouseLeave}
                title={`${skill.name} (${rank}/${skill.maxRank})\nLeft click: +1 pt\nRight click: -1 pt\nShift+click: Equip`}
              >
                <div className="node-frame-box">
                  <img
                    src={iconPath}
                    alt={skill.name}
                    className="node-icon-asset"
                    loading="lazy"
                  />
                </div>

                {/* Rank Diamond Pips */}
                <div className="node-diamonds-strip">
                  {Array.from({ length: skill.maxRank }).map((_, pIdx) => (
                    <div
                      key={pIdx}
                      className={`rank-diamond-pip ${pIdx < rank ? `filled lit ${isSigns ? 'lit-signs' : (isAlchemy ? 'lit-alchemy' : (isGeneral ? 'lit-general' : ''))}` : ''}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Available Points Bar */}
      <div className="tree-points-bottom-bar">
        <span className="points-avail-label">POINTS AVAILABLE</span>
        <span className="points-avail-value">{pointsAvailable}</span>
        <span className="points-avail-diamond">✦</span>
      </div>
    </>
  );
};
